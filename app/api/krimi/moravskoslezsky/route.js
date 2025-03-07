export async function GET() {
  const data = [
    {
      "Moravskoslezský kraj": [
        {
          rok: 2015,
          obecna_kriminalita: 23160,
        },
        {
          rok: 2016,
          obecna_kriminalita: 19965,
        },
        {
          rok: 2017,
          obecna_kriminalita: 18748,
        },
        {
          rok: 2018,
          obecna_kriminalita: 17636,
        },
        {
          rok: 2019,
          obecna_kriminalita: 17912,
        },
        {
          rok: 2020,
          obecna_kriminalita: 14703,
        },
        {
          rok: 2021,
          obecna_kriminalita: 14079,
        },
        {
          rok: 2022,
          obecna_kriminalita: 18026,
        },
        {
          rok: 2023,
          obecna_kriminalita: 18469,
        },
      ],
    },
  ];

  return Response.json({ data });
}
