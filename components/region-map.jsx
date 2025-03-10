"use client";

import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { feature } from "topojson-client";
import { fetchGeoJSON } from "@/lib/api";
import { Slider } from "@/components/ui/slider";

// Move normalization function outside of component for reuse
const normalizeWeights = (weights) => {
  const total = Object.values(weights).reduce((sum, w) => sum + w, 0);
  if (Math.abs(total - 100) <= 0.01) return weights; // Already close enough to 100%

  const newWeights = { ...weights };
  const factor = 100 / total;
  Object.keys(newWeights).forEach((key) => {
    newWeights[key] = Math.round(newWeights[key] * factor * 10) / 10;
  });

  // Final adjustment to ensure exactly 100%
  const finalTotal = Object.values(newWeights).reduce((sum, w) => sum + w, 0);
  if (Math.abs(finalTotal - 100) > 0.01) {
    const largestKey = Object.keys(newWeights).reduce((a, b) =>
      newWeights[a] > newWeights[b] ? a : b
    );
    newWeights[largestKey] += 100 - finalTotal;
  }

  return newWeights;
};

// Helper component for the legend
const ColorLegend = ({ minValue, maxValue, colorScale }) => {
  // Create an array of gradient stops to render
  const steps = 5;
  const legendItems = Array.from({ length: steps }, (_, i) => {
    const value = minValue + (maxValue - minValue) * (i / (steps - 1));
    return {
      value: value,
      color: colorScale(value),
    };
  });

  return (
    <div
      className="flex flex-col bg-white p-2 rounded shadow-md"
      style={{ width: "100px" }}
    >
      <div className="text-xs font-medium mb-1 text-center">Hodnoty</div>
      <div className="flex flex-col h-[120px]">
        {legendItems.map((item, i) => (
          <div key={i} className="flex items-center justify-between mb-1">
            <div
              className="w-4 h-4 mr-2"
              style={{ backgroundColor: item.color }}
            ></div>
            <div className="text-xs">{Math.round(item.value)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function RegionMap({
  compositeData,
  selectedRegion,
  onRegionSelect,
}) {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const loadGeoJSON = async () => {
      try {
        // Try to load from the provided URL
        const response = await fetch("https://grafiky.piko.mom/kraje.json");
        if (response.ok) {
          const topoData = await response.json();

          // Convert TopoJSON to GeoJSON
          if (topoData && topoData.type === "Topology" && topoData.objects) {
            // Extract the feature collection from the TopoJSON
            const geoJson = feature(topoData, topoData.objects.tracts);
            setGeoData(geoJson);
            return;
          }
        }

        // If the above fails, try the API endpoint
        try {
          const apiResponse = await fetch("/api/geojson");
          const data = await apiResponse.json();
          if (
            data &&
            (data.type === "FeatureCollection" || data.type === "Topology")
          ) {
            // If it's TopoJSON, convert it
            if (data.type === "Topology" && data.objects) {
              const geoJson = feature(data, data.objects.tracts);
              setGeoData(geoJson);
            } else {
              setGeoData(data);
            }
            return;
          }
        } catch (apiError) {
          console.warn("Failed to load GeoJSON from API:", apiError);
        }

        // If all else fails, use fetchGeoJSON
        console.log("Using fetchGeoJSON as last resort");
        const fallbackData = await fetchGeoJSON();
        setGeoData(fallbackData);
      } catch (error) {
        console.error("All GeoJSON loading attempts failed:", error);
        // Final fallback - use fetchGeoJSON
        const fallbackData = await fetchGeoJSON();
        setGeoData(fallbackData);
      }
    };

    loadGeoJSON();
  }, []);

  if (!geoData) {
    return (
      <div className="flex items-center justify-center h-full">
        Načítání mapy...
      </div>
    );
  }

  // Find min and max values for color scale
  const values = Object.values(compositeData).filter((val) => !isNaN(val));
  // Set minimum value to 0 if there are values and the minimum is 0 or close to 0
  const minValue = values.length > 0 ? Math.min(...values) : 0;
  const maxValue = values.length > 0 ? Math.max(...values) : 100;

  // Create color scale - changed from blue to orange
  const colorScale = scaleLinear()
    .domain([minValue, maxValue])
    .range(["#fffaf5", "#d84315"]); // Much lighter cream to much darker orange/rust

  // Map region names from TopoJSON to our data format
  const regionNameMap = {
    "Hlavní město Praha": "Praha",
    "Středočeský kraj": "Stredocesky",
    "Jihočeský kraj": "Jihocesky",
    "Plzeňský kraj": "Plzensky",
    "Karlovarský kraj": "Karlovarsky",
    "Ústecký kraj": "Ustecky",
    "Liberecký kraj": "Liberecky",
    "Královéhradecký kraj": "Kralovehradecky",
    "Pardubický kraj": "Pardubicky",
    "Kraj Vysočina": "Vysocina",
    "Jihomoravský kraj": "Jihomoravsky",
    "Olomoucký kraj": "Olomoucky",
    "Zlínský kraj": "Zlinsky",
    "Moravskoslezský kraj": "Moravskoslezsky",
  };

  // For TopoJSON which has different property names
  const getRegionName = (geo) => {
    if (!geo || !geo.properties) return "Unknown";

    if (geo.properties.NAZEV) return geo.properties.NAZEV;
    if (geo.properties.NAZ_CZNUTS3) return geo.properties.NAZ_CZNUTS3;
    if (geo.properties.name) return geo.properties.name;
    if (geo.properties.NAME) return geo.properties.NAME;

    return "Unknown";
  };

  // Map region name to our internal format
  const mapRegionName = (name) => {
    // Direct mapping
    if (regionNameMap[name]) return regionNameMap[name];

    // Try to match without "kraj" suffix
    const nameWithoutKraj = name.replace(/ kraj$/, "");
    if (regionNameMap[nameWithoutKraj]) return regionNameMap[nameWithoutKraj];

    // Return the original name if no mapping found
    return name;
  };

  return (
    <TooltipProvider>
      <div className="relative w-full h-full">
        <div className="flex">
          <div className="flex-grow">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 6000,
                center: [15.5, 49.8],
              }}
              width={800}
              height={500}
              style={{ width: "100%", height: "100%" }}
            >
              <g>
                <Geographies geography={geoData}>
                  {({ geographies }) =>
                    geographies.map((geo, i) => {
                      const regionName = getRegionName(geo);
                      const simplifiedName = mapRegionName(regionName);
                      const compositeValue = compositeData[simplifiedName]; // Default value
                      const isSelected = simplifiedName === selectedRegion;

                      return (
                        <Tooltip key={geo.rsmKey || geo.id || `region-${i}`}>
                          <TooltipTrigger asChild>
                            <Geography
                              geography={geo}
                              onClick={() => onRegionSelect(simplifiedName)}
                              style={{
                                default: {
                                  fill: colorScale(compositeValue),
                                  stroke: "#FFFFFF",
                                  strokeWidth: isSelected ? 6 : 0.5, // Increased from 5 to 6 for selected
                                  outline: "none",
                                  filter: isSelected
                                    ? "drop-shadow(0px 0px 6px rgba(255, 140, 0, 0.8))"
                                    : "none",
                                  fontWeight: isSelected ? "bold" : "normal",
                                },
                                hover: {
                                  fill: "#e65100", // Very dark orange for hover
                                  stroke: "#FFFFFF",
                                  strokeWidth: 2, // Slightly thicker border on hover
                                  outline: "none",
                                  cursor: "pointer",
                                  filter:
                                    "drop-shadow(0px 0px 4px rgba(230, 81, 0, 0.5))",
                                },
                                pressed: {
                                  fill: isSelected
                                    ? colorScale(compositeValue)
                                    : "#e65100",
                                  stroke: "#FFFFFF",
                                  strokeWidth: isSelected ? 6 : 2, // Increased from 5 to 6 for selected
                                  outline: "none",
                                  fontWeight: "bold", // Bold on press
                                },
                              }}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="text-sm font-medium">
                              {regionName}
                            </div>
                            <div className="text-xs">
                              Kompozitní index: {compositeValue.toFixed(1)}
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })
                  }
                </Geographies>
              </g>
            </ComposableMap>
          </div>
          <div className="ml-2 self-center">
            <ColorLegend
              minValue={minValue}
              maxValue={maxValue}
              colorScale={colorScale}
            />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

export function IndexWeights({ weights, onChange }) {
  // Make sure education is included in the initial weights
  const [localWeights, setLocalWeights] = useState(() => {
    let initialWeights = { ...weights };

    // If education is missing from the weights, add it with a default value
    if (!initialWeights.education) {
      const totalExisting = Object.values(initialWeights).reduce(
        (sum, w) => sum + w,
        0
      );
      const remaining = Math.max(0, 100 - totalExisting);
      initialWeights = {
        ...initialWeights,
        education:
          remaining > 0
            ? remaining
            : Math.floor(100 / (Object.keys(initialWeights).length + 1)),
      };
    }

    // Always normalize to ensure exactly 100%
    return normalizeWeights(initialWeights);
  });

  // Ensure weights always sum to 100%
  const updateWeight = (key, value) => {
    /* rest of the updateWeight function remains the same */

    // Existing code for updateWeight...
    // Create a new weights object with the adjusted value
    const newWeights = { ...localWeights };
    newWeights[key] = value;

    // Rest of the existing function...

    // Normalizuj váhy před aplikací
    const normalizedWeights = normalizeWeights(newWeights);
    setLocalWeights(normalizedWeights);
  };

  /* rest of the component remains the same */
}
