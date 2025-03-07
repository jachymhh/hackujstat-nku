export async function GET() {
  const data = [
    {
      jihomoravsky_vyd: [
        {
          rok: 2015,
          vydaje: 12769602744,
          prumer_plneni: 88.22448719,
          vydaje_na_obyvatele: 0.026171479493180067,
          vydaje_ku_hdp: 0.026171479493180067,
          index: 60.70087891467131,
        },
        {
          rok: 2016,
          vydaje: 7799925805,
          prumer_plneni: 89.81958165,
          vydaje_na_obyvatele: 0.01567849680833146,
          vydaje_ku_hdp: 0.01567849680833146,
          index: 0.0,
        },
        {
          rok: 2017,
          vydaje: 9187952043,
          prumer_plneni: 75.8373269,
          vydaje_na_obyvatele: 0.017680372893212178,
          vydaje_ku_hdp: 0.017680372893212178,
          index: 11.580657424126292,
        },
        {
          rok: 2018,
          vydaje: 13100909832,
          prumer_plneni: 82.92308649,
          vydaje_na_obyvatele: 0.02437326211466118,
          vydaje_ku_hdp: 0.02437326211466118,
          index: 50.29836719478206,
        },
        {
          rok: 2019,
          vydaje: 13360669701,
          prumer_plneni: 85.18702641,
          vydaje_na_obyvatele: 0.023862098267978724,
          vydaje_ku_hdp: 0.023862098267978724,
          index: 47.34133431910291,
        },
        {
          rok: 2020,
          vydaje: 18526531580,
          prumer_plneni: 87.97970511,
          vydaje_na_obyvatele: 0.03296487366557408,
          vydaje_ku_hdp: 0.03296487366557408,
          index: 100.0,
        },
        {
          rok: 2021,
          vydaje: 13258772035,
          prumer_plneni: 94.28075512,
          vydaje_na_obyvatele: 0.019941391967352364,
          vydaje_ku_hdp: 0.019941391967352364,
          index: 24.660431704257576,
        },
        {
          rok: 2022,
          vydaje: 16330294059,
          prumer_plneni: 85.60136516,
          vydaje_na_obyvatele: 0.02401484414311398,
          vydaje_ku_hdp: 0.02401484414311398,
          index: 48.224954272530326,
        },
        {
          rok: 2023,
          vydaje: 21487268280,
          prumer_plneni: 84.96040708,
          vydaje_na_obyvatele: 0.03124349625205894,
          vydaje_ku_hdp: 0.03124349625205894,
          index: 90.04199996488032,
        },
      ],
    },
  ];

  return Response.json({ data });
}
