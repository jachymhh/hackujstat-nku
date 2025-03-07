export async function GET() {
  const data = [
    {
      "Liberecký kraj": [
        {
          rok: 2015,
          obecna_kriminalita: 8405,
        },
        {
          rok: 2016,
          obecna_kriminalita: 6646,
        },
        {
          rok: 2017,
          obecna_kriminalita: 6273,
        },
        {
          rok: 2018,
          obecna_kriminalita: 6408,
        },
        {
          rok: 2019,
          obecna_kriminalita: 5917,
        },
        {
          rok: 2020,
          obecna_kriminalita: 5121,
        },
        {
          rok: 2021,
          obecna_kriminalita: 4766,
        },
        {
          rok: 2022,
          obecna_kriminalita: 6551,
        },
        {
          rok: 2023,
          obecna_kriminalita: 6703,
        },
      ],
    },
  ];

  return Response.json({ data });
}
