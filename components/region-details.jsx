"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function RegionDetails({ regionData, compositeIndex }) {
  // Map for proper display names with diacritics
  const displayNames = {
    safety: "Index bezpečnosti",
    housing: "Index dostupnosti bydlení",
    airQuality: "Index kvality ovzduší",
    development: "Index seberozvoje kraje",
    healthcare: "Index zdravotnictví",
  };

  // Colors for each index
  const indexColors = {
    safety: "bg-blue-500",
    housing: "bg-green-500",
    airQuality: "bg-yellow-500",
    development: "bg-purple-500",
    healthcare: "bg-red-500",
  };

  // Create indices array from the regionData object
  const indices = Object.entries(regionData).map(([key, value]) => ({
    name: displayNames[key] || key,
    value: value,
    color: indexColors[key] || "bg-gray-500",
  }));

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-full">
        <CardHeader className="pb-2">
          <CardTitle>Kompozitní index</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold">
              {compositeIndex.toFixed(1)}
            </div>
            <Progress value={compositeIndex} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {indices.map((index) => (
        <Card key={index.name}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{index.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">{index.value.toFixed(1)}</div>
              <Progress value={index.value} className={`h-2 ${index.color}`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
