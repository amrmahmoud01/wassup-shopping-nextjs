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

export default function ShopContent({
  products,
  hasNext,
}: {
  products: Product[];
  hasNext: boolean;
}) {
  const searchParams = useSearchParams();

  function buildHref(pageNo: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNo.toString());
    return `/shop?${params.toString()}`;
  }

  const page = Number(searchParams.get("page")) || 1;

  const search = searchParams.get("search");

  const { register, handleSubmit } = useForm();

  const router = useRouter();

  function onSearchSubmit(data: FieldValues) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", "1");
    newParams.set("search", data.searchbar);
    router.push(`/shop?${newParams.toString()}`);
  }

  return (
    <div>
      <div className="w-3/4 mx-auto">
        <div className="mx-auto w-full relative flex justify-center">
          <form onSubmit={handleSubmit(onSearchSubmit)} className="w-full">
            <Input
              className="w-full mt-10 rounded-3xl border-4 py-4 border-[#3F51B5] focus:border-[#3F51B5] focus-visible:border-[#3F51B5]"
              defaultValue={search ? `${search}` : ""}
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
      <div className="flex flex-col items-center">
        <div className="product-grid grid grid-cols-12 justify-center items-center md:gap-14 gap-4 mt-8 w-10/12">
          {products.map((product: Product) => (
            <div
              className="w-full lg:col-span-4 xl:col-span-4 md:col-span-6 col-span-6 flex justify-center"
              key={product.id}
            >
              <SingleProduct data={product} />
            </div>
          ))}
        </div>
        <Pagination className="my-10">
          <PaginationContent>
            {Number(page) !== 1 && (
              <PaginationItem>
                <Link
                  href={buildHref(Number(page) - 1)}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "default" }),
                    "gap-1 px-2.5 sm:pl-2.5"
                  )}
                >
                  ← Previous
                </Link>
              </PaginationItem>
            )}

            {Number(page) !== 1 && (
              <PaginationItem>
                <Link
                  href={buildHref(Number(page) - 1)}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" })
                  )}
                >
                  {Number(page) - 1}
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
                {Number(page)}
              </span>
            </PaginationItem>

            {hasNext && (
              <PaginationItem>
                <Link
                  href={buildHref(Number(page) + 1)}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" })
                  )}
                >
                  {Number(page) + 1}
                </Link>
              </PaginationItem>
            )}

            {hasNext && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {hasNext && (
              <PaginationItem>
                <Link
                  href={buildHref(Number(page) + 1)}
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
    </div>
  );
}
