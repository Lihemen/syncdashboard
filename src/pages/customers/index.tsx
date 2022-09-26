import React from 'react';
import OpacityContainer from '../../components/opacitycontainer';

import { Header } from '../../components';
import CustomersGrid from './components/customersgrid';

const Customers = () => {
  return (
    <OpacityContainer>
      <div className='pageWrapper'>
        <Header category='Page' title='Customers' />
        <CustomersGrid />
      </div>
    </OpacityContainer>
  );
};

export default Customers;

