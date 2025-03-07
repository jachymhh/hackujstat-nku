export async function GET() {
 const data = [
 {
"Olomoucký kraj": [
 {
rok: 2015,
index: 78,
 },
 {
rok: 2016,
index: 81,
 },
 {
rok: 2017,
index: 86,
 },
 {
rok: 2018,
index: 89,
 },
 {
rok: 2019,
index: 86,
 },
 {
rok: 2020,
index: 91,
 },
 {
rok: 2021,
index: 91,
 },
 {
rok: 2022,
index: 86,
 },
 {
rok: 2023,
index: 85,
 }
]
 }
 ];
 return Response.json({ data });
}
