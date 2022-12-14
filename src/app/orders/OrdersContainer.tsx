import { OrdersContainerRaw } from './OrdersContainerRaw';

import { QueryParamsContextController } from '@/context/queryParams/queryParamsController/QueryParamsContextController';
import { ParamsContextController } from '@/context/params/paramsContextController/ParamsContextController';

export const OrdersContainer = () => {
  return (
    <QueryParamsContextController>
      <ParamsContextController
        filtersKeys={['offset', 'limit', 'filter_title', 'filter_category', 'filter_mode']}
        sortKeys={['price', 'title', 'mode', 'category']}
      >
        <OrdersContainerRaw />
      </ParamsContextController>
    </QueryParamsContextController>
  );
};
