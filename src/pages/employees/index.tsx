import React from 'react';
import EmployeesGrid from './components/employeesgrid';

import OpacityContainer from '../../components/opacitycontainer';
import { Header } from '../../components';

const Employees = () => {
  return (
    <OpacityContainer>
      <div className='pageWrapper'>
        <Header category='Page' title='Employees' />
        <EmployeesGrid />
      </div>
    </OpacityContainer>
  );
};

export default Employees;

