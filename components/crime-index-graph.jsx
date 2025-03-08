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

// Register ChartJS components if needed
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CrimeIndexGraph({ selectedRegion }) {
  const [data, setData] = useState([]);
  const [years, setYears] = useState([]);
  const [indexData, setIndexData] = useState([]);
  const [trendData, setTrendData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Map internal region names to API format (lowercase, without diacritics and "kraj")
  const regionApiMapping = {
    Praha: "praha",
    Stredocesky: "stredocesky",
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

  // Map for proper display names with diacritics
  const displayRegionNames = {
    Praha: "Praha",
    Stredocesky: "Středočeský kraj",
    Jihocesky: "Jihočeský kraj",
    Plzensky: "Plzeňský kraj",
    Karlovarsky: "Karlovarský kraj",
    Ustecky: "Ústecký kraj",
    Liberecky: "Liberecký kraj",
    Kralovehradecky: "Královéhradecký kraj",
    Pardubicky: "Pardubický kraj",
    Vysocina: "Kraj Vysočina",
    Jihomoravsky: "Jihomoravský kraj",
    Olomoucky: "Olomoucký kraj",
    Zlinsky: "Zlínský kraj",
    Moravskoslezsky: "Moravskoslezský kraj",
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedRegion) return;

      setLoading(true);
      try {
        const apiRegion = regionApiMapping[selectedRegion];
        const response = await fetch(`/api/bezpeci/${apiRegion}`);
        const result = await response.json();

        // Extract the data from the API response
        // API returns data in format: {"data": [{"Region name": [{rok: year, index: value}, ...]}]}
        const regionKey = Object.keys(result.data[0])[0];
        const crimeData = result.data[0][regionKey];

        // Extract years and index values
        const extractedYears = crimeData.map((item) => item.rok);
        const extractedIndices = crimeData.map((item) => item.index);

        setData(crimeData);
        setYears(extractedYears);
        setIndexData(extractedIndices);

        // Create trend line
        const trend = createTrendLine(extractedIndices);
        setTrendData(trend);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching crime data:", error);
        setLoading(false);

        // Set empty data to prevent errors
        setData([]);
        setYears([]);
        setIndexData([]);
        setTrendData([]);
      }
    };

    fetchData();
  }, [selectedRegion]);

  // Function to create trend line using linear regression
  const createTrendLine = (indexData) => {
    if (!indexData || indexData.length === 0) {
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
          displayRegionNames[selectedRegion] || selectedRegion
        } - Index bezpečnosti`,
        data: indexData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.2)",
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
        text: "Vývoj indexu bezpečnosti",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: "Index hodnoty",
        },
        min: 50, // Adjust based on your data range if needed
        max: 100,
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
      <h2 className="text-xl font-semibold mb-4">Vývoj indexu bezpečnosti</h2>
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
