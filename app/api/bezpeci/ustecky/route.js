export async function GET() {
 const data = [
 {
"Ústecký kraj": [
 {
rok: 2015,
index: 64,
 },
 {
rok: 2016,
index: 71,
 },
 {
rok: 2017,
index: 72,
 },
 {
rok: 2018,
index: 75,
 },
 {
rok: 2019,
index: 75,
 },
 {
rok: 2020,
index: 79,
 },
 {
rok: 2021,
index: 78,
 },
 {
rok: 2022,
index: 72,
 },
 {
rok: 2023,
index: 71,
 }
]
 }
 ];
 return Response.json({ data });
}
