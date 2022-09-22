import React from 'react';
import { useAppContext } from './context/provider';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AnimatePresence } from 'framer-motion';
import './App.css';

import {
  Calendar,
  ColorPicker,
  Customers,
  ECommerce,
  Editor,
  Employees,
  Kanban,
  Orders,
} from './pages';

// Charts
import {
  Line,
  ColorMapping,
  Bar,
  Area,
  Financial,
  PieChart,
  Pyramid,
  Stacked,
} from './components';

// Components
import { Sidebar, Navbar } from './components';

function App() {
  const { activeMenu } = useAppContext();
  const location = useLocation();

    <div className='flex relative dark:bg-main-dark-bg'>
      <div className='fixed right-6 bottom-4' style={{ zIndex: 9999 }}>
        <TooltipComponent content='Settings' position='TopLeft'>
          <button
            type='button'
            className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full'
            style={{ background: 'indigo' }}>
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
          <Sidebar />
        </div>
      ) : (
        <div className='w-0 dark:bg-secondary-dark-bg'>
          <Sidebar />
        </div>
      )}

      <div
        className={activeMenu ? 'routeHeader md:ml-72 ' : 'routeHeader flex-2'}>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <Navbar />
        </div>
      </div>
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route index element={<ECommerce />} />
          <Route path='ecommerce' element={<ECommerce />} />
          <Route path='orders' element={<Orders />} />
          <Route path='employees' element={<Employees />} />
          <Route path='customers' element={<Customers />} />

          {/* Apps */}
          <Route path='kanban' element={<Kanban />} />
          <Route path='editor' element={<Editor />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='color-picker' element={<ColorPicker />} />

          {/* Charts */}
          <Route path='charts'>
            <Route path='line' element={<Line />} />
            <Route path='bar' element={<Bar />} />
            <Route path='area' element={<Area />} />
            <Route path='financial' element={<Financial />} />
            <Route path='pie' element={<PieChart />} />
            <Route path='pyramid' element={<Pyramid />} />
            <Route path='color-mapping' element={<ColorMapping />} />
            <Route path='stacked' element={<Stacked />} />
          </Route>

          {/* 404 */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </AnimatePresence>
}

export default App;

