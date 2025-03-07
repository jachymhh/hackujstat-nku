export async function GET() {
  const data = [
    {
      liberecky_vyd: [
        {
          rok: 2015,
          vydaje: 3496206528,
          prumer_plneni: 77.84264982,
          vydaje_na_obyvatele: 0.023668888871817968,
          vydaje_ku_hdp: 0.023668888871817968,
          index: 63.77059159327031,
        },
        {
          rok: 2016,
          vydaje: 1719453434,
          prumer_plneni: 79.84225828,
          vydaje_na_obyvatele: 0.011266160721660846,
          vydaje_ku_hdp: 0.011266160721660846,
          index: 0.0,
        },
        {
          rok: 2017,
          vydaje: 2515376970,
          prumer_plneni: 77.02713551,
          vydaje_na_obyvatele: 0.016328596403667146,
          vydaje_ku_hdp: 0.016328596403667146,
          index: 26.029315037460755,
        },
        {
          rok: 2018,
          vydaje: 3632776813,
          prumer_plneni: 81.45930941,
          vydaje_na_obyvatele: 0.02226704420343882,
          vydaje_ku_hdp: 0.02226704420343882,
          index: 56.56278515406543,
        },
        {
          rok: 2019,
          vydaje: 4315397875,
          prumer_plneni: 75.42242086,
          vydaje_na_obyvatele: 0.025517274890501332,
          vydaje_ku_hdp: 0.025517274890501332,
          index: 73.2743611250305,
        },
        {
          rok: 2020,
          vydaje: 4121177087,
          prumer_plneni: 83.48282826,
          vydaje_na_obyvatele: 0.02296638599861201,
          vydaje_ku_hdp: 0.02296638599861201,
          index: 60.158561781930096,
        },
        {
          rok: 2021,
          vydaje: 4180189528,
          prumer_plneni: 85.42092632,
          vydaje_na_obyvatele: 0.023401030830366657,
          vydaje_ku_hdp: 0.023401030830366657,
          index: 62.393357039746014,
        },
        {
          rok: 2022,
          vydaje: 4587126632,
          prumer_plneni: 58.37733547,
          vydaje_na_obyvatele: 0.025120575774558125,
          vydaje_ku_hdp: 0.025120575774558125,
          index: 71.23466977632468,
        },
        {
          rok: 2023,
          vydaje: 5653904208,
          prumer_plneni: 75.5562711,
          vydaje_na_obyvatele: 0.030715138440515783,
          vydaje_ku_hdp: 0.030715138440515783,
          index: 100.0,
        },
      ],
    },
  ];

  return Response.json({ data });
}
