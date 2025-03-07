export async function GET() {
  const data = [
    {
      kralovehradecky_vyd: [
        {
          rok: 2015,
          vydaje: 5019281249,
          prumer_plneni: 84.20457239,
          vydaje_na_obyvatele: 0.024418411060648463,
          vydaje_ku_hdp: 0.024418411060648463,
          index: 71.5334502978828,
        },
        {
          rok: 2016,
          vydaje: 3015065546,
          prumer_plneni: 86.20537679,
          vydaje_na_obyvatele: 0.013937533598715838,
          vydaje_ku_hdp: 0.013937533598715838,
          index: 0.0,
        },
        {
          rok: 2017,
          vydaje: 4005179955,
          prumer_plneni: 72.44486635,
          vydaje_na_obyvatele: 0.017006562971343932,
          vydaje_ku_hdp: 0.017006562971343932,
          index: 20.946553462438093,
        },
        {
          rok: 2018,
          vydaje: 6433888523,
          prumer_plneni: 80.2602606,
          vydaje_na_obyvatele: 0.0260354102317874,
          vydaje_ku_hdp: 0.0260354102317874,
          index: 82.56969514097973,
        },
        {
          rok: 2019,
          vydaje: 6806498812,
          prumer_plneni: 72.8638512,
          vydaje_na_obyvatele: 0.02569448141187562,
          vydaje_ku_hdp: 0.02569448141187562,
          index: 80.24280840054662,
        },
        {
          rok: 2020,
          vydaje: 7433036771,
          prumer_plneni: 79.62708591,
          vydaje_na_obyvatele: 0.028035670527390005,
          vydaje_ku_hdp: 0.028035670527390005,
          index: 96.22175060656602,
        },
        {
          rok: 2021,
          vydaje: 6692191186,
          prumer_plneni: 81.18861769,
          vydaje_na_obyvatele: 0.023573079619954196,
          vydaje_ku_hdp: 0.023573079619954196,
          index: 65.7639453286881,
        },
        {
          rok: 2022,
          vydaje: 8263226219,
          prumer_plneni: 88.23393764,
          vydaje_na_obyvatele: 0.02858924887078462,
          vydaje_ku_hdp: 0.02858924887078462,
          index: 100.0,
        },
        {
          rok: 2023,
          vydaje: 7851695799,
          prumer_plneni: 77.65179531,
          vydaje_na_obyvatele: 0.02697465760161186,
          vydaje_ku_hdp: 0.02697465760161186,
          index: 88.98018942361836,
        },
      ],
    },
  ];

  return Response.json({ data });
}
