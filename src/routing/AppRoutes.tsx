import { Route, Routes } from 'react-router-dom';

import { AppRoute } from './AppRoutes.types';

import { Main } from '@/app/main/Main';
import { OrdersContainer } from '@/app/orders/OrdersContainer';
import { Nav } from '@/app/nav/Nav';
import { Footer } from '@/app/footer/Footer';
import { Login } from '@/app/login/Login';
import { Register } from '@/app/register/Register';
import { UnauthenticatedLayout } from '@/layouts/unauthenticatedLayout/UnauthenticatedLayout';
import { OrdersDetailsContainer } from '@/app/orders/ordersDetails/OrdersDetailsContainer';

//TODO lazy
export const AppRoutes = () => (
  <Routes>
    <Route
      path={AppRoute.Main}
      element={
        <>
          <Nav position={'static'} />
          <Main />
          <Footer />
        </>
      }
    />
    <Route
      path={AppRoute.Login}
      element={
        <UnauthenticatedLayout>
          <Nav position={'absolute'} />
          <Login />
        </UnauthenticatedLayout>
      }
    />
    <Route
      path={AppRoute.Register}
      element={
        <UnauthenticatedLayout>
          <Nav position={'absolute'} />
          <Register />
        </UnauthenticatedLayout>
      }
    />
    <Route path={AppRoute.Orders}>
      <Route
        index
        element={
          <>
            <Nav position={'static'} />
            <OrdersContainer />
            <Footer />
          </>
        }
      />
      <Route path={AppRoute.OrderDetails}>
        <Route path={AppRoute.OrderId}>
          <Route
            index
            element={
              <>
                <Nav position={'static'} />
                <OrdersDetailsContainer />
                <Footer />
              </>
            }
          />
        </Route>
      </Route>
    </Route>
  </Routes>
);
