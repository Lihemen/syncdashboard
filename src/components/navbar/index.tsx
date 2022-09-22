import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useAppContext, useScreenSizeContext } from '../../context/provider';

import avatar from '../../assets/avatar.jpg';

import { Cart, Chat, Notification, UserProfile } from '../';

interface NavButtonInterface {
  title: string;
  customFunc: () => void;
  icon: JSX.Element;
  color: string;
  dotColor?: string;
}

const NavButton = ({
  title,
  customFunc,
  icon,
  color,
  dotColor,
}: NavButtonInterface) => {
  return (
    <TooltipComponent content={title} position='BottomCenter'>
      <button
        type='button'
        onClick={customFunc}
        style={{ color }}
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
        <span
          style={{ background: dotColor }}
          className='absolute inline-flex h-2 w-2 right-2 top-2 rounded-full'></span>
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const { screenSize, setScreenSize } = useScreenSizeContext();

  useEffect(() => {
    window.addEventListener('resize', setScreenSize);

    setScreenSize();

    return () => window.removeEventListener('resize', setScreenSize);
  }, [screenSize, setScreenSize]);

  useEffect(() => {
    if (screenSize! < 900) return setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize]);

  const {
    setActiveMenu,
    handleClicked,
    cart,
    chat,
    notification,
    userProfile,
  } = useAppContext();

  const handleCart = () => handleClicked('cart'!);
  const handleNotification = () => handleClicked('notification');
  const handleChat = () => handleClicked('chat');
  const handleProfile = () => handleClicked('userProfile');

  return (
    <nav className='flex justify-between relative pb-2 md:mx-6'>
      <NavButton
        title='Menu'
        customFunc={() => setActiveMenu((s) => !s)}
        color='blue'
        icon={<AiOutlineMenu />}
        dotColor=''
      />
      <div className='flex '>
        <NavButton
          title='Cart'
          customFunc={() => handleCart()}
          color='blue'
          icon={<FiShoppingCart />}
        />
        <NavButton
          title='Chat'
          customFunc={() => handleChat()}
          color='blue'
          icon={<BsChatLeft />}
          dotColor='#03c9d7'
        />
        <NavButton
          title='Notification'
          customFunc={() => handleNotification()}
          color='blue'
          icon={<RiNotification3Line />}
          dotColor='#03c9d7'
        />
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={handleProfile}>
            <img src={avatar} className='rounded-full w-8 h-8' alt='avatar' />
            <p>
              {' '}
              <span className='text-gray-400 text-14'>Hi, </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
        {cart && <Cart />}
        {chat && <Chat />}
        {notification && <Notification />}
        {userProfile && <UserProfile />}
      </div>
    </nav>
  );
};

export default Navbar;

