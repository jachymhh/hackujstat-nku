export async function GET() {
  const data = [
    {
      "Karlovarský kraj": [
        {
          rok: 2015,
          obecna_kriminalita: 4042,
        },
        {
          rok: 2016,
          obecna_kriminalita: 3668,
        },
        {
          rok: 2017,
          obecna_kriminalita: 3830,
        },
        {
          rok: 2018,
          obecna_kriminalita: 3723,
        },
        {
          rok: 2019,
          obecna_kriminalita: 4118,
        },
        {
          rok: 2020,
          obecna_kriminalita: 3222,
        },
        {
          rok: 2021,
          obecna_kriminalita: 2771,
        },
        {
          rok: 2022,
          obecna_kriminalita: 3648,
        },
        {
          rok: 2023,
          obecna_kriminalita: 3875,
        },
      ],
    },
  ];

  return Response.json({ data });
}
