import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from '@syncfusion/ej2-react-charts';

import { OpacityContainer, Header } from '../../';
import { useThemeCtx } from '../../../context/provider';

import { pieChartData } from '../../../assets/dummy';

const Bar = () => {
  const { mode } = useThemeCtx();

  return (
    <OpacityContainer>
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
        <Header category='Chart' title='Olympic Medal Counts - RIO' />

        <div className='w-full'>
          <AccumulationChartComponent
            id='pie-char'
            height='full'
            legendSettings={{
              visible: true,
              background: mode === 'Dark' ? '#33373e' : '#ffffff',
            }}
            tooltip={{ enable: true }}
            background={mode === 'Dark' ? '#33373e' : '#ffffff'}>
            <Inject
              services={[
                AccumulationLegend,
                PieSeries,
                AccumulationDataLabel,
                AccumulationTooltip,
              ]}
            />
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
                name='Sale'
                dataSource={pieChartData}
                xName='x'
                yName='y'
                innerRadius='40%'
                startAngle={0}
                endAngle={360}
                radius='70%'
                explode
                explodeOffset='10%'
                explodeIndex={2}
                dataLabel={{
                  visible: true,
                  name: 'text',
                  position: 'Inside',
                  font: {
                    fontWeight: '600',
                    color: '#fff',
                  },
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

