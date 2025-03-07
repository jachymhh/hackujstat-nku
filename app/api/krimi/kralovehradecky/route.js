export async function GET() {
  const data = [
    {
      "Královehradecký kraj": [
        {
          rok: 2015,
          obecna_kriminalita: 5721,
        },
        {
          rok: 2016,
          obecna_kriminalita: 4777,
        },
        {
          rok: 2017,
          obecna_kriminalita: 4280,
        },
        {
          rok: 2018,
          obecna_kriminalita: 4504,
        },
        {
          rok: 2019,
          obecna_kriminalita: 3794,
        },
        {
          rok: 2020,
          obecna_kriminalita: 3888,
        },
        {
          rok: 2021,
          obecna_kriminalita: 3709,
        },
        {
          rok: 2022,
          obecna_kriminalita: 4955,
        },
        {
          rok: 2023,
          obecna_kriminalita: 5161,
        },
      ],
    },
  ];

  return Response.json({ data });
}
