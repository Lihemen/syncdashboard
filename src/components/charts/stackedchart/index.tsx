import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts';

import { OpacityContainer } from '../../';

import {
  stackedCustomSeries,
  stackedPrimaryYAxis,
} from '../../../assets/dummy';

interface StackedInterface {
  width: string;
  height: string;
  // series: any[];
}

const StackedChart = ({ width, height }: StackedInterface) => {
  return (
    <OpacityContainer>
      <ChartComponent
        width={width}
        height={height}
        id='charts'
        primaryXAxis={{ valueType: 'Category' }}
        primaryYAxis={{ ...stackedPrimaryYAxis }}
        chartArea={{ border: { width: 0 } }}
        legendSettings={{ background: 'white' }}
        tooltip={{ enable: true }}>
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </OpacityContainer>
  );
};

export default StackedChart;

