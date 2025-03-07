export async function GET() {
  const data = [
    {
      moravskoslezsky_vyd: [
        {
          rok: 2015,
          vydaje: 11755354536,
          prumer_plneni: 77.08616125,
          vydaje_na_obyvatele: 0.026990334767452936,
          vydaje_ku_hdp: 0.026990334767452936,
          index: 100.0,
        },
        {
          rok: 2016,
          vydaje: 4681903795,
          prumer_plneni: 66.09778475,
          vydaje_na_obyvatele: 0.010396916469248929,
          vydaje_ku_hdp: 0.010396916469248929,
          index: 0.0,
        },
        {
          rok: 2017,
          vydaje: 6867156699,
          prumer_plneni: 79.22619935,
          vydaje_na_obyvatele: 0.01456864480161604,
          vydaje_ku_hdp: 0.01456864480161604,
          index: 25.14086161992697,
        },
        {
          rok: 2018,
          vydaje: 9859539245,
          prumer_plneni: 72.35620827,
          vydaje_na_obyvatele: 0.019698348043071544,
          vydaje_ku_hdp: 0.019698348043071544,
          index: 56.05494544080381,
        },
        {
          rok: 2019,
          vydaje: 10550422911,
          prumer_plneni: 81.34141027,
          vydaje_na_obyvatele: 0.0206975392349827,
          vydaje_ku_hdp: 0.0206975392349827,
          index: 62.07655698554084,
        },
        {
          rok: 2020,
          vydaje: 10578541506,
          prumer_plneni: 79.2783843,
          vydaje_na_obyvatele: 0.0215434993472208,
          vydaje_ku_hdp: 0.0215434993472208,
          index: 67.17472360217862,
        },
        {
          rok: 2021,
          vydaje: 11327089676,
          prumer_plneni: 63.44860306,
          vydaje_na_obyvatele: 0.021148089779603096,
          vydaje_ku_hdp: 0.021148089779603096,
          index: 64.79179345173154,
        },
        {
          rok: 2022,
          vydaje: 13854606731,
          prumer_plneni: 69.82118908,
          vydaje_na_obyvatele: 0.025701632775234712,
          vydaje_ku_hdp: 0.025701632775234712,
          index: 92.23365572386186,
        },
        {
          rok: 2023,
          vydaje: 13222764562,
          prumer_plneni: 66.33779894,
          vydaje_na_obyvatele: 0.024480719387060607,
          vydaje_ku_hdp: 0.024480719387060607,
          index: 84.87583850842861,
        },
      ],
    },
  ];

  return Response.json({ data });
}
