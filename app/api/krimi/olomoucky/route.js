export async function GET() {
  const data = [
    {
      "Olomoucký kraj": [
        {
          rok: 2015,
          obecna_kriminalita: 8510,
        },
        {
          rok: 2016,
          obecna_kriminalita: 7755,
        },
        {
          rok: 2017,
          obecna_kriminalita: 6669,
        },
        {
          rok: 2018,
          obecna_kriminalita: 6022,
        },
        {
          rok: 2019,
          obecna_kriminalita: 6540,
        },
        {
          rok: 2020,
          obecna_kriminalita: 5581,
        },
        {
          rok: 2021,
          obecna_kriminalita: 5374,
        },
        {
          rok: 2022,
          obecna_kriminalita: 6566,
        },
        {
          rok: 2023,
          obecna_kriminalita: 6872,
        },
      ],
    },
  ];

  return Response.json({ data });
}
