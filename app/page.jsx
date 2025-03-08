"use client";

import { useEffect, useState } from "react";
import RegionMap from "@/components/region-map";
import IndexWeights from "@/components/index-weights";
import RegionDetails from "@/components/region-details";
import { fetchAllRegionData } from "@/lib/api";
import { calculateCompositeIndex } from "@/lib/calculations";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [regionData, setRegionData] = useState({});
  const [selectedRegion, setSelectedRegion] = useState("Praha");
  const [weights, setWeights] = useState({
    safety: 20,
    housing: 20,
    airQuality: 20,
    development: 20,
    healthcare: 20,
  });

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchAllRegionData();
        setRegionData(data);
      } catch (error) {
        console.error("Failed to load region data:", error);
        // Generate mock data if API fails
        const mockData = {};
        const regions = [
          "Praha",
          "Stredocesky",
          "Jihocesky",
          "Plzensky",
          "Karlovarsky",
          "Ustecky",
          "Liberecky",
          "Kralovehradecky",
          "Pardubicky",
          "Vysocina",
          "Jihomoravsky",
          "Olomoucky",
          "Zlinsky",
          "Moravskoslezsky",
        ];

        regions.forEach((region) => {
          mockData[region] = {
            safety: 50 + Math.random() * 30,
            housing: 40 + Math.random() * 40,
            airQuality: 30 + Math.random() * 50,
            development: 45 + Math.random() * 35,
            healthcare: 55 + Math.random() * 25,
          };
        });

        setRegionData(mockData);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  const handleWeightChange = (newWeights) => {
    setWeights(newWeights);
  };

  const compositeData = Object.entries(regionData).reduce(
    (acc, [region, data]) => {
      acc[region] = calculateCompositeIndex(data, weights);
      return acc;
    },
    {}
  );

  // Map for proper display names with diacritics
  const displayRegionNames = {
    Praha: "Praha",
    Stredocesky: "Středočeský kraj",
    Jihocesky: "Jihočeský kraj",
    Plzensky: "Plzeňský kraj",
    Karlovarsky: "Karlovarský kraj",
    Ustecky: "Ústecký kraj",
    Liberecky: "Liberecký kraj",
    Kralovehradecky: "Královéhradecký kraj",
    Pardubicky: "Pardubický kraj",
    Vysocina: "Kraj Vysočina",
    Jihomoravsky: "Jihomoravský kraj",
    Olomoucky: "Olomoucký kraj",
    Zlinsky: "Zlínský kraj",
    Moravskoslezsky: "Moravskoslezský kraj",
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto py-4">
          <h1 className="text-3xl font-bold">Analýza krajů České republiky</h1>
          <p className="text-muted-foreground">
            Interaktivní dashboard pro porovnání indexů kvality života v krajích
            ČR
          </p>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        {loading ? (
          <div className="grid gap-6 md:grid-cols-3">
            <Skeleton className="h-[500px] rounded-lg" />
            <Skeleton className="h-[500px] md:col-span-2 rounded-lg" />
            <Skeleton className="h-[300px] md:col-span-3 rounded-lg" />
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-card rounded-lg shadow p-4 md:col-span-3 lg:col-span-1">
              <h2 className="text-xl font-semibold mb-4">
                Nastavení vah indexů
              </h2>
              <IndexWeights weights={weights} onChange={handleWeightChange} />
            </div>

            <div className="bg-card rounded-lg shadow p-4 md:col-span-3 lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Mapa krajů ČR</h2>
              <div className="h-[500px]">
                <RegionMap
                  compositeData={compositeData}
                  selectedRegion={selectedRegion}
                  onRegionSelect={handleRegionSelect}
                  weights={weights} // Add this line to pass weights
                />
              </div>
            </div>

            <div className="bg-card rounded-lg shadow p-4 md:col-span-3">
              <h2 className="text-xl font-semibold mb-4">
                Detail kraje:{" "}
                {displayRegionNames[selectedRegion] || selectedRegion}
              </h2>
              {regionData[selectedRegion] ? (
                <RegionDetails
                  regionData={regionData[selectedRegion]}
                  compositeIndex={compositeData[selectedRegion] || 0}
                />
              ) : (
                <p>Data pro vybraný kraj nejsou k dispozici.</p>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
