export async function getStores() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/getStores`);

  return await res.json();
}
