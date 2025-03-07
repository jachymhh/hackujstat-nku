export async function GET() {
  const data = [
    {
      pardubicky_vyd: [
        {
          rok: 2015,
          vydaje: 5079942495,
          prumer_plneni: 92.06097755,
          vydaje_na_obyvatele: 0.028376395721623072,
          vydaje_ku_hdp: 0.028376395721623072,
          index: 65.48900887230441,
        },
        {
          rok: 2016,
          vydaje: 2730205318,
          prumer_plneni: 88.80085243,
          vydaje_na_obyvatele: 0.014661837538102008,
          vydaje_ku_hdp: 0.014661837538102008,
          index: 0.0,
        },
        {
          rok: 2017,
          vydaje: 3676566549,
          prumer_plneni: 89.76662972,
          vydaje_na_obyvatele: 0.018583557670015727,
          vydaje_ku_hdp: 0.018583557670015727,
          index: 18.72678369050123,
        },
        {
          rok: 2018,
          vydaje: 5494312950,
          prumer_plneni: 92.05589089,
          vydaje_na_obyvatele: 0.02614283420553972,
          vydaje_ku_hdp: 0.02614283420553972,
          index: 54.823427962860485,
        },
        {
          rok: 2019,
          vydaje: 6258868842,
          prumer_plneni: 91.18870805,
          vydaje_na_obyvatele: 0.028125840901428417,
          vydaje_ku_hdp: 0.028125840901428417,
          index: 64.2925731852662,
        },
        {
          rok: 2020,
          vydaje: 7047068526,
          prumer_plneni: 89.77205172,
          vydaje_na_obyvatele: 0.030809816828212613,
          vydaje_ku_hdp: 0.030809816828212613,
          index: 77.10894837797362,
        },
        {
          rok: 2021,
          vydaje: 6470186238,
          prumer_plneni: 80.02455823,
          vydaje_na_obyvatele: 0.02839389804959322,
          vydaje_ku_hdp: 0.02839389804959322,
          index: 65.57258503249747,
        },
        {
          rok: 2022,
          vydaje: 8302040474,
          prumer_plneni: 91.38458453,
          vydaje_na_obyvatele: 0.035603608408787776,
          vydaje_ku_hdp: 0.035603608408787776,
          index: 100.0,
        },
        {
          rok: 2023,
          vydaje: 7439985708,
          prumer_plneni: 128.7848787,
          vydaje_na_obyvatele: 0.031643392396430145,
          vydaje_ku_hdp: 0.031643392396430145,
          index: 81.08939288462405,
        },
      ],
    },
  ];

  return Response.json({ data });
}
