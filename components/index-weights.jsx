"use client";

import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function IndexWeights({ weights, onChange }) {
  // Function to distribute weights equally
  const distributeEqualWeights = (weightObj) => {
    const count = Object.keys(weightObj).length;
    const equalWeight = 100 / count;
    return Object.keys(weightObj).reduce((acc, key) => {
      acc[key] = equalWeight;
      return acc;
    }, {});
  };

  // Make sure education is included in the initial weights
  const [localWeights, setLocalWeights] = useState(() => {
    // If education is missing from the weights, add it
    const updatedWeights = !weights.education
      ? { ...weights, education: 0 }
      : { ...weights };
    // Distribute weights equally
    return distributeEqualWeights(updatedWeights);
  });

  // Improved normalization function to ensure exact 100% sum
  const normalizeWeights = (weights) => {
    const total = Object.values(weights).reduce((sum, w) => sum + w, 0);
    if (total === 0) {
      // Handle zero case - distribute evenly
      return distributeEqualWeights(weights);
    }

    // First pass: proportionally adjust all weights
    const newWeights = {};
    Object.keys(weights).forEach((key) => {
      newWeights[key] = (weights[key] / total) * 100;
    });

    // Round all weights to one decimal place
    Object.keys(newWeights).forEach((key) => {
      newWeights[key] = Math.round(newWeights[key] * 10) / 10;
    });

    // Ensure exact 100% by adjusting the largest weight
    const finalTotal = Object.values(newWeights).reduce((sum, w) => sum + w, 0);
    if (finalTotal !== 100) {
      const largestKey = Object.keys(newWeights).reduce((a, b) =>
        newWeights[a] > newWeights[b] ? a : b
      );
      newWeights[largestKey] = +(
        newWeights[largestKey] +
        (100 - finalTotal)
      ).toFixed(1);
    }

    return newWeights;
  };

  // Reset to equal weights
  const resetToEqualWeights = () => {
    const equalWeights = distributeEqualWeights(localWeights);
    setLocalWeights(equalWeights);
  };

  // Ensure weights always sum to 100%
  const updateWeight = (key, value) => {
    // Get the current value and calculate the difference
    const currentValue = localWeights[key];
    const diff = value - currentValue;

    // Create a new weights object with the adjusted value
    const newWeights = { ...localWeights };
    newWeights[key] = value;

    // Get other keys
    const otherKeys = Object.keys(localWeights).filter((k) => k !== key);

    if (diff !== 0) {
      const otherTotal = otherKeys.reduce((sum, k) => sum + newWeights[k], 0);

      // If increasing one slider, proportionally decrease others
      if (diff > 0) {
        if (otherTotal > 0) {
          otherKeys.forEach((k) => {
            newWeights[k] = Math.max(
              0,
              newWeights[k] - (diff * newWeights[k]) / otherTotal
            );
          });
        }
      }
      // If decreasing one slider, proportionally increase others
      else {
        otherKeys.forEach((k) => {
          const proportion =
            otherTotal === 0
              ? 1 / otherKeys.length
              : newWeights[k] / otherTotal;
          newWeights[k] = newWeights[k] + Math.abs(diff) * proportion;
        });
      }
    }

    // Normalize weights to exactly 100%
    const normalizedWeights = normalizeWeights(newWeights);
    setLocalWeights(normalizedWeights);
  };

  useEffect(() => {
    onChange(localWeights);
  }, [localWeights, onChange]);

  // Calculate total to display (for verification)
  const totalWeight = Object.values(localWeights).reduce(
    (sum, w) => sum + w,
    0
  );

  // Make sure indexLabels has all the correct labels
  const indexLabels = {
    safety: "Index bezpečnosti",
    housing: "Index dostupnosti bydlení",
    airQuality: "Index kvality ovzduší",
    education: "Index školství",
    development: "Index seberozvoje kraje",
    healthcare: "Index zdravotnictví",
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Nastavení vah indexů</h3>
        <Button onClick={resetToEqualWeights} variant="outline" size="sm">
          Nastavit stejné váhy
        </Button>
      </div>

      {/* This ensures all keys in localWeights are shown as sliders */}
      {Object.keys(localWeights).map((key) => (
        <div key={key} className="space-y-2">
          <div className="flex justify-between">
            {/* Use the proper label from indexLabels, or fallback to key name */}
            <label className="text-sm font-medium">
              {indexLabels[key] || key}
            </label>
            <span className="text-sm font-medium">
              {localWeights[key].toFixed(1)}%
            </span>
          </div>
          <Slider
            value={[localWeights[key]]}
            min={0}
            max={100}
            step={1}
            onValueChange={([value]) => updateWeight(key, value)}
          />
        </div>
      ))}

      <div className="mt-4 p-3 bg-muted rounded-md">
        <h3 className="font-medium mb-2">
          Rozložení vah (Celkem: {totalWeight.toFixed(1)}%)
        </h3>
        <div className="h-6 w-full flex rounded-md overflow-hidden">
          {Object.keys(localWeights).map((key, index) => {
            const colors = [
              "bg-blue-500", // safety
              "bg-green-500", // housing
              "bg-yellow-500", // airQuality
              "bg-orange-500", // education
              "bg-purple-500", // development
              "bg-red-500", // healthcare
            ];
            return (
              <div
                key={key}
                className={`${colors[index % colors.length]} h-full`}
                style={{ width: `${localWeights[key]}%` }}
                title={`${indexLabels[key] || key}: ${localWeights[key].toFixed(
                  1
                )}%`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
