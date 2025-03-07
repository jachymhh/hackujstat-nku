export async function GET() {
  const data = [
    {
      ustecky_vyd: [
        {
          rok: 2015,
          vydaje: 4923574934,
          prumer_plneni: 88.34806437,
          vydaje_na_obyvatele: 0.018210319286280714,
          vydaje_ku_hdp: 0.018210319286280714,
          index: 51.75380903083345,
        },
        {
          rok: 2016,
          vydaje: 2636818149,
          prumer_plneni: 83.52591685,
          vydaje_na_obyvatele: 0.009535901690419697,
          vydaje_ku_hdp: 0.009535901690419697,
          index: 0.0,
        },
        {
          rok: 2017,
          vydaje: 3547026911,
          prumer_plneni: 138.6938431,
          vydaje_na_obyvatele: 0.012563769266019981,
          vydaje_ku_hdp: 0.012563769266019981,
          index: 18.06503762892862,
        },
        {
          rok: 2018,
          vydaje: 5335964451,
          prumer_plneni: 84.26154913,
          vydaje_na_obyvatele: 0.018282475351864724,
          vydaje_ku_hdp: 0.018282475351864724,
          index: 52.18431069822298,
        },
        {
          rok: 2019,
          vydaje: 6140650287,
          prumer_plneni: 83.33409249,
          vydaje_na_obyvatele: 0.019316106274078926,
          vydaje_ku_hdp: 0.019316106274078926,
          index: 58.3512189390901,
        },
        {
          rok: 2020,
          vydaje: 6927425623,
          prumer_plneni: 81.3700592,
          vydaje_na_obyvatele: 0.021315203985020372,
          vydaje_ku_hdp: 0.021315203985020372,
          index: 70.2783506482444,
        },
        {
          rok: 2021,
          vydaje: 6528767731,
          prumer_plneni: 78.95248029,
          vydaje_na_obyvatele: 0.020646318614149804,
          vydaje_ku_hdp: 0.020646318614149804,
          index: 66.28760828831108,
        },
        {
          rok: 2022,
          vydaje: 7441932261,
          prumer_plneni: 86.30593537,
          vydaje_na_obyvatele: 0.02322578955044317,
          vydaje_ku_hdp: 0.02322578955044317,
          index: 81.67739610544477,
        },
        {
          rok: 2023,
          vydaje: 8453704671,
          prumer_plneni: 73.8800791,
          vydaje_na_obyvatele: 0.026296827617037086,
          vydaje_ku_hdp: 0.026296827617037086,
          index: 100.0,
        },
      ],
    },
  ];

  return Response.json({ data });
}
