import React from 'react';

export const MenuItem = ({ text = '', icon }) => {
  return (
    <div className='flex items-center space-x-2 w-full'>
      {icon}
      <span  className='text-medium-gray hover:text-almost-black cursor-pointer'>
        {text}
      </span>
    </div>
  );
};
