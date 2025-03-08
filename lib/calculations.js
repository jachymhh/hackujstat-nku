/**
 * Calculate the composite index for a region based on weights
 *
 * @param {object} regionData - Data for the region
 * @param {object} weights - Weights for each index
 * @returns {number} - Composite index
 */
export function calculateCompositeIndex(regionData, weights) {
  if (!regionData || Object.keys(regionData).length === 0) {
    return 0;
  }

  let compositeIndex = 0;
  let appliedWeightSum = 0;

  // Calculate weighted sum of available indices
  Object.entries(weights).forEach(([key, weight]) => {
    if (regionData[key] !== undefined) {
      compositeIndex += regionData[key] * weight;
      appliedWeightSum += weight;
    }
  });

  // If no weights were applied, return 0
  if (appliedWeightSum === 0) {
    return 0;
  }

  // Normalize by the sum of applied weights
  return compositeIndex / appliedWeightSum;
}
