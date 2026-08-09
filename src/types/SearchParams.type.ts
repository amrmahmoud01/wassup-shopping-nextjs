interface SearchParamsType {
  page: string;
  search?: string;
  categories?: string | string[];
  store?: string | string[];
  minPrice?: string;
  maxPrice?: string;
  onSale?: string;
}
