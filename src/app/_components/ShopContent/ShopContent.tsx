"use client";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { FieldValues, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import { Product } from "@/types/Product.type";
import { getProducts } from "@/app/api/products.api";
import { FilterDrawer } from "../filterDrawer/filterDrawer";
import SingleProduct from "../singleProduct/singleProduct";

export default function ShopContent() {
  const [loading, setloading] = useState(true);
  const [products, setProducts] = useState([]);
  const [hasNext, setHasNext] = useState(true);

  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams);
  console.log("New params:", newParams);

  const page = Number(searchParams.get("page")) || 1;
  const stores = searchParams.getAll("store");
  const categories = searchParams.getAll("category");
  const minPrice = searchParams.get("minPrice") ?? undefined;
  const maxPrice = searchParams.get("maxPrice") ?? undefined;
  const search = searchParams.get("search") ?? undefined;
  const onSale = searchParams.get("onSale") ?? undefined;

  async function fetchProducts() {
    setloading(true);
    const { products, hasNext } = await getProducts(
      page,
      categories.length ? categories : undefined,
      minPrice,
      maxPrice,
      stores.length ? stores : undefined,
      search,
      onSale
    );
    setProducts(products);
    setHasNext(hasNext);
    setloading(false);
  }

  function buildHref(pageNo: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNo.toString());
    return `/shop?${params.toString()}`;
  }

  const { register, handleSubmit, watch } = useForm();
  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  const router = useRouter();

  function onSearchSubmit(data: FieldValues) {
    newParams.set("page", "1");
    newParams.set("search", data.searchbar);
    console.log(data.searchbar);
    router.push(`/shop?${newParams.toString()}`);
  }

  return (
    <div>
      <div className="w-3/4 mx-auto">
        <div className="mx-auto w-full relative flex justify-center">
          <form onSubmit={handleSubmit(onSearchSubmit)} className="w-full">
            <Input
              className="w-full mt-10 rounded-3xl border-4 py-4 border-[#3F51B5] focus:border-[#3F51B5] focus-visible:border-[#3F51B5]"
              placeholder="🔎 Search"
              {...register("searchbar")}
            />
            <button
              className="absolute mt-12 right-3 cursor-pointer"
              type="submit"
            >
              <FontAwesomeIcon icon={SolidIcons.faMagnifyingGlass} />
            </button>
          </form>
        </div>
        <FilterDrawer />
      </div>
      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-12 justify-center items-center mx-auto gap-14 mt-8 w-10/12">
          {products.map((product: Product) => (
            <div
              className="col-span-12 lg:col-span-6 xl:col-span-4 md:col-span-6 sm:col-span-12 xs:col-span-12 flex justify-center"
              key={product.id}
            >
              <SingleProduct data={product} />
            </div>
          ))}
        </div>
      )}

      <Pagination className="my-10">
        <PaginationContent>
          {page !== 1 && (
            <PaginationItem>
              <Link
                href={buildHref(page - 1)}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "default" }),
                  "gap-1 px-2.5 sm:pl-2.5"
                )}
              >
                ← Previous
              </Link>
            </PaginationItem>
          )}

          {page !== 1 && (
            <PaginationItem>
              <Link
                href={buildHref(page - 1)}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" })
                )}
              >
                {page - 1}
              </Link>
            </PaginationItem>
          )}

          <PaginationItem>
            <span
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "pointer-events-none"
              )}
            >
              {page}
            </span>
          </PaginationItem>

          {hasNext && (
            <PaginationItem>
              <Link
                href={buildHref(page + 1)}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" })
                )}
              >
                {page + 1}
              </Link>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          {hasNext && (
            <PaginationItem>
              <Link
                href={buildHref(page + 1)}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "default" }),
                  "gap-1 px-2.5 sm:pr-2.5"
                )}
              >
                Next →
              </Link>
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
