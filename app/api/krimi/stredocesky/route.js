export async function GET() {
  const data = [
    {
      "Středočeský kraj": [
        {
          rok: 2015,
          obecna_kriminalita: 18919,
        },
        {
          rok: 2016,
          obecna_kriminalita: 16211,
        },
        {
          rok: 2017,
          obecna_kriminalita: 15127,
        },
        {
          rok: 2018,
          obecna_kriminalita: 14036,
        },
        {
          rok: 2019,
          obecna_kriminalita: 15120,
        },
        {
          rok: 2020,
          obecna_kriminalita: 13468,
        },
        {
          rok: 2021,
          obecna_kriminalita: 13737,
        },
        {
          rok: 2022,
          obecna_kriminalita: 15703,
        },
        {
          rok: 2023,
          obecna_kriminalita: 16081,
        },
      ],
    },
  ];

  return Response.json({ data });
}
