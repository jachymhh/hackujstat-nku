import { generateSimpleGeoJSON } from "@/lib/api";

export async function GET() {
  try {
    const geoJSON = generateSimpleGeoJSON();
    return Response.json(geoJSON);
  } catch (error) {
    console.error("Error generating GeoJSON:", error);
    return Response.json(
      { error: "Failed to generate GeoJSON" },
      { status: 500 }
    );
  }
}
