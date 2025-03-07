export async function GET() {
  const data = [
    {
      jihocesky_vyd: [
        {
          rok: 2015,
          vydaje: 6588202081,
          prumer_plneni: 85.1730281,
          vydaje_na_obyvatele: 0.0293764495264952,
          vydaje_ku_hdp: 0.0293764495264952,
          index: 70.69387337911925,
        },
        {
          rok: 2016,
          vydaje: 3955196646,
          prumer_plneni: 70.7708906,
          vydaje_na_obyvatele: 0.017179304434230706,
          vydaje_ku_hdp: 0.017179304434230706,
          index: 0.0,
        },
        {
          rok: 2017,
          vydaje: 5581666245,
          prumer_plneni: 75.35581002,
          vydaje_na_obyvatele: 0.02246480657682272,
          vydaje_ku_hdp: 0.02246480657682272,
          index: 30.634432597709775,
        },
        {
          rok: 2018,
          vydaje: 7725912207,
          prumer_plneni: 88.99587037,
          vydaje_na_obyvatele: 0.029567659483876494,
          vydaje_ku_hdp: 0.029567659483876494,
          index: 71.80211407099335,
        },
        {
          rok: 2019,
          vydaje: 7911155552,
          prumer_plneni: 82.17688437,
          vydaje_na_obyvatele: 0.028196654138136247,
          vydaje_ku_hdp: 0.028196654138136247,
          index: 63.8558547143407,
        },
        {
          rok: 2020,
          vydaje: 7546214539,
          prumer_plneni: 75.85470558,
          vydaje_na_obyvatele: 0.02679468301357739,
          vydaje_ku_hdp: 0.02679468301357739,
          index: 55.73011968282074,
        },
        {
          rok: 2021,
          vydaje: 7967265909,
          prumer_plneni: 84.51899238,
          vydaje_na_obyvatele: 0.027628936504468255,
          vydaje_ku_hdp: 0.027628936504468255,
          index: 60.56539959504631,
        },
        {
          rok: 2022,
          vydaje: 9743926469,
          prumer_plneni: 86.19999161,
          vydaje_na_obyvatele: 0.03310489061695579,
          vydaje_ku_hdp: 0.03310489061695579,
          index: 92.30367963760912,
        },
        {
          rok: 2023,
          vydaje: 10206910697,
          prumer_plneni: 90.89817903,
          vydaje_na_obyvatele: 0.03443277281734401,
          vydaje_ku_hdp: 0.03443277281734401,
          index: 100.0,
        },
      ],
    },
  ];

  return Response.json({ data });
}
