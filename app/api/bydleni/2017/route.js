export async function GET() {
      const data = [
  {
    "Kraj": "Praha",
    "Index": 0.0
  },
  {
    "Kraj": "Středočeský kraj",
    "Index": 14.199956208604087
  },
  {
    "Kraj": "Jihočeský kraj",
    "Index": 16.280924742825533
  },
  {
    "Kraj": "Plzeňský kraj",
    "Index": 19.671684752121262
  },
  {
    "Kraj": "Karlovarský kraj",
    "Index": 37.56905735014175
  },
  {
    "Kraj": "Ústecký kraj",
    "Index": 100.0
  },
  {
    "Kraj": "Liberecký kraj",
    "Index": 28.158187257167715
  },
  {
    "Kraj": "Královehradecký kraj",
    "Index": 12.910382350675095
  },
  {
    "Kraj": "Pardubický kraj",
    "Index": 16.071716649862648
  },
  {
    "Kraj": "Vysočina",
    "Index": 25.735832596433905
  },
  {
    "Kraj": "Jihomoravský kraj",
    "Index": 2.855097264103589
  },
  {
    "Kraj": "Olomoucký kraj",
    "Index": 14.29195860961015
  },
  {
    "Kraj": "Zlínský kraj",
    "Index": 21.699415620378886
  },
  {
    "Kraj": "Moravskoslezský kraj",
    "Index": 52.02962813154793
  }
];

      return Response.json({ data });
    }