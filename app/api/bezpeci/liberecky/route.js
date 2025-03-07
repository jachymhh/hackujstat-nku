export async function GET() {
 const data = [
 {
"Liberecký kraj": [
 {
rok: 2015,
index: 62,
 },
 {
rok: 2016,
index: 73,
 },
 {
rok: 2017,
index: 76,
 },
 {
rok: 2018,
index: 75,
 },
 {
rok: 2019,
index: 78,
 },
 {
rok: 2020,
index: 83,
 },
 {
rok: 2021,
index: 85,
 },
 {
rok: 2022,
index: 74,
 },
 {
rok: 2023,
index: 74,
 }
]
 }
 ];
 return Response.json({ data });
}
