import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-[#5c3a7d]">{title}</h1>
      {subtitle && <p className="text-md text-gray-600 mt-2">{subtitle}</p>}
    </div>
  );
};

export default Header;