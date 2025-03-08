export async function GET() {
  const data = [
    {
      Rok: 2023,
      Kraj: "Praha",
      "Měrné emise": 24.45,
      Látka: "CO",
      Jednotka: "t",
      AQI: 22.58595910578461, // Inverted from 77.41404089421539
    },
    // Other Praha entries remain unchanged

    {
      Rok: 2023,
      Kraj: "Jihočeský kraj",
      "Měrné emise": 4.76,
      Látka: "CO",
      Jednotka: "t",
      AQI: 97.66244906712417, // Inverted from 2.337550932875827
    },
    // Other Jihočeský kraj entries remain unchanged

    {
      Rok: 2023,
      Kraj: "Jihomoravský kraj",
      "Měrné emise": 5.68,
      Látka: "CO",
      Jednotka: "t",
      AQI: 94.32356191953018, // Inverted from 5.676438080469817
    },
    // Other Jihomoravský kraj entries remain unchanged

    {
      Rok: 2023,
      Kraj: "Karlovarský kraj",
      "Měrné emise": 4.15,
      Látka: "CO",
      Jednotka: "t",
      AQI: 100.0, // Inverted from 0.0 (now cleanest air = 100)
    },
    // Other Karlovarský kraj entries remain unchanged

    {
      Rok: 2023,
      Kraj: "Kraj Vysočina",
      "Měrné emise": 6.28,
      Látka: "CO",
      Jednotka: "t",
      AQI: 92.14602682327323, // Inverted from 7.853973176726771
    },
    // Other Kraj Vysočina entries remain unchanged

    {
      Rok: 2023,
      Kraj: "Královéhradecký kraj",
      "Měrné emise": 7.22,
      Látka: "CO",
      Jednotka: "t",
      AQI: 88.73455517247068, // Inverted from 11.265444827529315
    },
    // Other Královéhradecký kraj entries remain unchanged

    {
      Rok: 2023,
      Kraj: "Liberecký kraj",
      "Měrné emise": 8.23,
      Látka: "CO",
      Jednotka: "t",
      AQI: 85.06903776043815, // Inverted from 14.930962239561854
    },
    // Other Liberecký kraj entries remain unchanged

    {
      Rok: 2023,
      Kraj: "Moravskoslezský kraj",
      "Měrné emise": 32.67,
      Látka: "CO",
      Jednotka: "t",
      AQI: 0.0, // Inverted from 100.0 (now most polluted = 0)
    },
    // Other Moravskoslezský kraj entries remain unchanged

    {
      Rok: 2023,
      Kraj: "Olomoucký kraj",
      "Měrné emise": 6.41,
      Látka: "CO",
      Jednotka: "t",
      AQI: 91.67422755241756, // Inverted from 8.325772447582438
    },
    // Other Olomoucký kraj entries remain unchanged

    {
      Rok: 2023,
      Kraj: "Pardubický kraj",
      "Měrné emise": 7.29,
      Látka: "CO",
      Jednotka: "t",
      AQI: 88.4805094112407, // Inverted from 11.5194905887593
    },
    // Other Pardubický kraj entries remain unchanged

    {
      Rok: 2023,
      Kraj: "Plzeňský kraj",
      "Měrné emise": 4.62,
      Látka: "CO",
      Jednotka: "t",
      AQI: 98.17054058958412, // Inverted from 1.8294594104158755
    },
    // Other Plzeňský kraj entries remain unchanged

    {
      Rok: 2023,
      Kraj: "Středočeský kraj",
      "Měrné emise": 7.79,
      Látka: "CO",
      Jednotka: "t",
      AQI: 86.66589683102658, // Inverted from 13.334103168973424
    },
    // Other Středočeský kraj entries remain unchanged

    {
      Rok: 2023,
      Kraj: "Ústecký kraj",
      "Měrné emise": 7.51,
      Látka: "CO",
      Jednotka: "t",
      AQI: 87.68207987594649, // Inverted from 12.31792012405351
    },
    // Other Ústecký kraj entries remain unchanged

    {
      Rok: 2023,
      Kraj: "Zlínský kraj",
      "Měrné emise": 7.56,
      Látka: "CO",
      Jednotka: "t",
      AQI: 87.50061861792508, // Inverted from 12.499381382074922
    },
    // Other Zlínský kraj entries remain unchanged
  ];

  return Response.json({ data });
}
