export async function GET() {
 const data = [
 {
"Moravskoslezský kraj": [
 {
rok: 2015,
index: 62,
 },
 {
rok: 2016,
index: 69,
 },
 {
rok: 2017,
index: 72,
 },
 {
rok: 2018,
index: 74,
 },
 {
rok: 2019,
index: 74,
 },
 {
rok: 2020,
index: 81,
 },
 {
rok: 2021,
index: 82,
 },
 {
rok: 2022,
index: 73,
 },
 {
rok: 2023,
index: 72,
 }
]
 }
 ];
 return Response.json({ data });
}
