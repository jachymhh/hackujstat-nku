export async function GET() {
 const data = [
 {
"Zlínský kraj": [
 {
rok: 2015,
index: 91,
 },
 {
rok: 2016,
index: 93,
 },
 {
rok: 2017,
index: 94,
 },
 {
rok: 2018,
index: 96,
 },
 {
rok: 2019,
index: 97,
 },
 {
rok: 2020,
index: 99,
 },
 {
rok: 2021,
index: 100,
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
