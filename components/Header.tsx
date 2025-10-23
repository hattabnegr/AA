
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
        UA & IP Address Checker
      </h1>
      <p className="mt-4 text-lg text-gray-400">
        Instantly view your browser's User Agent and your public IP address.
      </p>
    </header>
  );
};
   