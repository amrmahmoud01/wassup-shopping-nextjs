import React, { Suspense } from "react";
// import ShopContent from "../_components/ShopContent/ShopContent";
import { getProducts } from "../api/products.api";
import ShopContent from "../_components/ShopContent/ShopContent";

type Props = {
  searchParams: SearchParamsType;
};

//Fetch API here

export default async function Shop({ searchParams }: Props) {
  const params = await searchParams;

  const { products, hasNext } = await getProducts(
    params.page ? Number(params.page) : 1,
    params.categories
      ? Array.isArray(params.categories)
        ? params.categories
        : [params.categories]
      : undefined,
    params.minPrice ? String(params.minPrice) : undefined,
    params.maxPrice ? String(params.maxPrice) : undefined,
    params.stores
      ? Array.isArray(params.stores)
        ? params.stores
        : [params.stores]
      : undefined,
    params.search ? String(params.search) : undefined,
    params.onSale ? String(params.onSale) : undefined
  );
  // console.log(hasNext);
  // console.log("Products:", products);

  console.log("PARAMS", params);
  return (
    <ShopContent
      products={products}
      hasNext={hasNext}
      // searchParams={params}
    />
  );
}
