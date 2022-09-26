import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from '@syncfusion/ej2-react-charts';

import { OpacityContainer, Header } from '../../';
import { colorMappingData, rangeColorMapping } from '../../../assets/dummy';
import { useThemeCtx } from '../../../context/provider';

const ColorMapping = () => {
  const { mode } = useThemeCtx();

  return (
    <OpacityContainer>
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
        <Header
          category='Color Mapping'
          title='USA Climate - Weather by Month'
        />
        <div className='w-full'>
          <ChartComponent
            id='colorMappingChart'
            chartArea={{ border: { width: 0 } }}
            legendSettings={{ mode: 'Range', background: 'white' }}
            tooltip={{ enable: true }}
            background={mode === 'Dark' ? '#33373E' : '#fff'}
            primaryXAxis={{
              valueType: 'Category',
              majorGridLines: { width: 0 },
              title: 'Months',
            }}
            primaryYAxis={{
              lineStyle: { width: 0 },
              majorTickLines: { width: 0 },
              minorTickLines: { width: 0 },
              labelFormat: '{value}°C',
              title: 'Temperature',
            }}>
            <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />

            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={colorMappingData[0]}
                name='USA'
                xName='x'
                yName='y'
                type='Column'
                cornerRadius={{
                  topLeft: 10,
                  topRight: 10,
                }}
              />
            </SeriesCollectionDirective>
            <RangeColorSettingsDirective>
              {rangeColorMapping.map((range, index) => (
                <RangeColorSettingDirective key={index} {...range} />
              ))}
            </RangeColorSettingsDirective>
          </ChartComponent>
        </div>
      </div>
    </OpacityContainer>
  );
};

export default ColorMapping;

