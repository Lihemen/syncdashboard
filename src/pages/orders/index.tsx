import React from 'react';
import OpacityContainer from '../../components/opacitycontainer';

import OrdersGrid from './components/ordersgrid';
import { Header } from '../../components';

const Orders = () => {
  return (
    <OpacityContainer>
      <div className='pageWrapper'>
        <Header category='Page' title='Orders' />
        <OrdersGrid />
      </div>
    </OpacityContainer>
  );
};

export default Orders;

