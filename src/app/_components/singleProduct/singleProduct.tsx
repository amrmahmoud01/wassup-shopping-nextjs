"use client";
import React from "react";
import image from "../../../../public/cereal-killer-pt2-printed-oversized-tee-printed-oversized-tees-in-your-shoe-225786.jpg";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/Product.type";
export default function SingleProduct(props: { data: Product }) {
  const { data } = props;

  function cleanImageUrl(url: string) {
    try {
      const u = new URL(url);
      u.searchParams.delete("width");
      return u.toString();
    } catch {
      return url; // fallback if invalid URL
    }
  }

  const image = cleanImageUrl(data.image);

  return (
    <div className="product-card text-center break-normal w-120 h-150 justify-start flex flex-col items-center bg-gray-300 overflow-hidden">
      <Link target="_blank" href={data.link} className="w-full">
        <div className="relative h-135 w-full justify-center flex items-start">
          <Image
            className="object-contain"
            src={image}
            alt=""
            fill
            loading="lazy"
          />
          {Number(data.salePrice) > 0 && (
            <span className="inline-flex items-center rounded-md mt-2 left-2 absolute bg-red-400 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10 z-100">
              Sale
            </span>
          )}
        </div>
      </Link>
      <Link
        href={data.link}
        target="_blank"
        className="text-decoration-none text-dark"
      >
        <h2 className="fs mt-2 text-center text-wrap">{data.name}</h2>
      </Link>
      {Number(data.salePrice) > 0 ? (
        <div className="flex w-full justify-between px-20">
          <span className="mt-1 mb-2 d-inline-block line-through text-gray-600">
            {data.price} EGP
          </span>
          <span className="mt-1 mb-2 d-inline-block text-red-700">
            {data.salePrice} EGP
          </span>
        </div>
      ) : (
        <div className="flex w-full justify-center">
          <span className="mt-1 mb-2 d-inline-block">
            {data.price} EGP
          </span>
        </div>
      )}
    </div>
  );
}
