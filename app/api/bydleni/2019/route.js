export async function GET() {
      const data = [
  {
    "Kraj": "Praha",
    "Index": 0.0
  },
  {
    "Kraj": "Středočeský kraj",
    "Index": 16.91586077330776
  },
  {
    "Kraj": "Jihočeský kraj",
    "Index": 17.301726922654236
  },
  {
    "Kraj": "Plzeňský kraj",
    "Index": 23.432026525045817
  },
  {
    "Kraj": "Karlovarský kraj",
    "Index": 43.86792215493533
  },
  {
    "Kraj": "Ústecký kraj",
    "Index": 100.0
  },
  {
    "Kraj": "Liberecký kraj",
    "Index": 26.558964067760094
  },
  {
    "Kraj": "Královehradecký kraj",
    "Index": 19.203621022638806
  },
  {
    "Kraj": "Pardubický kraj",
    "Index": 22.344541376777137
  },
  {
    "Kraj": "Vysočina",
    "Index": 29.88995149864053
  },
  {
    "Kraj": "Jihomoravský kraj",
    "Index": 4.727030317502868
  },
  {
    "Kraj": "Olomoucký kraj",
    "Index": 18.443937985016028
  },
  {
    "Kraj": "Zlínský kraj",
    "Index": 23.424162492421846
  },
  {
    "Kraj": "Moravskoslezský kraj",
    "Index": 57.57882568012824
  }
];

      return Response.json({ data });
    }