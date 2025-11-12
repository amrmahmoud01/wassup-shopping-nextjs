export async function getStores() {
  const res = await fetch("https://flaskbackend-wassup.up.railway.app/getStores");

  return await res.json();
}
