import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { FilterFormType } from "./FilterFormType.type";

export type FilterAccordionPropsType = {
  register: UseFormRegister<FilterFormType>;
  watch: UseFormWatch<FilterFormType>;
};