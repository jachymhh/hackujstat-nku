export async function GET() {
  const data = [
    {
      zlinsky_vyd: [
        {
          rok: 2015,
          vydaje: 5109732799,
          prumer_plneni: 86.87129861,
          vydaje_na_obyvatele: 0.023427776194767935,
          vydaje_ku_hdp: 0.023427776194767935,
          index: 84.61786872569903,
        },
        {
          rok: 2016,
          vydaje: 2748266823,
          prumer_plneni: 88.66097349,
          vydaje_na_obyvatele: 0.012202440819002546,
          vydaje_ku_hdp: 0.012202440819002546,
          index: 0.0,
        },
        {
          rok: 2017,
          vydaje: 3690873055,
          prumer_plneni: 85.53743654,
          vydaje_na_obyvatele: 0.015389676917617662,
          vydaje_ku_hdp: 0.015389676917617662,
          index: 24.025752172418624,
        },
        {
          rok: 2018,
          vydaje: 5214695728,
          prumer_plneni: 66.87416502,
          vydaje_na_obyvatele: 0.021042038340378613,
          vydaje_ku_hdp: 0.021042038340378613,
          index: 66.63390247267455,
        },
        {
          rok: 2019,
          vydaje: 5055844318,
          prumer_plneni: 76.42231609,
          vydaje_na_obyvatele: 0.020406301922197088,
          vydaje_ku_hdp: 0.020406301922197088,
          index: 61.84164825691465,
        },
        {
          rok: 2020,
          vydaje: 5024781554,
          prumer_plneni: 64.3327642,
          vydaje_na_obyvatele: 0.019226104883853085,
          vydaje_ku_hdp: 0.019226104883853085,
          index: 52.94518728554324,
        },
        {
          rok: 2021,
          vydaje: 5352080815,
          prumer_plneni: 65.4387991,
          vydaje_na_obyvatele: 0.02062133387762476,
          vydaje_ku_hdp: 0.02062133387762476,
          index: 63.46258386080687,
        },
        {
          rok: 2022,
          vydaje: 6682191075,
          prumer_plneni: 78.24511207,
          vydaje_na_obyvatele: 0.025468356806740228,
          vydaje_ku_hdp: 0.025468356806740228,
          index: 100.0,
        },
        {
          rok: 2023,
          vydaje: 6437327835,
          prumer_plneni: 65.81829353,
          vydaje_na_obyvatele: 0.02446325455918514,
          vydaje_ku_hdp: 0.02446325455918514,
          index: 92.42342369359076,
        },
      ],
    },
  ];

  return Response.json({ data });
}
