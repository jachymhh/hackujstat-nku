export function calculateCompositeIndex(data, weights) {
  // Normalize weights to ensure they sum to 100
  const totalWeight = Object.values(weights).reduce(
    (sum, weight) => sum + weight,
    0
  );
  const normalizedWeights = Object.entries(weights).reduce(
    (acc, [key, weight]) => {
      acc[key] = (weight / totalWeight) * 100;
      return acc;
    },
    {}
  );

  // Calculate weighted sum
  const weightedSum =
    (data.safety * normalizedWeights.safety) / 100 +
    (data.housing * normalizedWeights.housing) / 100 +
    (data.airQuality * normalizedWeights.airQuality) / 100 +
    (data.development * normalizedWeights.development) / 100 +
    (data.education * normalizedWeights.education) / 100 +
    (data.healthcare * normalizedWeights.healthcare) / 100;

  return Number.parseFloat(weightedSum.toFixed(1));
}
