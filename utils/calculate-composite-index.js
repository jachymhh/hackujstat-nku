export const calculateCompositeIndex = (data, weights) => {
  const normalizedWeights = normalizeWeights(weights);
  return data.reduce((compositeIndex, item) => {
    const weightedSum = Object.keys(normalizedWeights).reduce((sum, key) => {
      return sum + (item[key] * normalizedWeights[key]) / 100;
    }, 0);
    return compositeIndex + weightedSum;
  }, 0);
};

const normalizeWeights = (weights) => {
  const total = Object.values(weights).reduce((sum, w) => sum + w, 0);
  if (total === 0) {
    const count = Object.keys(weights).length;
    const equalWeight = 100 / count;
    return Object.keys(weights).reduce((acc, key) => {
      acc[key] = equalWeight;
      return acc;
    }, {});
  }

  const newWeights = {};
  Object.keys(weights).forEach((key) => {
    newWeights[key] = (weights[key] / total) * 100;
  });

  Object.keys(newWeights).forEach((key) => {
    newWeights[key] = Math.round(newWeights[key] * 10) / 10;
  });

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
