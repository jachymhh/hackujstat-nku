"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function RegionDetails({ regionData, compositeIndex }) {
  const [showDescription, setShowDescription] = useState(false);

  const indices = [
    {
      name: "Index bezpečnosti",
      value: regionData.safety,
    },
    {
      name: "Index dostupnosti bydlení",
      value: regionData.housing,
    },
    {
      name: "Index kvality ovzduší",
      value: regionData.airQuality,
    },
    {
      name: "Index seberozvoje kraje",
      value: regionData.development,
    },
    {
      name: "Index zdravotnictví",
      value: regionData.healthcare,
    },
    {
      name: "Index školství",
      value: regionData.education,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-full">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <CardTitle>Souhrnný index</CardTitle>
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium border rounded-full text-muted-foreground hover:bg-gray-100"
              aria-label="Informace o souhrnném indexu"
            >
              i
            </button>
          </div>
          {showDescription && (
            <CardDescription className="text-xs text-muted-foreground mt-1">
              Souhrnný index je vypočten jako vážený průměr všech dílčích
              indexů. Váhy jednotlivých indexů lze nastavit v panelu nastavení.
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold">
              {compositeIndex.toFixed(1)}
            </div>
            <Progress
              value={compositeIndex}
              className="h-3 bg-gray-100 border border-gray-200 rounded-sm"
            />
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
                className="h-2 bg-gray-100 border border-gray-200 rounded-sm"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
