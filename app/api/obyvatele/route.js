export async function GET() {
  const data = [
        {
            "Roky": 2015,
            "Kraj": "Česko",
            "Hodnota": 10542942
        },
        {
            "Roky": 2015,
            "Kraj": "Praha",
            "Hodnota": 1262507
        },
        {
            "Roky": 2015,
            "Kraj": "Středočeský kraj",
            "Hodnota": 1320721
        },
        {
            "Roky": 2015,
            "Kraj": "Jihočeský kraj",
            "Hodnota": 637292
        },
        {
            "Roky": 2015,
            "Kraj": "Plzeňský kraj",
            "Hodnota": 575665
        },
        {
            "Roky": 2015,
            "Kraj": "Karlovarský kraj",
            "Hodnota": 298506
        },
        {
            "Roky": 2015,
            "Kraj": "Ústecký kraj",
            "Hodnota": 823381
        },
        {
            "Roky": 2015,
            "Kraj": "Liberecký kraj",
            "Hodnota": 439152
        },
        {
            "Roky": 2015,
            "Kraj": "Královéhradecký kraj",
            "Hodnota": 551270
        },
        {
            "Roky": 2015,
            "Kraj": "Pardubický kraj",
            "Hodnota": 516247
        },
        {
            "Roky": 2015,
            "Kraj": "Vysočina",
            "Hodnota": 509507
        },
        {
            "Roky": 2015,
            "Kraj": "Jihomoravský kraj",
            "Hodnota": 1173563
        },
        {
            "Roky": 2015,
            "Kraj": "Olomoucký kraj",
            "Hodnota": 635094
        },
        {
            "Roky": 2015,
            "Kraj": "Zlínský kraj",
            "Hodnota": 584828
        },
        {
            "Roky": 2015,
            "Kraj": "Moravskoslezský kraj",
            "Hodnota": 1215209
        },
        {
            "Roky": 2016,
            "Kraj": "Česko",
            "Hodnota": 10565284
        },
        {
            "Roky": 2016,
            "Kraj": "Praha",
            "Hodnota": 1272732
        },
        {
            "Roky": 2016,
            "Kraj": "Středočeský kraj",
            "Hodnota": 1333249
        },
        {
            "Roky": 2016,
            "Kraj": "Jihočeský kraj",
            "Hodnota": 638307
        },
        {
            "Roky": 2016,
            "Kraj": "Plzeňský kraj",
            "Hodnota": 577638
        },
        {
            "Roky": 2016,
            "Kraj": "Karlovarský kraj",
            "Hodnota": 297317
        },
        {
            "Roky": 2016,
            "Kraj": "Ústecký kraj",
            "Hodnota": 822300
        },
        {
            "Roky": 2016,
            "Kraj": "Liberecký kraj",
            "Hodnota": 440179
        },
        {
            "Roky": 2016,
            "Kraj": "Královéhradecký kraj",
            "Hodnota": 551177
        },
        {
            "Roky": 2016,
            "Kraj": "Pardubický kraj",
            "Hodnota": 516553
        },
        {
            "Roky": 2016,
            "Kraj": "Vysočina",
            "Hodnota": 509187
        },
        {
            "Roky": 2016,
            "Kraj": "Jihomoravský kraj",
            "Hodnota": 1176972
        },
        {
            "Roky": 2016,
            "Kraj": "Olomoucký kraj",
            "Hodnota": 634081
        },
        {
            "Roky": 2016,
            "Kraj": "Zlínský kraj",
            "Hodnota": 584155
        },
        {
            "Roky": 2016,
            "Kraj": "Moravskoslezský kraj",
            "Hodnota": 1211437
        },
        {
            "Roky": 2017,
            "Kraj": "Česko",
            "Hodnota": 10589526
        },
        {
            "Roky": 2017,
            "Kraj": "Praha",
            "Hodnota": 1286554
        },
        {
            "Roky": 2017,
            "Kraj": "Středočeský kraj",
            "Hodnota": 1345764
        },
        {
            "Roky": 2017,
            "Kraj": "Jihočeský kraj",
            "Hodnota": 639180
        },
        {
            "Roky": 2017,
            "Kraj": "Plzeňský kraj",
            "Hodnota": 579228
        },
        {
            "Roky": 2017,
            "Kraj": "Karlovarský kraj",
            "Hodnota": 296106
        },
        {
            "Roky": 2017,
            "Kraj": "Ústecký kraj",
            "Hodnota": 820937
        },
        {
            "Roky": 2017,
            "Kraj": "Liberecký kraj",
            "Hodnota": 440934
        },
        {
            "Roky": 2017,
            "Kraj": "Královéhradecký kraj",
            "Hodnota": 550848
        },
        {
            "Roky": 2017,
            "Kraj": "Pardubický kraj",
            "Hodnota": 517243
        },
        {
            "Roky": 2017,
            "Kraj": "Vysočina",
            "Hodnota": 508664
        },
        {
            "Roky": 2017,
            "Kraj": "Jihomoravský kraj",
            "Hodnota": 1180477
        },
        {
            "Roky": 2017,
            "Kraj": "Olomoucký kraj",
            "Hodnota": 633133
        },
        {
            "Roky": 2017,
            "Kraj": "Zlínský kraj",
            "Hodnota": 583039
        },
        {
            "Roky": 2017,
            "Kraj": "Moravskoslezský kraj",
            "Hodnota": 1207419
        },
        {
            "Roky": 2018,
            "Kraj": "Česko",
            "Hodnota": 10626430
        },
        {
            "Roky": 2018,
            "Kraj": "Praha",
            "Hodnota": 1301135
        },
        {
            "Roky": 2018,
            "Kraj": "Středočeský kraj",
            "Hodnota": 1360998
        },
        {
            "Roky": 2018,
            "Kraj": "Jihočeský kraj",
            "Hodnota": 640909
        },
        {
            "Roky": 2018,
            "Kraj": "Plzeňský kraj",
            "Hodnota": 582601
        },
        {
            "Roky": 2018,
            "Kraj": "Karlovarský kraj",
            "Hodnota": 295285
        },
        {
            "Roky": 2018,
            "Kraj": "Ústecký kraj",
            "Hodnota": 820580
        },
        {
            "Roky": 2018,
            "Kraj": "Liberecký kraj",
            "Hodnota": 441608
        },
        {
            "Roky": 2018,
            "Kraj": "Královéhradecký kraj",
            "Hodnota": 550688
        },
        {
            "Roky": 2018,
            "Kraj": "Pardubický kraj",
            "Hodnota": 519125
        },
        {
            "Roky": 2018,
            "Kraj": "Vysočina",
            "Hodnota": 509019
        },
        {
            "Roky": 2018,
            "Kraj": "Jihomoravský kraj",
            "Hodnota": 1184729
        },
        {
            "Roky": 2018,
            "Kraj": "Olomoucký kraj",
            "Hodnota": 632547
        },
        {
            "Roky": 2018,
            "Kraj": "Zlínský kraj",
            "Hodnota": 582860
        },
        {
            "Roky": 2018,
            "Kraj": "Moravskoslezský kraj",
            "Hodnota": 1204346
        },
        {
            "Roky": 2019,
            "Kraj": "Česko",
            "Hodnota": 10669324
        },
        {
            "Roky": 2019,
            "Kraj": "Praha",
            "Hodnota": 1315311
        },
        {
            "Roky": 2019,
            "Kraj": "Středočeský kraj",
            "Hodnota": 1377505
        },
        {
            "Roky": 2019,
            "Kraj": "Jihočeský kraj",
            "Hodnota": 643145
        },
        {
            "Roky": 2019,
            "Kraj": "Plzeňský kraj",
            "Hodnota": 587531
        },
        {
            "Roky": 2019,
            "Kraj": "Karlovarský kraj",
            "Hodnota": 294807
        },
        {
            "Roky": 2019,
            "Kraj": "Ústecký kraj",
            "Hodnota": 820537
        },
        {
            "Roky": 2019,
            "Kraj": "Liberecký kraj",
            "Hodnota": 442947
        },
        {
            "Roky": 2019,
            "Kraj": "Královéhradecký kraj",
            "Hodnota": 551208
        },
        {
            "Roky": 2019,
            "Kraj": "Pardubický kraj",
            "Hodnota": 521146
        },
        {
            "Roky": 2019,
            "Kraj": "Vysočina",
            "Hodnota": 509370
        },
        {
            "Roky": 2019,
            "Kraj": "Jihomoravský kraj",
            "Hodnota": 1189530
        },
        {
            "Roky": 2019,
            "Kraj": "Olomoucký kraj",
            "Hodnota": 632141
        },
        {
            "Roky": 2019,
            "Kraj": "Zlínský kraj",
            "Hodnota": 582710
        },
        {
            "Roky": 2019,
            "Kraj": "Moravskoslezský kraj",
            "Hodnota": 1201436
        },
        {
            "Roky": 2020,
            "Kraj": "Česko",
            "Hodnota": 10700155
        },
        {
            "Roky": 2020,
            "Kraj": "Praha",
            "Hodnota": 1327272
        },
        {
            "Roky": 2020,
            "Kraj": "Středočeský kraj",
            "Hodnota": 1392407
        },
        {
            "Roky": 2020,
            "Kraj": "Jihočeský kraj",
            "Hodnota": 643759
        },
        {
            "Roky": 2020,
            "Kraj": "Plzeňský kraj",
            "Hodnota": 590889
        },
        {
            "Roky": 2020,
            "Kraj": "Karlovarský kraj",
            "Hodnota": 294187
        },
        {
            "Roky": 2020,
            "Kraj": "Ústecký kraj",
            "Hodnota": 819476
        },
        {
            "Roky": 2020,
            "Kraj": "Liberecký kraj",
            "Hodnota": 443161
        },
        {
            "Roky": 2020,
            "Kraj": "Královéhradecký kraj",
            "Hodnota": 551605
        },
        {
            "Roky": 2020,
            "Kraj": "Pardubický kraj",
            "Hodnota": 523350
        },
        {
            "Roky": 2020,
            "Kraj": "Vysočina",
            "Hodnota": 509855
        },
        {
            "Roky": 2020,
            "Kraj": "Jihomoravský kraj",
            "Hodnota": 1193984
        },
        {
            "Roky": 2020,
            "Kraj": "Olomoucký kraj",
            "Hodnota": 631767
        },
        {
            "Roky": 2020,
            "Kraj": "Zlínský kraj",
            "Hodnota": 581374
        },
        {
            "Roky": 2020,
            "Kraj": "Moravskoslezský kraj",
            "Hodnota": 1197069
        },
        {
            "Roky": 2021,
            "Kraj": "Česko",
            "Hodnota": 10500850
        },
        {
            "Roky": 2021,
            "Kraj": "Praha",
            "Hodnota": 1267173
        },
        {
            "Roky": 2021,
            "Kraj": "Středočeský kraj",
            "Hodnota": 1380006
        },
        {
            "Roky": 2021,
            "Kraj": "Jihočeský kraj",
            "Hodnota": 636286
        },
        {
            "Roky": 2021,
            "Kraj": "Plzeňský kraj",
            "Hodnota": 577190
        },
        {
            "Roky": 2021,
            "Kraj": "Karlovarský kraj",
            "Hodnota": 283677
        },
        {
            "Roky": 2021,
            "Kraj": "Ústecký kraj",
            "Hodnota": 799495
        },
        {
            "Roky": 2021,
            "Kraj": "Liberecký kraj",
            "Hodnota": 437131
        },
        {
            "Roky": 2021,
            "Kraj": "Královéhradecký kraj",
            "Hodnota": 542892
        },
        {
            "Roky": 2021,
            "Kraj": "Pardubický kraj",
            "Hodnota": 513894
        },
        {
            "Roky": 2021,
            "Kraj": "Vysočina",
            "Hodnota": 503738
        },
        {
            "Roky": 2021,
            "Kraj": "Jihomoravský kraj",
            "Hodnota": 1182488
        },
        {
            "Roky": 2021,
            "Kraj": "Olomoucký kraj",
            "Hodnota": 623686
        },
        {
            "Roky": 2021,
            "Kraj": "Zlínský kraj",
            "Hodnota": 573014
        },
        {
            "Roky": 2021,
            "Kraj": "Moravskoslezský kraj",
            "Hodnota": 1180180
        },
        {
            "Roky": 2022,
            "Kraj": "Česko",
            "Hodnota": 10759525
        },
        {
            "Roky": 2022,
            "Kraj": "Praha",
            "Hodnota": 1338530
        },
        {
            "Roky": 2022,
            "Kraj": "Středočeský kraj",
            "Hodnota": 1427394
        },
        {
            "Roky": 2022,
            "Kraj": "Jihočeský kraj",
            "Hodnota": 649455
        },
        {
            "Roky": 2022,
            "Kraj": "Plzeňský kraj",
            "Hodnota": 598258
        },
        {
            "Roky": 2022,
            "Kraj": "Karlovarský kraj",
            "Hodnota": 291398
        },
        {
            "Roky": 2022,
            "Kraj": "Ústecký kraj",
            "Hodnota": 810107
        },
        {
            "Roky": 2022,
            "Kraj": "Liberecký kraj",
            "Hodnota": 446850
        },
        {
            "Roky": 2022,
            "Kraj": "Královéhradecký kraj",
            "Hodnota": 552724
        },
        {
            "Roky": 2022,
            "Kraj": "Pardubický kraj",
            "Hodnota": 525863
        },
        {
            "Roky": 2022,
            "Kraj": "Vysočina",
            "Hodnota": 512701
        },
        {
            "Roky": 2022,
            "Kraj": "Jihomoravský kraj",
            "Hodnota": 1209381
        },
        {
            "Roky": 2022,
            "Kraj": "Olomoucký kraj",
            "Hodnota": 629823
        },
        {
            "Roky": 2022,
            "Kraj": "Zlínský kraj",
            "Hodnota": 579265
        },
        {
            "Roky": 2022,
            "Kraj": "Moravskoslezský kraj",
            "Hodnota": 1187776
        },
        {
            "Roky": 2023,
            "Kraj": "Česko",
            "Hodnota": 10878042
        },
        {
            "Roky": 2023,
            "Kraj": "Praha",
            "Hodnota": 1374334
        },
        {
            "Roky": 2023,
            "Kraj": "Středočeský kraj",
            "Hodnota": 1450379
        },
        {
            "Roky": 2023,
            "Kraj": "Jihočeský kraj",
            "Hodnota": 654078
        },
        {
            "Roky": 2023,
            "Kraj": "Plzeňský kraj",
            "Hodnota": 610148
        },
        {
            "Roky": 2023,
            "Kraj": "Karlovarský kraj",
            "Hodnota": 294964
        },
        {
            "Roky": 2023,
            "Kraj": "Ústecký kraj",
            "Hodnota": 812776
        },
        {
            "Roky": 2023,
            "Kraj": "Liberecký kraj",
            "Hodnota": 450450
        },
        {
            "Roky": 2023,
            "Kraj": "Královéhradecký kraj",
            "Hodnota": 556633
        },
        {
            "Roky": 2023,
            "Kraj": "Pardubický kraj",
            "Hodnota": 530238
        },
        {
            "Roky": 2023,
            "Kraj": "Vysočina",
            "Hodnota": 517019
        },
        {
            "Roky": 2023,
            "Kraj": "Jihomoravský kraj",
            "Hodnota": 1223124
        },
        {
            "Roky": 2023,
            "Kraj": "Olomoucký kraj",
            "Hodnota": 632790
        },
        {
            "Roky": 2023,
            "Kraj": "Zlínský kraj",
            "Hodnota": 580966
        },
        {
            "Roky": 2023,
            "Kraj": "Moravskoslezský kraj",
            "Hodnota": 1190143
        }
    ];

  return Response.json({ data
    });
}