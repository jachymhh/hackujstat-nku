export async function GET() {
      const data = [
  {
    "Kraj": "Praha",
    "Index": 0.0
  },
  {
    "Kraj": "Středočeský kraj",
    "Index": 14.286690327308344
  },
  {
    "Kraj": "Jihočeský kraj",
    "Index": 17.709539876902475
  },
  {
    "Kraj": "Plzeňský kraj",
    "Index": 16.69571738295695
  },
  {
    "Kraj": "Karlovarský kraj",
    "Index": 29.86832874940058
  },
  {
    "Kraj": "Ústecký kraj",
    "Index": 100.0
  },
  {
    "Kraj": "Liberecký kraj",
    "Index": 25.74647703856034
  },
  {
    "Kraj": "Královehradecký kraj",
    "Index": 11.967155906221297
  },
  {
    "Kraj": "Pardubický kraj",
    "Index": 14.997314711922474
  },
  {
    "Kraj": "Vysočina",
    "Index": 25.49596228774555
  },
  {
    "Kraj": "Jihomoravský kraj",
    "Index": 2.3447758124132463
  },
  {
    "Kraj": "Olomoucký kraj",
    "Index": 12.480804331154152
  },
  {
    "Kraj": "Zlínský kraj",
    "Index": 19.414258033146726
  },
  {
    "Kraj": "Moravskoslezský kraj",
    "Index": 52.15645375547453
  }
];

      return Response.json({ data });
    }