export async function GET() {
  const data = [
    {
      vysocina_vyd: [
        {
          rok: 2015,
          vydaje: 6818707372,
          prumer_plneni: 79.32485208,
          vydaje_na_obyvatele: 0.03771949230227808,
          vydaje_ku_hdp: 0.03771949230227808,
          index: 74.7303523748661,
        },
        {
          rok: 2016,
          vydaje: 3988511954,
          prumer_plneni: 86.40335355,
          vydaje_na_obyvatele: 0.021442567478080612,
          vydaje_ku_hdp: 0.021442567478080612,
          index: 0.0,
        },
        {
          rok: 2017,
          vydaje: 5024762002,
          prumer_plneni: 89.36512376,
          vydaje_na_obyvatele: 0.026003121742545526,
          vydaje_ku_hdp: 0.026003121742545526,
          index: 20.938342524105437,
        },
        {
          rok: 2018,
          vydaje: 6805734508,
          prumer_plneni: 91.74627759,
          vydaje_na_obyvatele: 0.03412417562342888,
          vydaje_ku_hdp: 0.03412417562342888,
          index: 58.22359294631529,
        },
        {
          rok: 2019,
          vydaje: 7056074805,
          prumer_plneni: 89.05018905,
          vydaje_na_obyvatele: 0.03425890201551171,
          vydaje_ku_hdp: 0.03425890201551171,
          index: 58.842146565213696,
        },
        {
          rok: 2020,
          vydaje: 7960286775,
          prumer_plneni: 80.24501024,
          vydaje_na_obyvatele: 0.038612298749668414,
          vydaje_ku_hdp: 0.038612298749668414,
          index: 78.82939080728828,
        },
        {
          rok: 2021,
          vydaje: 8148049475,
          prumer_plneni: 74.57754736,
          vydaje_na_obyvatele: 0.0386926991881329,
          vydaje_ku_hdp: 0.0386926991881329,
          index: 79.19852399199236,
        },
        {
          rok: 2022,
          vydaje: 9264104315,
          prumer_plneni: 84.17910039,
          vydaje_na_obyvatele: 0.04322344272746837,
          vydaje_ku_hdp: 0.04322344272746837,
          index: 100.0,
        },
        {
          rok: 2023,
          vydaje: 8660030008,
          prumer_plneni: 91.07061289,
          vydaje_na_obyvatele: 0.040067567454145935,
          vydaje_ku_hdp: 0.040067567454145935,
          index: 85.51079680137673,
        },
      ],
    },
  ];

  return Response.json({ data });
}
