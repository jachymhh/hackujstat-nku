// List of all regions
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

// Map region names for API calls
const apiRegionNameMap = {
  Praha: "praha",
  Stredocesky: "Stredocesky",
  Jihocesky: "jihocesky",
  Plzensky: "plzensky",
  Karlovarsky: "karlovarsky",
  Ustecky: "ustecky",
  Liberecky: "liberecky",
  Kralovehradecky: "kralovehradecky",
  Pardubicky: "pardubicky",
  Vysocina: "vysocina",
  Jihomoravsky: "jihomoravsky",
  Olomoucky: "olomoucky",
  Zlinsky: "zlinsky",
  Moravskoslezsky: "moravskoslezsky",
};

// Map region names for display in API responses
const displayRegionNameMap = {
  "Hlavní město Praha": "praha",
  "Středočeský kraj": "stredocesky",
  "Jihočeský kraj": "jihocesky",
  "Plzeňský kraj": "plzensky",
  "Karlovarský kraj": "karlovarsky",
  "Ústecký kraj": "ustecky",
  "Liberecký kraj": "liberecky",
  "Královéhradecký kraj": "kralovehradecky",
  "Pardubický kraj": "pardubicky",
  "Kraj Vysočina": "vysocina",
  "Jihomoravský kraj": "jihomoravsky",
  "Olomoucký kraj": "olomoucky",
  "Zlínský kraj": "zlinsky",
  "Moravskoslezský kraj": "moravskoslezsky",
};

// Fixed fetchSafetyIndex function
async function fetchSafetyIndex(region) {
  try {
    // Map region keys to lowercase versions for API endpoint
    const regionLower = region
      .toLowerCase()
      .replace("ý", "y")
      .replace("é", "e");

    // Fetch data from the region-specific endpoint
    const response = await fetch(`/api/bezpeci/${regionLower}`);
    const data = await response.json();

    // Get the first item in the data array
    const regionData = data.data[0];
    if (!regionData) {
      console.error(`No data found for safety index in ${region}`);
      return 0;
    }

    // Get the region name key (the only key in the object)
    const regionNameKey = Object.keys(regionData)[0];

    // Get the array of year data
    const yearData = regionData[regionNameKey];
    if (!Array.isArray(yearData)) {
      console.error(`Invalid data structure for safety index in ${region}`);
      return 0;
    }

    // Find the 2023 entry specifically
    const entry2023 = yearData.find((item) => item.rok === 2023);

    if (entry2023 && entry2023.index !== undefined) {
      return Number.parseFloat(entry2023.index.toFixed(1));
    } else {
      console.warn(`No 2023 data found for safety index in ${region}`);
      return 0;
    }
  } catch (error) {
    console.error(`Failed to fetch safety index for ${region}:`, error);
    return 0;
  }
}

// Fix for fetchHousingIndex to use consistent mapping
async function fetchHousingIndex() {
  try {
    const response = await fetch("/api/bydleni/2023");
    const data = await response.json();

    // Create a direct mapping from official names to our region keys
    const officialNameToRegion = {
      "Hlavní město Praha": "Praha",
      Praha: "Praha",
      "Středočeský kraj": "Stredocesky",
      "Jihočeský kraj": "Jihocesky",
      "Plzeňský kraj": "Plzensky",
      "Karlovarský kraj": "Karlovarsky",
      "Ústecký kraj": "Ustecky",
      "Liberecký kraj": "Liberecky",
      "Královéhradecký kraj": "Kralovehradecky",
      "Pardubický kraj": "Pardubicky",
      "Kraj Vysočina": "Vysocina",
      Vysočina: "Vysocina",
      "Jihomoravský kraj": "Jihomoravsky",
      "Olomoucký kraj": "Olomoucky",
      "Zlínský kraj": "Zlinsky",
      "Moravskoslezský kraj": "Moravskoslezsky",
    };

    const result = {};

    data.data.forEach((item) => {
      // Check for different possible property names
      const regionName = item.nazev_kraje || item.Kraj || "";

      // Look for direct match
      const matchedRegion = officialNameToRegion[regionName];

      if (matchedRegion) {
        // Use Index or index property
        const indexValue = item.Index || item.index || 0;
        result[matchedRegion] = Number.parseFloat(indexValue.toFixed(1));
      } else {
        // Fallback to fuzzy matching
        const normalizedName = regionName
          .toLowerCase()
          .replace(" kraj", "")
          .replace("hlavní město ", "")
          .trim();

        const fuzzyMatch = regions.find(
          (region) =>
            region.toLowerCase().includes(normalizedName) ||
            normalizedName.includes(region.toLowerCase())
        );

        if (fuzzyMatch) {
          const indexValue = item.Index || item.index || 0;
          result[fuzzyMatch] = Number.parseFloat(indexValue.toFixed(1));
        }
      }
    });

    return result;
  } catch (error) {
    console.error("Failed to fetch housing index:", error);
    return {};
  }
}

// Fixed fetchAirQualityIndex to only use entries with AQI values
async function fetchAirQualityIndex() {
  try {
    const response = await fetch("/api/ovzdusi");
    const data = await response.json();

    // Create a direct mapping from official names to our region keys
    const officialNameToRegion = {
      "Hlavní město Praha": "Praha",
      Praha: "Praha",
      "Středočeský kraj": "Stredocesky",
      "Jihočeský kraj": "Jihocesky",
      "Plzeňský kraj": "Plzensky",
      "Karlovarský kraj": "Karlovarsky",
      "Ústecký kraj": "Ustecky",
      "Liberecký kraj": "Liberecky",
      "Královéhradecký kraj": "Kralovehradecky",
      "Pardubický kraj": "Pardubicky",
      "Kraj Vysočina": "Vysocina",
      Vysočina: "Vysocina",
      "Jihomoravský kraj": "Jihomoravsky",
      "Olomoucký kraj": "Olomoucky",
      "Zlínský kraj": "Zlinsky",
      "Moravskoslezský kraj": "Moravskoslezsky",
    };

    const result = {};

    // Filter entries to only include those with AQI values
    const entriesWithAQI = data.data.filter(
      (item) => item.Rok === 2023 && item.AQI !== undefined
    );

    entriesWithAQI.forEach((item) => {
      // Get the region name
      const regionName = item.Kraj;

      // Look up direct match in our mapping
      const matchedRegion = officialNameToRegion[regionName];

      if (matchedRegion) {
        // Use the AQI value
        result[matchedRegion] = Number.parseFloat(item.AQI.toFixed(1));
      } else {
        // Fallback to fuzzy matching
        const normalizedName = regionName
          .toLowerCase()
          .replace(" kraj", "")
          .replace("hlavní město ", "")
          .trim();

        const fuzzyMatch = regions.find(
          (region) =>
            region.toLowerCase().includes(normalizedName) ||
            normalizedName.includes(region.toLowerCase())
        );

        if (fuzzyMatch) {
          result[fuzzyMatch] = Number.parseFloat(item.AQI.toFixed(1));
        }
      }
    });

    return result;
  } catch (error) {
    console.error("Failed to fetch air quality index:", error);
    return {};
  }
}

// Fix for fetchEducationIndex function with proper mapping
async function fetchEducationIndex() {
  try {
    const response = await fetch("/api/skoly");
    const data = await response.json();

    // Create a direct mapping from official names to our region keys
    const officialNameToRegion = {
      "Hlavní město Praha": "Praha",
      Praha: "Praha",
      "Středočeský kraj": "Stredocesky",
      "Jihočeský kraj": "Jihocesky",
      "Plzeňský kraj": "Plzensky",
      "Karlovarský kraj": "Karlovarsky",
      "Ústecký kraj": "Ustecky",
      "Liberecký kraj": "Liberecky",
      "Královéhradecký kraj": "Kralovehradecky",
      "Pardubický kraj": "Pardubicky",
      "Kraj Vysočina": "Vysocina",
      Vysočina: "Vysocina",
      "Jihomoravský kraj": "Jihomoravsky",
      "Olomoucký kraj": "Olomoucky",
      "Zlínský kraj": "Zlinsky",
      "Moravskoslezský kraj": "Moravskoslezsky",
    };

    const result = {};

    data.data.forEach((item) => {
      // Use nazev_kraje as that's what's in the API data
      const regionName = item.nazev_kraje || "";

      // Look up direct match in our mapping
      const matchedRegion = officialNameToRegion[regionName];

      if (matchedRegion) {
        // Use the index value directly from the API
        result[matchedRegion] = Number.parseFloat(item.index.toFixed(1));
      } else {
        // Fallback to fuzzy matching if needed
        const normalizedName = regionName
          .toLowerCase()
          .replace(" kraj", "")
          .replace("hlavní město ", "")
          .trim();

        const fuzzyMatch = regions.find(
          (region) =>
            region.toLowerCase().includes(normalizedName) ||
            normalizedName.includes(region.toLowerCase())
        );

        if (fuzzyMatch) {
          result[fuzzyMatch] = Number.parseFloat(item.index.toFixed(1));
        }
      }
    });

    return result;
  } catch (error) {
    console.error("Failed to fetch education index:", error);
    return {};
  }
}

// Fetch development index for a region
async function fetchDevelopmentIndex(region) {
  try {
    const apiRegion = apiRegionNameMap[region].toLowerCase();
    const response = await fetch(`/api/vydaje/${apiRegion}`);
    const data = await response.json();

    // Find the entry for year 2023
    const regionKey = `${apiRegion}_vyd`;
    const entries = data.data[0][regionKey];
    const entry2023 = entries.find((item) => item.rok === 2023);

    return entry2023 ? Number.parseFloat(entry2023.index.toFixed(1)) : 0;
  } catch (error) {
    console.error(`Failed to fetch development index for ${region}:`, error);
    return 0;
  }
}

// Fix for fetchHealthcareIndex - removed console.log statements
async function fetchHealthcareIndex() {
  try {
    const response = await fetch("/api/zdravotnictvi");
    const data = await response.json();

    // Create a direct mapping from official names to our region keys
    const officialNameToRegion = {
      "Hlavní město Praha": "Praha",
      Praha: "Praha",
      "Středočeský kraj": "Stredocesky",
      "Jihočeský kraj": "Jihocesky",
      "Plzeňský kraj": "Plzensky",
      "Karlovarský kraj": "Karlovarsky",
      "Ústecký kraj": "Ustecky",
      "Liberecký kraj": "Liberecky",
      "Královéhradecký kraj": "Kralovehradecky",
      "Pardubický kraj": "Pardubicky",
      "Kraj Vysočina": "Vysocina",
      Vysočina: "Vysocina",
      "Jihomoravský kraj": "Jihomoravsky",
      "Olomoucký kraj": "Olomoucky",
      "Zlínský kraj": "Zlinsky",
      "Moravskoslezský kraj": "Moravskoslezsky",
    };

    const result = {};

    data.data.forEach((item) => {
      const regionName = item.nazev_kraje || item.Kraj || item.kraj || "";

      // Look up direct match in our mapping
      const matchedRegion = officialNameToRegion[regionName];

      if (matchedRegion) {
        result[matchedRegion] = Number.parseFloat(item.index.toFixed(1));
      } else {
        // Fallback to fuzzy matching if no direct match
        const normalizedName = regionName
          .toLowerCase()
          .replace(" kraj", "")
          .replace("hlavní město ", "")
          .replace("kraj ", "")
          .trim();

        const fuzzyMatch = regions.find(
          (region) =>
            region.toLowerCase().includes(normalizedName) ||
            normalizedName.includes(region.toLowerCase())
        );

        if (fuzzyMatch) {
          result[fuzzyMatch] = Number.parseFloat(item.index.toFixed(1));
        }
      }
    });

    return result;
  } catch (error) {
    console.error("Failed to fetch healthcare index:", error);
    return {};
  }
}

// Fetch all data for all regions
export async function fetchAllRegionData() {
  // Fetch indices that return data for all regions at once
  const [housingData, airQualityData, educationData, healthcareData] =
    await Promise.all([
      fetchHousingIndex(),
      fetchAirQualityIndex(),
      fetchEducationIndex(),
      fetchHealthcareIndex(),
    ]);

  // Create a map to store all region data
  const allRegionData = {};

  // Fetch safety and development indices for each region
  await Promise.all(
    regions.map(async (region) => {
      const [safetyIndex, developmentIndex] = await Promise.all([
        fetchSafetyIndex(region),
        fetchDevelopmentIndex(region),
      ]);

      allRegionData[region] = {
        safety: safetyIndex,
        housing: housingData[region] || 0,
        airQuality: airQualityData[region] || 0,
        education: educationData[region] || 0, // Make sure education is included
        development: developmentIndex,
        healthcare: healthcareData[region] || 0,
      };
    })
  );

  return allRegionData;
}

// Mock API endpoint for GeoJSON data
export async function fetchGeoJSON() {
  try {
    const response = await fetch("https://grafiky.piko.mom/kraje.json");
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch GeoJSON:", error);
    throw error;
  }
}

// Function to calculate composite index based on regional data and weights
export function calculateCompositeIndex(regionData, weights) {
  if (!regionData || !weights) return 0;

  // Ensure all required indices exist, defaulting to 0 if missing
  const indices = {
    safety: regionData.safety || 0,
    housing: regionData.housing || 0,
    airQuality: regionData.airQuality || 0,
    education: regionData.education || 0,
    development: regionData.development || 0,
    healthcare: regionData.healthcare || 0,
  };

  // Calculate weighted average including education
  let composite = 0;
  let totalWeight = 0;

  // Loop through all indices and apply weights
  Object.keys(indices).forEach((key) => {
    if (weights[key] !== undefined) {
      composite += indices[key] * (weights[key] / 100);
      totalWeight += weights[key] / 100;
    }
  });

  // Normalize in case weights don't add up to 100
  return totalWeight > 0 ? composite / totalWeight : 0;
}
