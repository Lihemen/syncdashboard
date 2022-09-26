import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../../components';
import OpacityContainer from '../../components/opacitycontainer';

const change = (args: any) => {
  document.getElementById('preview')!.style.backgroundColor =
    args.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <OpacityContainer>
      <div className='pageWrapper'>
        <Header category='Page' title='Color Picker' />

        <div className='text-center'>
          <div id='preview' />
          <div className='flex justify-center items-center gap-20 flex-wrap'>
            <div>
              <p className='text-2xl mt-2 mb-4 font-semibold'>Inline Pallete</p>

              <ColorPickerComponent
                id='inline-pallette'
                mode='Palette'
                modeSwitcher={false}
                showButtons={false}
                inline
                change={change}
              />
            </div>
            <div>
              <p className='text-2xl mt-2 mb-4 font-semibold'>Inline Picker</p>

              <ColorPickerComponent
                id='inline-pallette'
                mode='Picker'
                modeSwitcher={false}
                showButtons={false}
                inline
                change={change}
              />
            </div>
          </div>
        </div>
      </div>
    </OpacityContainer>
  );
};

export default React.memo(ColorPicker);

