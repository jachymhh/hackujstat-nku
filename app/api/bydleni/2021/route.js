export async function GET() {
      const data = [
  {
    "Kraj": "Praha",
    "Index": 0.0
  },
  {
    "Kraj": "Středočeský kraj",
    "Index": 17.87877522843849
  },
  {
    "Kraj": "Jihočeský kraj",
    "Index": 26.419862219079093
  },
  {
    "Kraj": "Plzeňský kraj",
    "Index": 32.7177817982747
  },
  {
    "Kraj": "Karlovarský kraj",
    "Index": 65.62914526851125
  },
  {
    "Kraj": "Ústecký kraj",
    "Index": 100.0
  },
  {
    "Kraj": "Liberecký kraj",
    "Index": 33.80592032750326
  },
  {
    "Kraj": "Královehradecký kraj",
    "Index": 24.99412403290499
  },
  {
    "Kraj": "Pardubický kraj",
    "Index": 25.999206621608845
  },
  {
    "Kraj": "Vysočina",
    "Index": 46.16025496199108
  },
  {
    "Kraj": "Jihomoravský kraj",
    "Index": 3.2210116363545054
  },
  {
    "Kraj": "Olomoucký kraj",
    "Index": 27.47851599148306
  },
  {
    "Kraj": "Zlínský kraj",
    "Index": 28.738745296398903
  },
  {
    "Kraj": "Moravskoslezský kraj",
    "Index": 66.08813457869492
  }
];

      return Response.json({ data });
    }