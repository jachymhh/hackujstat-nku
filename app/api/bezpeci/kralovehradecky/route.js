export async function GET() {
 const data = [
 {
"Královéhradecký kraj": [
 {
rok: 2015,
index: 86,
 },
 {
rok: 2016,
index: 91,
 },
 {
rok: 2017,
index: 93,
 },
 {
rok: 2018,
index: 92,
 },
 {
rok: 2019,
index: 96,
 },
 {
rok: 2020,
index: 95,
 },
 {
rok: 2021,
index: 96,
 },
 {
rok: 2022,
index: 90,
 },
 {
rok: 2023,
index: 89,
 }
]
 }
 ];
 return Response.json({ data });
}
