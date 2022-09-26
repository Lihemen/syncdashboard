import React from 'react';
import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

interface SparkLineInterface {
  currentColor: string;
  id: string;
  height: string;
  width: string;
  color: string;
  type: 'Line';
  data: { x: number; xval: string; yval: number }[];
}

const SparkLine = ({
  id,
  height,
  width,
  color,
  type,
  data,
  currentColor,
}: SparkLineInterface) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: '${xval} : ${yval}',
        trackLineSettings: {
          visible: true,
        },
      }}
      lineWidth={1}
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName='xval'
      yName='yval'
      type='Line'>
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;

