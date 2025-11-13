export async function getProducts(
  page: number,
  category?: string[],
  priceMin?: string,
  priceMax?: string,
  store?: string[],
  search?: string
) {
  const params = new URLSearchParams();

  params.append("page", String(page));

  if (category && category.length > 0)
    category.forEach((c) => params.append("category", c));

  if (store && store.length > 0)
    store.forEach((s) => params.append("store", s));

  if (priceMin) params.append("priceMin", priceMin);
  if (priceMax) params.append("priceMax", priceMax);

  if (search) params.append("search", search);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/getAllProducts?${params.toString()}`
  );
  return await res.json();
}
