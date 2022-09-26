import React from 'react';
import OpacityContainer from '../../components/opacitycontainer';
// import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import { StackedChart, Button, SparkLine } from '../../components';

import { earningData, SparklineAreaData } from '../../assets/dummy';

import { useThemeCtx } from '../../context/provider';

const ECommerce = () => {
  const { currentColor } = useThemeCtx();

  return (
    <OpacityContainer>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bond text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63,559.89</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color='white'
              bgColor={currentColor}
              text='Download'
              borderRadius='10px'
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center items-center gap-1'>
          {earningData.map((earning, index) => (
            <div
              key={index}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
              <button
                type='button'
                style={{
                  color: earning.iconColor,
                  backgroundColor: earning.iconBg,
                }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-2xl'>
                {earning.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{earning.amount} </span>
                <span className={`text-sm text-${earning.pcColor} ml-2`}>
                  {earning.percentage}{' '}
                </span>
              </p>
              <p className='text-gray-400 text-sm mt-1'>{earning.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl cursor-pointer'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl cursor-pointer'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer bg-green-400 ml-3 text-xs rounded-full text-white'>
                    23%
                  </span>
                </p>
                <p className='text-gray-500'>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$48,438</span>
                </p>
                <p className='text-gray-500'>Expense</p>
              </div>

              <div className='mt-5'>
                <SparkLine
                  id='line-sparkline'
                  currentColor={currentColor}
                  type='Line'
                  color={currentColor}
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                />
              </div>
              <div className='mt-10'>
                <Button
                  color='white'
                  bgColor={currentColor}
                  text='Download Report'
                  borderRadius='10px'
                />
              </div>
            </div>

            <div className=''>
              <StackedChart width='320px' height='360px' />
            </div>
          </div>
        </div>
      </div>
    </OpacityContainer>
  );
};

export default ECommerce;

