export async function GET() {
 const data = [
 {
"Karlovarský kraj": [
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
index: 79,
 },
 {
rok: 2018,
index: 80,
 },
 {
rok: 2019,
index: 76,
 },
 {
rok: 2020,
index: 85,
 },
 {
rok: 2021,
index: 88,
 },
 {
rok: 2022,
index: 80,
 },
 {
rok: 2023,
index: 79,
 }
]
 }
 ];
 return Response.json({ data });
}
