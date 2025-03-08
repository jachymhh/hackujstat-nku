"use client";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function HousingIndexGraph({ selectedRegion }) {
  const [data, setData] = useState([]);
  const [years, setYears] = useState([]);
  const [indexData, setIndexData] = useState([]);
  const [trendData, setTrendData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Map internal region names to API region names
  const regionNameMapping = {
    Praha: "Praha",
    Stredocesky: "Středočeský kraj",
    Jihocesky: "Jihočeský kraj",
    Plzensky: "Plzeňský kraj",
    Karlovarsky: "Karlovarský kraj",
    Ustecky: "Ústecký kraj",
    Liberecky: "Liberecký kraj",
    Kralovehradecky: "Královéhradecký kraj",
    Pardubicky: "Pardubický kraj",
    Vysocina: "Vysočina", // Fixed: Changed from "Kraj Vysočina" to "Vysočina"
    Jihomoravsky: "Jihomoravský kraj",
    Olomoucky: "Olomoucký kraj",
    Zlinsky: "Zlínský kraj",
    Moravskoslezsky: "Moravskoslezský kraj",
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      // Fetch data for each year from 2016 to 2023
      const fetchedData = await Promise.all(
        Array.from({ length: 8 }, (_, i) => {
          const year = 2016 + i;
          return fetch(`/api/bydleni/${year}`).then((res) => res.json());
        })
      );

      setData(fetchedData);
      setYears(Array.from({ length: 8 }, (_, i) => 2016 + i));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching housing index data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0 && selectedRegion) {
      const apiRegionName = regionNameMapping[selectedRegion];

      // Filter data for selected region - handle both possible formats
      const regionIndexData = data.map((yearData) => {
        // Try to find exact match first
        const exactMatch = yearData.data.find(
          (item) => item.Kraj === apiRegionName
        );
        if (exactMatch) return exactMatch.Index;

        // If no exact match, try to find a region that contains the key part of the name
        // This handles variations like "Královéhradecký" vs "Královéhradecký kraj"
        const partialMatch = yearData.data.find((item) => {
          if (apiRegionName === "Královéhradecký kraj") {
            return item.Kraj.includes("Královehradecký");
          }
          if (apiRegionName === "Vysočina") {
            return (
              item.Kraj.includes("Vysočina") || item.Kraj === "Kraj Vysočina"
            );
          }
          return false;
        });

        return partialMatch ? partialMatch.Index : undefined;
      });

      setIndexData(regionIndexData);

      // Create trend line
      const trend = createTrendLine(regionIndexData);
      setTrendData(trend);
    }
  }, [selectedRegion, data]);

  // Function to create trend line using linear regression
  const createTrendLine = (indexData) => {
    if (!indexData || indexData.some((item) => item === undefined)) {
      return [];
    }

    const n = indexData.length;
    const x = Array.from({ length: n }, (_, i) => i + 1);
    const y = indexData;

    const sumX = x.reduce((acc, val) => acc + val, 0);
    const sumY = y.reduce((acc, val) => acc + val, 0);
    const sumXY = x.reduce((acc, val, idx) => acc + val * y[idx], 0);
    const sumX2 = x.reduce((acc, val) => acc + val * val, 0);

    const a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const b = (sumY - a * sumX) / n;

    return x.map((xVal) => a * xVal + b);
  };

  // Chart configuration
  const chartData = {
    labels: years,
    datasets: [
      {
        label: `${
          regionNameMapping[selectedRegion] || selectedRegion
        } - Index dostupnosti bydlení`,
        data: indexData,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
      },
      {
        label: "Trend",
        data: trendData,
        borderColor: "rgb(255, 99, 132)",
        borderDash: [5, 5],
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Vývoj indexu dostupnosti bydlení",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Index hodnoty",
        },
      },
      x: {
        title: {
          display: true,
          text: "Rok",
        },
      },
    },
  };

  return (
    <div className="bg-card rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4">
        Vývoj indexu dostupnosti bydlení
      </h2>
      {loading ? (
        <div className="flex items-center justify-center h-[400px]">
          <p>Načítání dat...</p>
        </div>
      ) : (
        <div className="h-[400px]">
          <Line data={chartData} options={options} />
        </div>
      )}
    </div>
  );
}
