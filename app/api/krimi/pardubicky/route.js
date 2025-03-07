export async function GET() {
  const data = [
    {
      "Pardubický kraj": [
        {
          rok: 2015,
          obecna_kriminalita: 4699,
        },
        {
          rok: 2016,
          obecna_kriminalita: 3910,
        },
        {
          rok: 2017,
          obecna_kriminalita: 3986,
        },
        {
          rok: 2018,
          obecna_kriminalita: 3803,
        },
        {
          rok: 2019,
          obecna_kriminalita: 3653,
        },
        {
          rok: 2020,
          obecna_kriminalita: 3113,
        },
        {
          rok: 2021,
          obecna_kriminalita: 3066,
        },
        {
          rok: 2022,
          obecna_kriminalita: 3797,
        },
        {
          rok: 2023,
          obecna_kriminalita: 3964,
        },
      ],
    },
  ];

  return Response.json({ data });
}
