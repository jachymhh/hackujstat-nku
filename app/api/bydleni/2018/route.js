export async function GET() {
      const data = [
  {
    "Kraj": "Praha",
    "Index": 0.0
  },
  {
    "Kraj": "Středočeský kraj",
    "Index": 14.877272652839297
  },
  {
    "Kraj": "Jihočeský kraj",
    "Index": 22.23874287834796
  },
  {
    "Kraj": "Plzeňský kraj",
    "Index": 23.07476760265131
  },
  {
    "Kraj": "Karlovarský kraj",
    "Index": 42.82477931898941
  },
  {
    "Kraj": "Ústecký kraj",
    "Index": 100.0
  },
  {
    "Kraj": "Liberecký kraj",
    "Index": 28.68890486760971
  },
  {
    "Kraj": "Královehradecký kraj",
    "Index": 16.660004970398106
  },
  {
    "Kraj": "Pardubický kraj",
    "Index": 20.619950812187724
  },
  {
    "Kraj": "Vysočina",
    "Index": 28.884564800737156
  },
  {
    "Kraj": "Jihomoravský kraj",
    "Index": 4.979421213600706
  },
  {
    "Kraj": "Olomoucký kraj",
    "Index": 17.867112550061364
  },
  {
    "Kraj": "Zlínský kraj",
    "Index": 24.394893269157997
  },
  {
    "Kraj": "Moravskoslezský kraj",
    "Index": 53.95609378551529
  }
];

      return Response.json({ data });
    }