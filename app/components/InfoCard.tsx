import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

interface InfoCardProps {
  title: string;
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, text }) => {
  return (
    <div className='bg-main-color text-white px-2 py-1 sm:px-4 sm:py-3 lg:px-6 lg:py-6 rounded shadow-md text-center flex flex-col items-center'>
      <div className='text-4xl mb-4 flex items-center justify-center'>
        <FaInfoCircle className='text-sec-color' />
      </div>
      <h3 className='text-2xl font-bold mb-2'>{title}</h3>
      <p className='text-lg'>{text}</p>
    </div>
  );
};

export default InfoCard;
