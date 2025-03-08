"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function RegionDetails({ regionData, compositeIndex }) {
  const indices = [
    {
      name: "Index bezpečnosti",
      value: regionData.safety,
      color: "bg-blue-500",
    },
    {
      name: "Index dostupnosti bydlení",
      value: regionData.housing,
      color: "bg-green-500",
    },
    {
      name: "Index kvality ovzduší",
      value: regionData.airQuality,
      color: "bg-yellow-500",
    },
    {
      name: "Index seberozvoje kraje",
      value: regionData.development,
      color: "bg-purple-500",
    },
    {
      name: "Index zdravotnictví",
      value: regionData.healthcare,
      color: "bg-red-500",
    },
    {
      name: "Index školství",
      value: regionData.education,
      color: "bg-purple-500",
    },
  ];

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
              <div className="text-2xl font-bold">
                {index.value !== undefined && index.value !== null
                  ? index.value.toFixed(1)
                  : "N/A"}
              </div>
              <Progress
                value={index.value || 0}
                className={`h-2 ${index.color}`}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
