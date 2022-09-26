import React from 'react';

interface ButtonInterface {
  color: string;
  bgColor: string;
  text: string;
  borderRadius?: string;
  size?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: JSX.Element;
  bgHoverColor?: string;
  width?: string;
  onClick?: () => void;
}

const Button = ({
  icon,
  color,
  bgColor,
  bgHoverColor,
  text,
  type,
  size,
  borderRadius,
  width,
  onClick,
}: ButtonInterface) => {
  return (
    <button
      type={type ?? 'button'}
      onClick={onClick ?? undefined}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${
        size ?? 'base'
      } p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor} w-${width}`}>
      {icon} {text}
    </button>
  );
};

export default Button;

