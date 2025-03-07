export async function GET() {
  const data = [
    {
      praha_vyd: [
        {
          rok: 2015,
          vydaje: 8813294283,
          prumer_plneni: 81.57772194,
          vydaje_na_obyvatele: 0.0071577935255839505,
          vydaje_ku_hdp: 0.0071577935255839505,
          index: 0.0,
        },
        {
          rok: 2016,
          vydaje: 9813607049,
          prumer_plneni: 84.4385584,
          vydaje_na_obyvatele: 0.007643135510942545,
          vydaje_ku_hdp: 0.007643135510942545,
          index: 14.108596881241963,
        },
        {
          rok: 2017,
          vydaje: 11731892742,
          prumer_plneni: 72.09340878,
          vydaje_na_obyvatele: 0.00858837187805463,
          vydaje_ku_hdp: 0.00858837187805463,
          index: 41.58604425522257,
        },
        {
          rok: 2018,
          vydaje: 15678257838,
          prumer_plneni: 80.2443276,
          vydaje_na_obyvatele: 0.010597837843554926,
          vydaje_ku_hdp: 0.010597837843554926,
          index: 100.0,
        },
        {
          rok: 2019,
          vydaje: 11508479185,
          prumer_plneni: 67.40219109,
          vydaje_na_obyvatele: 0.007274762391578789,
          vydaje_ku_hdp: 0.007274762391578789,
          index: 3.400213927006318,
        },
        {
          rok: 2020,
          vydaje: 12230668340,
          prumer_plneni: 66.07187472,
          vydaje_na_obyvatele: 0.007855766067412407,
          vydaje_ku_hdp: 0.007855766067412407,
          index: 20.289638077690192,
        },
        {
          rok: 2021,
          vydaje: 12365093098,
          prumer_plneni: 73.1818059,
          vydaje_na_obyvatele: 0.00771716450837091,
          vydaje_ku_hdp: 0.00771716450837091,
          index: 16.260574896223734,
        },
        {
          rok: 2022,
          vydaje: 15779241646,
          prumer_plneni: 80.69204694,
          vydaje_na_obyvatele: 0.009322970203651136,
          vydaje_ku_hdp: 0.009322970203651136,
          index: 62.940371632893985,
        },
        {
          rok: 2023,
          vydaje: 15615712292,
          prumer_plneni: 68.53800323,
          vydaje_na_obyvatele: 0.008985987011899975,
          vydaje_ku_hdp: 0.008985987011899975,
          index: 53.14447481869474,
        },
      ],
    },
  ];

  return Response.json({ data });
}
