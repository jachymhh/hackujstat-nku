export async function GET() {
  const data = [
    {
      Praha: [
        {
          rok: 2015,
          obecna_kriminalita: 52508,
        },
        {
          rok: 2016,
          obecna_kriminalita: 45891,
        },
        {
          rok: 2017,
          obecna_kriminalita: 41859,
        },
        {
          rok: 2018,
          obecna_kriminalita: 38597,
        },
        {
          rok: 2019,
          obecna_kriminalita: 40155,
        },
        {
          rok: 2020,
          obecna_kriminalita: 30872,
        },
        {
          rok: 2021,
          obecna_kriminalita: 29798,
        },
        {
          rok: 2022,
          obecna_kriminalita: 35058,
        },
        {
          rok: 2023,
          obecna_kriminalita: 35765,
        },
      ],
    },
  ];

  return Response.json({ data });
}
