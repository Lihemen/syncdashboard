import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  LineSeries,
  Inject,
  DateTime,
  Legend,
  Tooltip,
} from '@syncfusion/ej2-react-charts';

import { lineCustomSeries } from '../../../assets/dummy';
import { useThemeCtx } from '../../../context/provider';

const LineChart = () => {
  const { mode } = useThemeCtx();

  return (
    <ChartComponent
      id='line-char'
      height='420px'
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={mode === 'Dark' ? '#33373e' : '#ffffff'}
      primaryXAxis={{
        valueType: 'DateTime',
        edgeLabelPlacement: 'Shift',
        labelFormat: 'y',
        majorGridLines: { width: 0 },
        intervalType: 'Years',
      }}
      primaryYAxis={{
        labelFormat: '{value}%',
        rangePadding: 'None',
        minimum: 0,
        maximum: 100,
        interval: 20,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
      }}>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;

