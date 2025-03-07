export async function GET() {
 const data = [
 {
"Praha": [
 {
rok: 2015,
index: 0,
 },
 {
rok: 2016,
index: 15,
 },
 {
rok: 2017,
index: 25,
 },
 {
rok: 2018,
index: 33,
 },
 {
rok: 2019,
index: 31,
 },
 {
rok: 2020,
index: 51,
 },
 {
rok: 2021,
index: 50,
 },
 {
rok: 2022,
index: 43,
 },
 {
rok: 2023,
index: 43,
 }
]
 }
 ];
 return Response.json({ data });
}
