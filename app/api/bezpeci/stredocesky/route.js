export async function GET() {
 const data = [
 {
"Středočeský kraj": [
 {
rok: 2015,
index: 75,
 },
 {
rok: 2016,
index: 81,
 },
 {
rok: 2017,
index: 84,
 },
 {
rok: 2018,
index: 86,
 },
 {
rok: 2019,
index: 85,
 },
 {
rok: 2020,
index: 88,
 },
 {
rok: 2021,
index: 87,
 },
 {
rok: 2022,
index: 85,
 },
 {
rok: 2023,
index: 84,
 }
]
 }
 ];
 return Response.json({ data });
}
