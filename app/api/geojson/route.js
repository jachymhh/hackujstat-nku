import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { generateSimpleGeoJSON } from "@/lib/api";

export async function GET() {
  try {
    // Try to fetch from the external URL first
    try {
      const response = await fetch("https://grafiky.piko.mom/kraje.json");
      if (response.ok) {
        const data = await response.json();
        return NextResponse.json(data);
      }
    } catch (fetchError) {
      console.warn("Failed to fetch external GeoJSON:", fetchError);
    }

    // Try to read the GeoJSON file from the public directory
    const filePath = path.join(process.cwd(), "public", "kraje.json");

    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf8");
        const geoJson = JSON.parse(fileContent);

        // Validate that it's a proper GeoJSON or TopoJSON
        if (
          geoJson &&
          (geoJson.type === "FeatureCollection" || geoJson.type === "Topology")
        ) {
          return NextResponse.json(geoJson);
        } else {
          console.error("Invalid GeoJSON/TopoJSON format");
          // Return generated GeoJSON instead
          return NextResponse.json(generateSimpleGeoJSON());
        }
      } catch (parseError) {
        console.error("Error parsing GeoJSON:", parseError);
        // Return generated GeoJSON instead
        return NextResponse.json(generateSimpleGeoJSON());
      }
    } else {
      // If file doesn't exist locally, return generated GeoJSON
      console.log("GeoJSON file not found, using generated data");
      return NextResponse.json(generateSimpleGeoJSON());
    }
  } catch (error) {
    console.error("Error reading GeoJSON file:", error);
    // Return generated GeoJSON as fallback
    return NextResponse.json(generateSimpleGeoJSON());
  }
}
