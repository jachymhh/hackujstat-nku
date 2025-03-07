export async function GET() {
  const data = [
    {
      Vysočina: [
        {
          rok: 2015,
          obecna_kriminalita: 4625,
        },
        {
          rok: 2016,
          obecna_kriminalita: 4069,
        },
        {
          rok: 2017,
          obecna_kriminalita: 3663,
        },
        {
          rok: 2018,
          obecna_kriminalita: 3680,
        },
        {
          rok: 2019,
          obecna_kriminalita: 3887,
        },
        {
          rok: 2020,
          obecna_kriminalita: 3264,
        },
        {
          rok: 2021,
          obecna_kriminalita: 3045,
        },
        {
          rok: 2022,
          obecna_kriminalita: 3950,
        },
        {
          rok: 2023,
          obecna_kriminalita: 4258,
        },
      ],
    },
  ];

  return Response.json({ data });
}
