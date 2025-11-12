export async function getAllCategories() {
  const res = await fetch("https://flaskbackend-wassup.up.railway.app/getCats");
  return await res.json();
}
