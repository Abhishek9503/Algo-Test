// Button.js
import React from 'react';

const Button = ({ icon: Icon, label, isSelected, onClick }) => {
  return (
    <button
      className={`flex rounded-lg items-center gap-2 w-full px-5 py-3 text-left ${
        isSelected ? 'font-bold bg-blue-100 text-blue-500' : 'text-gray-700'
      } hover:bg-blue-50 transition-all`}
      onClick={onClick}
    >
      <Icon className={`w-[32px] h-[32px] ${isSelected ? 'text-blue-500' : 'text-gray-500'}`} />
      <span className='text-[24px] fw-400'>{label}</span>
    </button>
  );
};

export default Button;