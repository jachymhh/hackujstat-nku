export async function GET() {
      const data = [
  {
    "Kraj": "Praha",
    "Index": 0.0
  },
  {
    "Kraj": "Středočeský kraj",
    "Index": 17.648256827450904
  },
  {
    "Kraj": "Jihočeský kraj",
    "Index": 17.712473013338307
  },
  {
    "Kraj": "Plzeňský kraj",
    "Index": 31.541164558182246
  },
  {
    "Kraj": "Karlovarský kraj",
    "Index": 56.15287534824817
  },
  {
    "Kraj": "Ústecký kraj",
    "Index": 100.0
  },
  {
    "Kraj": "Liberecký kraj",
    "Index": 24.23241199663004
  },
  {
    "Kraj": "Královehradecký kraj",
    "Index": 26.021121402356766
  },
  {
    "Kraj": "Pardubický kraj",
    "Index": 17.144367937358112
  },
  {
    "Kraj": "Vysočina",
    "Index": 29.628502035716043
  },
  {
    "Kraj": "Jihomoravský kraj",
    "Index": 1.2202774558845046
  },
  {
    "Kraj": "Olomoucký kraj",
    "Index": 18.83470419409508
  },
  {
    "Kraj": "Zlínský kraj",
    "Index": 25.976787231378555
  },
  {
    "Kraj": "Moravskoslezský kraj",
    "Index": 66.37400084987372
  }
];

      return Response.json({ data });
    }