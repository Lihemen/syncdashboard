import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../../assets/dummy';

import { useThemeCtx } from '../../context/provider';

const Theme = () => {
  const { currentColor, mode, setColor, setMode, setThemeSettings } =
    useThemeCtx();

  return (
    <div
      className='bg-half-transparent w-screen fixed na-item top-0 right-0 z-[9999]'
      onClick={() => setThemeSettings(false)}>
      <div
        className='float-right h-screen dark:text-gray-200 bg-white dark:[#4b4b52] w-400'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-lg'>Settings</p>
          <button
            type='button'
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 100)' }}
            className='text-2xl p-3 rounded-full hover:drop-shadow-xl hover:bg-light-gray'>
            <MdOutlineCancel />
          </button>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Options</p>

          <div className='mt-4'>
            <input
              type='radio'
              id='light'
              name='theme'
              value='Light'
              className='cursor-pointer'
              onChange={setMode}
              checked={mode === 'Light'}
            />
            <label htmlFor='light' className='ml-2 text-md cursor-pointer'>
              Light
            </label>
          </div>
          <div className='mt-4'>
            <input
              type='radio'
              id='dark'
              name='theme'
              value='Dark'
              className='cursor-pointer'
              onChange={setMode}
              checked={mode === 'Dark'}
            />
            <label htmlFor='dark' className='ml-2 text-md cursor-pointer'>
              Dark
            </label>
          </div>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Colors</p>

          <div className='flex gap-3'>
            {themeColors.map((color, index) => (
              <TooltipComponent
                key={index}
                content={color.name}
                position='TopCenter'>
                <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                  <button
                    className='rounded-full cursor-pointer h-10 w-10'
                    style={{ backgroundColor: color.color }}
                    name={color.color}
                    onClick={setColor}>
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        color.color === currentColor ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;

