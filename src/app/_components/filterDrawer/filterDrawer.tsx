"use client";

import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useState } from "react";
import { FilterAccordion } from "./../Accordion/Accordion";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { FilterFormType } from "@/types/FilterFormType.type";

export function FilterDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FilterFormType>();

  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  async function onSubmit(data: FilterFormType) {
    const params = new URLSearchParams();
    params.set("page", "1"); // always reset to first page
    if (data.store) data.store.forEach((s) => params.append("store", s));
    if (data.category)
      data.category.forEach((c) => params.append("category", c));
    if (data.minPrice) params.set("minPrice", data.minPrice);
    if (data.maxPrice) params.set("maxPrice", data.maxPrice);
    if (data.onSale) params.set("onSale", data.onSale);
    if (search) params.set("search", search);
    router.push(`/shop?${params.toString()}`);
    console.log("Filters:", data);
    console.log("PARAMS:", params.toString());
  }

  return (
    <>
      <div className="flex mt-10 items-center justify-start">
        <Button className="bg-blue-400" onClick={() => setIsOpen(true)}>
          Show Filters
        </Button>
      </div>
      <div className="flex ">
        <Drawer open={isOpen} onClose={handleClose} className="h-screen pt-15">
          <DrawerHeader title="Filters" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <FilterAccordion register={register} watch={watch} />
            <DrawerItems>
              <Button className="bg-blue-500 mt-10" type="submit">
                Submit
              </Button>
            </DrawerItems>
          </form>
        </Drawer>
      </div>
    </>
  );
}
