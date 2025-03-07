export async function GET() {
  const data = [
    {
      Kraj: "Praha",
      Weighted_Count: 10543,
      Pocet_Obyvatel: 1374334,
      Zarizeni_na_100k: 767.14,
      index: 100.0,
    },
    {
      Kraj: "Karlovarský kraj",
      Weighted_Count: 2116,
      Pocet_Obyvatel: 294964,
      Zarizeni_na_100k: 717.38,
      index: 80.76,
    },
    {
      Kraj: "Olomoucký kraj",
      Weighted_Count: 4365,
      Pocet_Obyvatel: 632790,
      Zarizeni_na_100k: 689.8,
      index: 70.1,
    },
    {
      Kraj: "Zlínský kraj",
      Weighted_Count: 4003,
      Pocet_Obyvatel: 580966,
      Zarizeni_na_100k: 689.02,
      index: 69.8,
    },
    {
      Kraj: "Jihomoravský kraj",
      Weighted_Count: 7722,
      Pocet_Obyvatel: 1223124,
      Zarizeni_na_100k: 631.33,
      index: 47.49,
    },
    {
      Kraj: "Plzeňský kraj",
      Weighted_Count: 3835,
      Pocet_Obyvatel: 610148,
      Zarizeni_na_100k: 628.54,
      index: 46.41,
    },
    {
      Kraj: "Jihočeský kraj",
      Weighted_Count: 4030,
      Pocet_Obyvatel: 654078,
      Zarizeni_na_100k: 616.13,
      index: 41.62,
    },
    {
      Kraj: "Královéhradecký kraj",
      Weighted_Count: 3419,
      Pocet_Obyvatel: 556633,
      Zarizeni_na_100k: 614.23,
      index: 40.88,
    },
    {
      Kraj: "Vysočina",
      Weighted_Count: 3138,
      Pocet_Obyvatel: 517019,
      Zarizeni_na_100k: 606.94,
      index: 38.06,
    },
    {
      Kraj: "Moravskoslezský kraj",
      Weighted_Count: 7127,
      Pocet_Obyvatel: 1190143,
      Zarizeni_na_100k: 598.84,
      index: 34.93,
    },
    {
      Kraj: "Pardubický kraj",
      Weighted_Count: 3165,
      Pocet_Obyvatel: 530238,
      Zarizeni_na_100k: 596.9,
      index: 34.18,
    },
    {
      Kraj: "Liberecký kraj",
      Weighted_Count: 2571,
      Pocet_Obyvatel: 450450,
      Zarizeni_na_100k: 570.76,
      index: 24.08,
    },
    {
      Kraj: "Ústecký kraj",
      Weighted_Count: 4383,
      Pocet_Obyvatel: 812776,
      Zarizeni_na_100k: 539.26,
      index: 11.9,
    },
    {
      Kraj: "Středočeský kraj",
      Weighted_Count: 7375,
      Pocet_Obyvatel: 1450379,
      Zarizeni_na_100k: 508.49,
      index: 0.0,
    },
  ];
  return Response.json({ data });
}
