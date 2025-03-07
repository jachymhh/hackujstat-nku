export async function GET() {
      const data = [
  {
    "Kraj": "Praha",
    "Index": 0.0
  },
  {
    "Kraj": "Středočeský kraj",
    "Index": 17.520230400689552
  },
  {
    "Kraj": "Jihočeský kraj",
    "Index": 19.923935541410295
  },
  {
    "Kraj": "Plzeňský kraj",
    "Index": 30.56987071812222
  },
  {
    "Kraj": "Karlovarský kraj",
    "Index": 53.341204062529556
  },
  {
    "Kraj": "Ústecký kraj",
    "Index": 100.0
  },
  {
    "Kraj": "Liberecký kraj",
    "Index": 26.97219257519326
  },
  {
    "Kraj": "Královehradecký kraj",
    "Index": 21.32515651253931
  },
  {
    "Kraj": "Pardubický kraj",
    "Index": 20.23561440928982
  },
  {
    "Kraj": "Vysočina",
    "Index": 41.34150017855261
  },
  {
    "Kraj": "Jihomoravský kraj",
    "Index": 1.2850478997588566
  },
  {
    "Kraj": "Olomoucký kraj",
    "Index": 24.861145228391663
  },
  {
    "Kraj": "Zlínský kraj",
    "Index": 29.857008792426644
  },
  {
    "Kraj": "Moravskoslezský kraj",
    "Index": 62.106162827651765
  }
];

      return Response.json({ data });
    }