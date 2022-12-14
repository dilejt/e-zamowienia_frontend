import { useIsMutating } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

import { useEditOrdersEffect } from '../hooks/useEditOrders/useEditOrdersEffect';

import { OrdersEditFormData } from './OrdersEditForm.types';
import { OrdersEditForm } from './OrdersEditForm';
import { ordersEditFormInitialData } from './OrdersEditForm.utils';

import { formatFormData } from '@/utils/api/formData/formatFormData';
import { editOrdersQueryKey } from '@/api/actions/orders/orders';
import { parseDateToString } from '@/utils/date/parseDateToString';
import { useGetOrdersDetails } from '@/app/ordersDetails/hooks/useGetOrdersDetails/useGetOrdersDetails';

export const OrdersEditFormWrapper = () => {
  const { orderId } = useParams<{ orderId: string }>();

  const { data: orderDetails } = useGetOrdersDetails(orderId || '', {
    retry: 3,
  });

  const form = useForm<OrdersEditFormData>({
    defaultValues: ordersEditFormInitialData,
  });

  const initialData = useMemo(() => {
    if (!!orderDetails) {
      const { _id, phoneNumber, email, dateOfPublication, customerName, country, files, ...rest } = orderDetails;

      return {
        initialFiles: files,
        orderDetailsValues: { ...rest, expirationDate: parseDateToString(rest.expirationDate) },
      };
    }
  }, [orderDetails]);

  useEffect(() => {
    if (!!initialData) {
      form.reset(initialData.orderDetailsValues);
    }
  }, [form, initialData]);

  const isLoading = !!useIsMutating({ mutationKey: [editOrdersQueryKey] });

  const { mutateAsync } = useEditOrdersEffect(orderId || '', form);

  //TODO send only changed values
  const submit = async (data: OrdersEditFormData) => {
    const { files, ...rest } = data; //TODO remove when files edit ready
    mutateAsync(formatFormData(rest));
  };

  return (
    <OrdersEditForm
      isSubmitting={isLoading}
      onSubmit={submit}
      form={form}
      minExpirationDate={initialData?.orderDetailsValues.expirationDate}
      initialFiles={initialData?.initialFiles}
    />
  );
};
