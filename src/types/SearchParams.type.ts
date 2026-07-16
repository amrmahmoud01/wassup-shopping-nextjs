interface SearchParamsType {
  page: string;
  search?: string;
  categories?: string | string[];
  stores?: string | string[];
  minPrice?: string;
  maxPrice?: string;
  onSale?: string;
}
