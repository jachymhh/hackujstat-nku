"use client";
import { useState } from "react";
import { Slider } from "./ui/slider";

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

export default function IndexWeights({ weights, onChange }) {
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
    // Create a new weights object with the adjusted value
    const newWeights = { ...localWeights };
    newWeights[key] = value;

    // Normalizuj váhy před aplikací
    const normalizedWeights = normalizeWeights(newWeights);
    setLocalWeights(normalizedWeights);

    // Notify parent component of changes
    if (onChange) {
      onChange(normalizedWeights);
    }
  };

  return (
    <div className="space-y-6">
      {Object.entries(localWeights).map(([key, value]) => (
        <div key={key} className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium capitalize">
              {key === "airQuality"
                ? "Kvalita ovzduší"
                : key === "housing"
                ? "Bydlení"
                : key === "safety"
                ? "Bezpečnost"
                : key === "healthcare"
                ? "Zdravotnictví"
                : key === "development"
                ? "Rozvoj"
                : key === "education"
                ? "Vzdělávání"
                : key}
            </label>
            <span className="text-sm font-medium">{value.toFixed(1)}%</span>
          </div>
          <Slider
            defaultValue={[value]}
            min={0}
            max={100}
            step={0.1}
            value={[value]}
            onValueChange={(vals) => updateWeight(key, vals[0])}
          />
        </div>
      ))}
    </div>
  );
}
