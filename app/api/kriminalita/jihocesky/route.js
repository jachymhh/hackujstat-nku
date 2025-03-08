export async function GET() {
  const data = [
    {
      "Jihočeský kraj": [
        {
          rok: 2015,
          obecna_kriminalita: 8397,
        },
        {
          rok: 2016,
          obecna_kriminalita: 7087,
        },
        {
          rok: 2017,
          obecna_kriminalita: 5968,
        },
        {
          rok: 2018,
          obecna_kriminalita: 5495,
        },
        {
          rok: 2019,
          obecna_kriminalita: 6036,
        },
        {
          rok: 2020,
          obecna_kriminalita: 5301,
        },
        {
          rok: 2021,
          obecna_kriminalita: 5090,
        },
        {
          rok: 2022,
          obecna_kriminalita: 6511,
        },
        {
          rok: 2023,
          obecna_kriminalita: 6518,
        },
      ],
    },
  ];

  return Response.json({ data });
}
