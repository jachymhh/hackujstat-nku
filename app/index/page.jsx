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
import Select from "react-select";

// Registrování komponent pro chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function BydleniGraph() {
  const [data, setData] = useState([]);
  const [selectedKraj, setSelectedKraj] = useState(null);
  const [years, setYears] = useState([]);
  const [indexData, setIndexData] = useState([]);
  const [trendData, setTrendData] = useState([]);

  const fetchData = async (kraj) => {
    try {
      // Načteme data pro každý rok, aby byly dostupné pro graf
      const fetchedData = await Promise.all(
        Array.from({ length: 8 }, (_, i) => {
          const year = 2016 + i;
          return fetch(`/api/bydleni/${year}`).then((res) => res.json());
        })
      );

      // Uložíme data do state
      setData(fetchedData);

      // Uložíme seznam krajů (pokud ještě neexistují)
      if (!selectedKraj) {
        const krajNames = fetchedData[0].data.map((item) => item.Kraj);
        setYears(Array.from({ length: 8 }, (_, i) => 2016 + i));
        setIndexData(
          fetchedData.map(
            (yearData) =>
              yearData.data.find((item) => item.Kraj === krajNames[0]).Index
          )
        );
        setSelectedKraj(krajNames[0]);
      }
    } catch (error) {
      console.error("Chyba při získávání dat:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedKraj) {
      // Na základě vybraného kraje filtrujeme data pro graf
      const krajIndexData = data.map(
        (yearData) =>
          yearData.data.find((item) => item.Kraj === selectedKraj)?.Index
      );
      setIndexData(krajIndexData);

      // Vytvoříme trendovou křivku mezi prvním a posledním rokem
      const trend = createTrendLine(krajIndexData);
      setTrendData(trend);
    }
  }, [selectedKraj, data]);

  // Funkce pro vytvoření trendové křivky (lineární regrese)
  const createTrendLine = (indexData) => {
    const n = indexData.length;
    const x = Array.from({ length: n }, (_, i) => i + 1); // X je 1, 2, ..., 8 (roky)
    const y = indexData;

    // Výpočet součtů pro regresi
    const sumX = x.reduce((acc, val) => acc + val, 0);
    const sumY = y.reduce((acc, val) => acc + val, 0);
    const sumXY = x.reduce((acc, val, idx) => acc + val * y[idx], 0);
    const sumX2 = x.reduce((acc, val) => acc + val * val, 0);

    // Výpočet koeficientů regresní přímky (y = a * x + b)
    const a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const b = (sumY - a * sumX) / n;

    // Vytvoření trendu (pro každý rok)
    return x.map((xVal) => a * xVal + b);
  };

  // Nastavení grafu
  const chartData = {
    labels: years, // Osa X - roky
    datasets: [
      {
        label: `${selectedKraj} - Index dostupnosti`,
        data: indexData, // Osa Y - indexy
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
      {
        label: "Trendová křivka",
        data: trendData, // Osa Y - trend
        borderColor: "rgb(255, 99, 132)",
        borderDash: [5, 5], // Trhaná čára pro trend
        fill: false,
      },
    ],
  };

  const handleKrajChange = (selectedOption) => {
    setSelectedKraj(selectedOption.value);
  };

  // Seznam krajů pro select (možná upravit podle dostupných krajů)
  const krajOptions =
    data[0]?.data.map((item) => ({
      value: item.Kraj,
      label: item.Kraj,
    })) || [];

  return (
    <div>
      <h2>Vývoj indexu dostupnosti bydlení</h2>

      <Select
        options={krajOptions}
        onChange={handleKrajChange}
        value={{ label: selectedKraj, value: selectedKraj }}
        placeholder="Vyber kraj"
      />

      <Line data={chartData} />
    </div>
  );
}
