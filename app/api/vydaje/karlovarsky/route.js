export async function GET() {
  const data = [
    {
      karlovarsky_vyd: [
        {
          rok: 2015,
          vydaje: 2967616236,
          prumer_plneni: 86.40569718,
          vydaje_na_obyvatele: 0.03457838774663387,
          vydaje_ku_hdp: 0.03457838774663387,
          index: 56.19129525229718,
        },
        {
          rok: 2016,
          vydaje: 1525351841,
          prumer_plneni: 75.84015182,
          vydaje_na_obyvatele: 0.017340420785505167,
          vydaje_ku_hdp: 0.017340420785505167,
          index: 0.0,
        },
        {
          rok: 2017,
          vydaje: 1935508594,
          prumer_plneni: 84.19715965,
          vydaje_na_obyvatele: 0.020744992215895045,
          vydaje_ku_hdp: 0.020744992215895045,
          index: 11.098018628528978,
        },
        {
          rok: 2018,
          vydaje: 2614092727,
          prumer_plneni: 78.03166458,
          vydaje_na_obyvatele: 0.02728213070837977,
          vydaje_ku_hdp: 0.02728213070837977,
          index: 32.40739228985975,
        },
        {
          rok: 2019,
          vydaje: 2714164999,
          prumer_plneni: 75.44860079,
          vydaje_na_obyvatele: 0.02705415368784993,
          vydaje_ku_hdp: 0.02705415368784993,
          index: 31.66424641307404,
        },
        {
          rok: 2020,
          vydaje: 2424797426,
          prumer_plneni: 78.62778419,
          vydaje_na_obyvatele: 0.02514204744532806,
          vydaje_ku_hdp: 0.02514204744532806,
          index: 25.43127667426489,
        },
        {
          rok: 2021,
          vydaje: 2945630568,
          prumer_plneni: 81.53261528,
          vydaje_na_obyvatele: 0.03058622557090137,
          vydaje_ku_hdp: 0.03058622557090137,
          index: 43.17788340289022,
        },
        {
          rok: 2022,
          vydaje: 3414692569,
          prumer_plneni: 87.56850927,
          vydaje_na_obyvatele: 0.03451729683106092,
          vydaje_ku_hdp: 0.03451729683106092,
          index: 55.99215473404849,
        },
        {
          rok: 2023,
          vydaje: 4808379500,
          prumer_plneni: 85.02487062,
          vydaje_na_obyvatele: 0.0480177114294221,
          vydaje_ku_hdp: 0.0480177114294221,
          index: 100.0,
        },
      ],
    },
  ];

  return Response.json({ data });
}
