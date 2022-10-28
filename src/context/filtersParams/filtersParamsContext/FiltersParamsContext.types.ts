import { Query } from '@/context/queryParams/queryParamsContent/QueryParamsContext.types';

export type FiltersParamsContextValue = {
  query: Query;
  setParam: (key: string, value: number | string | string[]) => void;
};
