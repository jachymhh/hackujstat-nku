export async function GET() {
      const data = [
  {
    "Kraj": "Praha",
    "Index": 0.0
  },
  {
    "Kraj": "Středočeský kraj",
    "Index": 16.968537251601603
  },
  {
    "Kraj": "Jihočeský kraj",
    "Index": 22.79688133185068
  },
  {
    "Kraj": "Plzeňský kraj",
    "Index": 26.57264481785783
  },
  {
    "Kraj": "Karlovarský kraj",
    "Index": 60.5036797030789
  },
  {
    "Kraj": "Ústecký kraj",
    "Index": 100.0
  },
  {
    "Kraj": "Liberecký kraj",
    "Index": 29.283842679454708
  },
  {
    "Kraj": "Královehradecký kraj",
    "Index": 23.860767494262802
  },
  {
    "Kraj": "Pardubický kraj",
    "Index": 26.032522642970733
  },
  {
    "Kraj": "Vysočina",
    "Index": 37.57681612407
  },
  {
    "Kraj": "Jihomoravský kraj",
    "Index": 4.652748451175613
  },
  {
    "Kraj": "Olomoucký kraj",
    "Index": 23.865320864567188
  },
  {
    "Kraj": "Zlínský kraj",
    "Index": 28.85995717609116
  },
  {
    "Kraj": "Moravskoslezský kraj",
    "Index": 66.72476303799013
  }
];

      return Response.json({ data });
    }