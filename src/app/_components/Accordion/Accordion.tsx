// Accordion.tsx
"use client";

import { useEffect, useState } from "react";
import { getStores } from "@/app/api/getStores.api";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Checkbox,
  Label,
} from "flowbite-react";
import { getAllCategories } from "@/app/api/getAllCategories.api";
import { useSearchParams } from "next/navigation";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { FilterAccordionPropsType } from "@/types/FilterAccordionPropsType";
import { getGenders } from "@/app/api/getGenders.api";

export function FilterAccordion({ register, watch }: FilterAccordionPropsType) {
  const [stores, setStores] = useState([]);
  const [genders, setGenders] = useState([]);
  const [categories, setcategories] = useState([]);

  const params = useSearchParams();

  useEffect(() => {
    getStores().then(setStores);
    getAllCategories().then(setcategories);
    getGenders().then(setGenders);
  }, []);

  return (
    <Accordion>
      <AccordionPanel>
        <AccordionTitle>By Store</AccordionTitle>
        <AccordionContent>
          <div className="flex max-w-md flex-col gap-4" id="checkbox">
            {stores.map((store: { name: string }) => (
              <div key={store.name} className="flex items-center gap-2">
                <Checkbox
                  id={store.name}
                  value={store.name}
                  {...register("store")}
                  defaultChecked={params
                    .getAll("store")
                    .includes(`${store.name}`)}
                />
                <Label htmlFor={store.name}>{store.name}</Label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle>By Category</AccordionTitle>
        <AccordionContent>
          {categories.map((cat: { category: string }) => {
            return (
              <div key={cat.category} className="flex items-center gap-2">
                <Checkbox
                  id={cat.category}
                  className="mt-5"
                  value={cat.category}
                  {...register("category")}
                  defaultChecked={params
                    .getAll("category")
                    .includes(`${cat.category}`)}
                />
                <Label htmlFor={cat.category} className="mt-5">
                  {cat.category}
                </Label>
              </div>
            );
          })}
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle>By Gender</AccordionTitle>
        <AccordionContent>
          {genders.map((gender: { gender: string }) => {
            return (
              <div key={gender.gender} className="flex items-center gap-2">
                <Checkbox
                  id={gender.gender}
                  className="mt-5"
                  value={gender.gender}
                  {...register("category")}
                  defaultChecked={params
                    .getAll("category")
                    .includes(`${gender.gender}`)}
                />
                <Label htmlFor={gender.gender} className="mt-5 capitalize">
                  {gender.gender}
                </Label>
              </div>
            );
          })}
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle>Price</AccordionTitle>
        <AccordionContent>
          Min:{" "}
          <input className="border-black border" {...register("minPrice")} />
          Max:{" "}
          <input className="border-black border" {...register("maxPrice")} />
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}
