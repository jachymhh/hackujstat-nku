export async function GET() {
  const data = [
    {
      plzensky_vyd: [
        {
          rok: 2015,
          vydaje: 4994236466,
          prumer_plneni: 83.67685455,
          vydaje_na_obyvatele: 0.021630639156283583,
          vydaje_ku_hdp: 0.021630639156283583,
          index: 43.159620468040146,
        },
        {
          rok: 2016,
          vydaje: 3870742411,
          prumer_plneni: 81.20633866,
          vydaje_na_obyvatele: 0.016130854972666017,
          vydaje_ku_hdp: 0.016130854972666017,
          index: 0.0,
        },
        {
          rok: 2017,
          vydaje: 5093826319,
          prumer_plneni: 87.92849036,
          vydaje_na_obyvatele: 0.0200066987446461,
          vydaje_ku_hdp: 0.0200066987446461,
          index: 30.415729164493627,
        },
        {
          rok: 2018,
          vydaje: 6579705671,
          prumer_plneni: 90.39032077,
          vydaje_na_obyvatele: 0.024598415751828768,
          vydaje_ku_hdp: 0.024598415751828768,
          index: 66.44928188406513,
        },
        {
          rok: 2019,
          vydaje: 6783691764,
          prumer_plneni: 94.89149909,
          vydaje_na_obyvatele: 0.024223129771791425,
          vydaje_ku_hdp: 0.024223129771791425,
          index: 63.504220782643095,
        },
        {
          rok: 2020,
          vydaje: 7292871718,
          prumer_plneni: 74.76711587,
          vydaje_na_obyvatele: 0.026399812073450792,
          vydaje_ku_hdp: 0.026399812073450792,
          index: 80.58576050904827,
        },
        {
          rok: 2021,
          vydaje: 6827316449,
          prumer_plneni: 84.93419456,
          vydaje_na_obyvatele: 0.02345285752850958,
          vydaje_ku_hdp: 0.02345285752850958,
          index: 57.4595003777702,
        },
        {
          rok: 2022,
          vydaje: 8372645620,
          prumer_plneni: 93.47368689,
          vydaje_na_obyvatele: 0.027748449774472626,
          vydaje_ku_hdp: 0.027748449774472626,
          index: 91.16921058303032,
        },
        {
          rok: 2023,
          vydaje: 8885335286,
          prumer_plneni: 92.38709605,
          vydaje_na_obyvatele: 0.028873747806235247,
          vydaje_ku_hdp: 0.028873747806235247,
          index: 100.0,
        },
      ],
    },
  ];

  return Response.json({ data });
}
