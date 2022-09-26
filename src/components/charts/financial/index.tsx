import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from '@syncfusion/ej2-react-charts';

import { OpacityContainer, Header } from '../../';
import { useThemeCtx } from '../../../context/provider';

import { financialChartData } from '../../../assets/dummy';

const date1 = new Date('2017, 1, 1');

// eslint-disable-next-line consistent-return
function filterValue(value: {
  x: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}) {
  if (value.x >= date1) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Bar = () => {
  const { mode } = useThemeCtx();

  return (
    <OpacityContainer>
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
        <Header category='Chart' title='APPLE Historical' />

        <div className='w-full'>
          <ChartComponent
            id='financial-chart'
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true, shared: true }}
            crosshair={{
              enable: true,
              lineType: 'Vertical',
              line: { width: 0 },
            }}
            background={mode === 'Dark' ? '#33373e' : '#ffffff'}
            primaryXAxis={{
              valueType: 'DateTime',
              minimum: new Date('2016, 12, 31'),
              maximum: new Date('2017, 9, 30'),
              crosshairTooltip: { enable: true },
              majorGridLines: { width: 0 },
            }}
            primaryYAxis={{
              title: 'Price',
              minimum: 100,
              maximum: 180,
              interval: 20,
              lineStyle: { width: 0 },
              majorTickLines: { width: 0 },
            }}>
            <Inject
              services={[
                HiloSeries,
                Tooltip,
                DateTime,
                Logarithmic,
                Crosshair,
                Zoom,
              ]}
            />
            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={returnValue}
                xName='x'
                yName='low'
                name='Apple Inc'
                type='Hilo'
                low='low'
                high='high'
              />
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </OpacityContainer>
  );
};

export default Bar;

