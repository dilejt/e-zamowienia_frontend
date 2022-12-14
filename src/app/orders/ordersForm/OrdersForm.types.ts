import { ParamsContextValue } from '@/context/params/paramsContext/ParamsContext.types';
import { UseGetOrdersParamsFilters } from '@/hooks/useGetOrdersParams/useGetOrdersParams.types';

export type OrdersFormProps = {
  updateFilters: ParamsContextValue['setFilter'];
  filters: Omit<UseGetOrdersParamsFilters, 'limit' | 'offset'>;
};
