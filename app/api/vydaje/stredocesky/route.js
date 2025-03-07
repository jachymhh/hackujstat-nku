export async function GET() {
  const data = [
    {
      stredocesky_vyd: [
        {
          rok: 2015,
          vydaje: 14675432254,
          prumer_plneni: 69.8770796,
          vydaje_na_obyvatele: 0.028373271297739228,
          vydaje_ku_hdp: 0.028373271297739228,
          index: 100.0,
        },
        {
          rok: 2016,
          vydaje: 7949462331,
          prumer_plneni: 67.41332424,
          vydaje_na_obyvatele: 0.014432649458086618,
          vydaje_ku_hdp: 0.014432649458086618,
          index: 0.0,
        },
        {
          rok: 2017,
          vydaje: 10727252393,
          prumer_plneni: 77.12259517,
          vydaje_na_obyvatele: 0.018145802698555657,
          vydaje_ku_hdp: 0.018145802698555657,
          index: 26.635492183765948,
        },
        {
          rok: 2018,
          vydaje: 14688581034,
          prumer_plneni: 77.36011252,
          vydaje_na_obyvatele: 0.023944347174458515,
          vydaje_ku_hdp: 0.023944347174458515,
          index: 68.23008202773917,
        },
        {
          rok: 2019,
          vydaje: 16974800446,
          prumer_plneni: 87.00308988,
          vydaje_na_obyvatele: 0.026882621769336423,
          vydaje_ku_hdp: 0.026882621769336423,
          index: 89.30715182185912,
        },
        {
          rok: 2020,
          vydaje: 18124706535,
          prumer_plneni: 81.10499395,
          vydaje_na_obyvatele: 0.027901528932108226,
          vydaje_ku_hdp: 0.027901528932108226,
          index: 96.61605937628133,
        },
        {
          rok: 2021,
          vydaje: 16726038585,
          prumer_plneni: 81.47079585,
          vydaje_na_obyvatele: 0.024499242234824806,
          vydaje_ku_hdp: 0.024499242234824806,
          index: 72.21050030999938,
        },
        {
          rok: 2022,
          vydaje: 17639159366,
          prumer_plneni: 82.40805735,
          vydaje_na_obyvatele: 0.024978971311832444,
          vydaje_ku_hdp: 0.024978971311832444,
          index: 75.65173185996582,
        },
        {
          rok: 2023,
          vydaje: 18343321225,
          prumer_plneni: 81.18569021,
          vydaje_na_obyvatele: 0.025564482191558446,
          vydaje_ku_hdp: 0.025564482191558446,
          index: 79.85176602243466,
        },
      ],
    },
  ];

  return Response.json({ data });
}
