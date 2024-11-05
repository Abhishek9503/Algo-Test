// Button.js
import React from 'react';

const Button = ({ icon: Icon, label, isSelected, onClick }) => {
  return (
    <button
      className={`flex w-[276px] h-[64px] rounded-lg items-center gap-5 w-full px-5 py-3 text-left ${
        isSelected ? 'font-bold bg-blue-100 text-gray-500' : 'text-gray-700'
      } hover:bg-blue-50 transition-all`}
      onClick={onClick}
    >
      <Icon className={`w-[32px] h-[32px] text-gray-500 ${isSelected ? 'font-extrabold' : 'font-medium'}`} />
      <span className='text-[24px] fw-400 text-black'>{label}</span>
    </button>
  );
};

export default Button;