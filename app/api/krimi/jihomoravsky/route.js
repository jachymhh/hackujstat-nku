export async function GET() {
  const data = [
    {
      "Jihomoravský kraj": [
        {
          rok: 2015,
          obecna_kriminalita: 17284,
        },
        {
          rok: 2016,
          obecna_kriminalita: 15868,
        },
        {
          rok: 2017,
          obecna_kriminalita: 15178,
        },
        {
          rok: 2018,
          obecna_kriminalita: 14605,
        },
        {
          rok: 2019,
          obecna_kriminalita: 14740,
        },
        {
          rok: 2020,
          obecna_kriminalita: 12703,
        },
        {
          rok: 2021,
          obecna_kriminalita: 12215,
        },
        {
          rok: 2022,
          obecna_kriminalita: 15152,
        },
        {
          rok: 2023,
          obecna_kriminalita: 14572,
        },
      ],
    },
  ];

  return Response.json({ data });
}
