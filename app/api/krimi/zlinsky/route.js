export async function GET() {
  const data = [
    {
      "Zlínský kraj": [
        {
          rok: 2015,
          obecna_kriminalita: 5082,
        },
        {
          rok: 2016,
          obecna_kriminalita: 4729,
        },
        {
          rok: 2017,
          obecna_kriminalita: 4321,
        },
        {
          rok: 2018,
          obecna_kriminalita: 3895,
        },
        {
          rok: 2019,
          obecna_kriminalita: 3837,
        },
        {
          rok: 2020,
          obecna_kriminalita: 3425,
        },
        {
          rok: 2021,
          obecna_kriminalita: 3099,
        },
        {
          rok: 2022,
          obecna_kriminalita: 4211,
        },
        {
          rok: 2023,
          obecna_kriminalita: 4399,
        },
      ],
    },
  ];

  return Response.json({ data });
}
