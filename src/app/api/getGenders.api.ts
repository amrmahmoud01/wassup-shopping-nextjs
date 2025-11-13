export async function getGenders() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/getGenders`);
  return await res.json();
}
