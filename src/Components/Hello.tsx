import React from 'react';

const Hello: React.FC = () => {
  const jwtToken = localStorage.getItem('jwtToken');

  return (
    <div className="max-w-sm rounded-sm overflow-hidden shadow-lg m-16 flex flex-col flex-center justify-center bg-">
      
        <div className="font-medium text-base text-gray-darker mb-4">hola estoy recibiendo mi token desde la url!</div>
        <p className="font-normal text-gray-dark text-sm mb-4">
          JWT Token: {jwtToken}
        </p>

    </div>
  );
};

export default Hello;
