import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PyramidSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
  AccumulationSelection,
} from '@syncfusion/ej2-react-charts';

import { OpacityContainer, Header } from '../../';
import { useThemeCtx } from '../../../context/provider';

import { PyramidData } from '../../../assets/dummy';

const Bar = () => {
  const { mode } = useThemeCtx();

  return (
    <OpacityContainer>
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
        <Header category='Chart' title='Food Comparison Chart' />

        <div className='w-full'>
          <AccumulationChartComponent
            id='pyramid-char'
            legendSettings={{
              visible: true,
              background: mode === 'Dark' ? '#33373e' : '#ffffff',
            }}
            tooltip={{ enable: true }}
            background={mode === 'Dark' ? '#33373e' : '#ffffff'}>
            <Inject
              services={[
                AccumulationLegend,
                PyramidSeries,
                AccumulationDataLabel,
                AccumulationTooltip,
                AccumulationSelection,
              ]}
            />
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
                name='Food'
                dataSource={PyramidData}
                xName='x'
                yName='y'
                type='Pyramid'
                width='45%'
                height='80%'
                neckWidth='15%'
                gapRatio={0.03}
                explode
                emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
                dataLabel={{
                  visible: true,
                  position: 'Inside',
                  name: 'text',
                }}
              />
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>
        </div>
      </div>
    </OpacityContainer>
  );
};

export default Bar;

