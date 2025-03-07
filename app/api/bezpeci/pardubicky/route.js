export async function GET() {
 const data = [
 {
"Pardubický kraj": [
 {
rok: 2015,
index: 90,
 },
 {
rok: 2016,
index: 94,
 },
 {
rok: 2017,
index: 94,
 },
 {
rok: 2018,
index: 95,
 },
 {
rok: 2019,
index: 96,
 },
 {
rok: 2020,
index: 99,
 },
 {
rok: 2021,
index: 98,
 },
 {
rok: 2022,
index: 95,
 },
 {
rok: 2023,
index: 94,
 }
]
 }
 ];
 return Response.json({ data });
}
