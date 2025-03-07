export async function GET() {
  const data = [
    {
      "Plžeňský kraj": [
        {
          rok: 2015,
          obecna_kriminalita: 7844,
        },
        {
          rok: 2016,
          obecna_kriminalita: 6827,
        },
        {
          rok: 2017,
          obecna_kriminalita: 7077,
        },
        {
          rok: 2018,
          obecna_kriminalita: 7207,
        },
        {
          rok: 2019,
          obecna_kriminalita: 7360,
        },
        {
          rok: 2020,
          obecna_kriminalita: 6672,
        },
        {
          rok: 2021,
          obecna_kriminalita: 6038,
        },
        {
          rok: 2022,
          obecna_kriminalita: 7889,
        },
        {
          rok: 2023,
          obecna_kriminalita: 7969,
        },
      ],
    },
  ];

  return Response.json({ data });
}
