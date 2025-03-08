"use client";

import { useEffect, useState } from "react";
import RegionMap from "@/components/region-map";
import IndexWeights from "@/components/index-weights";
import RegionDetails from "@/components/region-details";
import HousingIndexGraph from "@/components/housing-index-graph";
import CrimeIndexGraph from "@/components/crime-index-graph";
import { fetchAllRegionData } from "@/lib/api";
import { calculateCompositeIndex } from "@/lib/calculations";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [regionData, setRegionData] = useState({});
  const [selectedRegion, setSelectedRegion] = useState("Plzensky");
  const [weights, setWeights] = useState({
    safety: 16.6,
    housing: 16.6,
    airQuality: 16.6,
    development: 16.6,
    healthcare: 16.6,
    education: 16.6,
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
        <div className="container mx-auto py-4 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="flex items-center gap-2">
            <Link className="flex items-center" href="/">
              <Image
                src="/icon.png"
                alt="Logo NEMO"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="ml-2 text-lg font-bold">NEMO</span>
            </Link>
            <div className="ml-6">
              <h1 className="text-3xl font-bold">
                Analýza krajů České republiky
              </h1>
              <p className="text-muted-foreground">
                Interaktivní dashboard pro porovnání indexů kvality života v
                krajích ČR
              </p>
            </div>
          </div>
          <nav className="flex gap-4 sm:gap-6 justify-end items-center">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/"
            >
              Domů
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/vizualizace"
            >
              Vizualizace
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        {loading ? (
          <div className="grid gap-6 md:grid-cols-3">
            <Skeleton className="h-[500px] rounded-lg" />
            <Skeleton className="h-[500px] md:col-span-2 rounded-lg" />
            <Skeleton className="h-[300px] md:col-span-3 rounded-lg" />
            <Skeleton className="h-[400px] md:col-span-3 rounded-lg" />
            <Skeleton className="h-[400px] md:col-span-3 rounded-lg" />
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
                  weights={weights}
                />
              </div>
            </div>

            <div className="bg-card rounded-lg shadow p-4 md:col-span-3">
              <h2 className="text-3xl font-semibold mb-4">
                Detail kraje:{" "}
                <span className="text-4xl font-bold">
                  {displayRegionNames[selectedRegion] || selectedRegion}
                </span>
              </h2>
              {regionData[selectedRegion] ? (
                <RegionDetails
                  regionData={regionData[selectedRegion]}
                  compositeIndex={compositeData[selectedRegion] || 0}
                  regionName={selectedRegion}
                />
              ) : (
                <p>Data pro vybraný kraj nejsou k dispozici.</p>
              )}
            </div>

            <div className="md:col-span-3 lg:col-span-3">
              <CrimeIndexGraph selectedRegion={selectedRegion} />
            </div>

            <div className="md:col-span-3 lg:col-span-3">
              <HousingIndexGraph selectedRegion={selectedRegion} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
