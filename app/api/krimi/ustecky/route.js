export async function GET() {
  const data = [
    {
      "Ústecký kraj": [
        {
          rok: 2015,
          obecna_kriminalita: 15161,
        },
        {
          rok: 2016,
          obecna_kriminalita: 13038,
        },
        {
          rok: 2017,
          obecna_kriminalita: 12648,
        },
        {
          rok: 2018,
          obecna_kriminalita: 11970,
        },
        {
          rok: 2019,
          obecna_kriminalita: 11805,
        },
        {
          rok: 2020,
          obecna_kriminalita: 10648,
        },
        {
          rok: 2021,
          obecna_kriminalita: 10562,
        },
        {
          rok: 2022,
          obecna_kriminalita: 12512,
        },
        {
          rok: 2023,
          obecna_kriminalita: 12983,
        },
      ],
    },
  ];

  return Response.json({ data });
}
