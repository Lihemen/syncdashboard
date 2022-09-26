import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  ColumnSeries,
  Inject,
  DateTime,
  Legend,
  DataLabel,
  Category,
  Tooltip,
} from '@syncfusion/ej2-react-charts';

import { OpacityContainer, Header } from '../../';
import { useThemeCtx } from '../../../context/provider';

import { barCustomSeries } from '../../../assets/dummy';

const Bar = () => {
  const { mode } = useThemeCtx();

  return (
    <OpacityContainer>
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
        <Header category='Chart' title='Olympic Medal Counts - RIO' />

        <div className='w-full'>
          <ChartComponent
            id='line-area-char'
            height='420px'
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={mode === 'Dark' ? '#33373e' : '#ffffff'}
            primaryXAxis={{
              valueType: 'Category',
              interval: 1,
              majorGridLines: { width: 0 },
            }}
            primaryYAxis={{
              majorGridLines: { width: 0 },
              majorTickLines: { width: 0 },
              lineStyle: { width: 0 },
              labelStyle: { color: 'transparent' },
            }}>
            <Inject
              services={[
                ColumnSeries,
                DateTime,
                Legend,
                Category,
                DataLabel,
                Tooltip,
              ]}
            />
            <SeriesCollectionDirective>
              {barCustomSeries.map((item, index) => (
                <SeriesDirective key={index} {...item} />
              ))}
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </OpacityContainer>
  );
};

export default Bar;

