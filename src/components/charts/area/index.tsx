import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineAreaSeries,
  Inject,
  DateTime,
  Legend,
} from '@syncfusion/ej2-react-charts';

import { OpacityContainer, Header } from '../../';
import { useThemeCtx } from '../../../context/provider';
import { areaCustomSeries } from '../../../assets/dummy';

const Area = () => {
  const { mode } = useThemeCtx();
  return (
    <OpacityContainer>
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
        <Header category='Chart' title='Inflation Rate in Percentage' />

        <div className='w-full'>
          <ChartComponent
            id='line-area-char'
            height='420px'
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={mode === 'Dark' ? '#33373e' : '#ffffff'}
            primaryXAxis={{
              valueType: 'DateTime',
              labelFormat: 'y',
              majorGridLines: { width: 0 },
              intervalType: 'Years',
              edgeLabelPlacement: 'Shift',
              labelStyle: { color: 'gray' },
            }}
            primaryYAxis={{
              labelFormat: '{value}%',
              lineStyle: { width: 0 },
              maximum: 4,
              interval: 1,
              majorTickLines: { width: 0 },
              minorTickLines: { width: 0 },
              labelStyle: { color: 'gray' },
            }}>
            <Inject services={[SplineAreaSeries, DateTime, Legend]} />
            <SeriesCollectionDirective>
              {areaCustomSeries.map((item, index) => (
                <SeriesDirective key={index} {...item} />
              ))}
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </OpacityContainer>
  );
};

export default Area;

