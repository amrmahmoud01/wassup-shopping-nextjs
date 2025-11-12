import React, { Suspense } from "react";
import ShopContent from "../_components/ShopContent/ShopContent";
export default function Shop() {
  return (
    <Suspense>
      <ShopContent />
    </Suspense>
  );
}
