export async function getAllCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/getCats`);
  return await res.json();
}
