export async function GET() {
  const data = [
    {
      olomoucky_vyd: [
        {
          rok: 2015,
          vydaje: 7088709139,
          prumer_plneni: 86.53329807,
          vydaje_na_obyvatele: 0.03164357314823449,
          vydaje_ku_hdp: 0.03164357314823449,
          index: 100.0,
        },
        {
          rok: 2016,
          vydaje: 3531228197,
          prumer_plneni: 83.24624602,
          vydaje_na_obyvatele: 0.01547938433223859,
          vydaje_ku_hdp: 0.01547938433223859,
          index: 0.0,
        },
        {
          rok: 2017,
          vydaje: 4940338754,
          prumer_plneni: 89.47357492,
          vydaje_na_obyvatele: 0.020942318302228508,
          vydaje_ku_hdp: 0.020942318302228508,
          index: 33.79652410756214,
        },
        {
          rok: 2018,
          vydaje: 7236231758,
          prumer_plneni: 84.56619849,
          vydaje_na_obyvatele: 0.030703129528926884,
          vydaje_ku_hdp: 0.030703129528926884,
          index: 94.18193124311347,
        },
        {
          rok: 2019,
          vydaje: 6931405700,
          prumer_plneni: 84.9876061,
          vydaje_na_obyvatele: 0.026145288073722406,
          vydaje_ku_hdp: 0.026145288073722406,
          index: 65.98477574655004,
        },
        {
          rok: 2020,
          vydaje: 7137921870,
          prumer_plneni: 92.65891176,
          vydaje_na_obyvatele: 0.02694020674298604,
          vydaje_ku_hdp: 0.02694020674298604,
          index: 70.90255218626218,
        },
        {
          rok: 2021,
          vydaje: 6880291242,
          prumer_plneni: 84.35208266,
          vydaje_na_obyvatele: 0.026105121672204263,
          vydaje_ku_hdp: 0.026105121672204263,
          index: 65.73628569254625,
        },
        {
          rok: 2022,
          vydaje: 7085665407,
          prumer_plneni: 78.47133244,
          vydaje_na_obyvatele: 0.026622388654111942,
          vydaje_ku_hdp: 0.026622388654111942,
          index: 68.93636574478987,
        },
        {
          rok: 2023,
          vydaje: 6527645105,
          prumer_plneni: 78.22999432,
          vydaje_na_obyvatele: 0.024410789304586,
          vydaje_ku_hdp: 0.024410789304586,
          index: 55.254272726070816,
        },
      ],
    },
  ];

  return Response.json({ data });
}
