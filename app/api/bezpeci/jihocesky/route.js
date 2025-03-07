export async function GET() {
 const data = [
 {
"Jihočeský kraj": [
 {
rok: 2015,
index: 79,
 },
 {
rok: 2016,
index: 84,
 },
 {
rok: 2017,
index: 89,
 },
 {
rok: 2018,
index: 91,
 },
 {
rok: 2019,
index: 89,
 },
 {
rok: 2020,
index: 92,
 },
 {
rok: 2021,
index: 93,
 },
 {
rok: 2022,
index: 87,
 },
 {
rok: 2023,
index: 87,
 }
]
 }
 ];
 return Response.json({ data });
}
