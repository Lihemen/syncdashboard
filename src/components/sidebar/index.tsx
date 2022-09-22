import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useAppContext, useScreenSizeContext } from '../../context/provider';

import { links } from '../../assets/dummy';

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useAppContext();
  const { screenSize } = useScreenSizeContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) return setActiveMenu(false);
  };

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link
              to='/'
              onClick={handleCloseSideBar}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
              <SiShopware />
              <span>Shoppy</span>
            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button
                type='button'
                onClick={() => setActiveMenu((s) => !s)}
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {links.map((link, index) => (
              <div key={index}>
                <p className='text-gray-400 m-3 mt-4 uppercase'>{link.title}</p>
                {link.links.map((nested_link, index) => (
                  <NavLink
                    to={
                      link.title !== 'Charts'
                        ? `/${nested_link.name}`
                        : `/charts/${nested_link.name}`
                    }
                    onClick={handleCloseSideBar}
                    key={index}
                    className={({ isActive }) =>
                      isActive
                        ? 'link'
                        : 'link text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray '
                    }>
                    {nested_link.icon}
                    <span className='capitalize'>{nested_link.name} </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
