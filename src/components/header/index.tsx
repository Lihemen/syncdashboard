import React from 'react';

interface HeaderInterface {
  category: string;
  title: string;
}

const Header = ({ category, title }: HeaderInterface) => {
  return (
    <header className='mb-10'>
      <p className='text-gray-400 text-sm'>{category} </p>
      <p className='text-3xl pt-1 font-extrabold tracking-tight text-slate-900'>
        {title}{' '}
      </p>
    </header>
  );
};

export default Header;

