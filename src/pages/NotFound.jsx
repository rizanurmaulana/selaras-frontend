import { Button } from '@/components/ui/button';
import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-white px-6'>
      <div className='flex items-center justify-center'>
        <img src='./images/PageNotFound.svg' alt='' className='w-full object-cover' />
      </div>
      <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
        Page Not Found
      </h2>
      <p className='text-gray-600 text-center text-mute mb-6'>
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Button onClick={handleGoBack}>Go Back</Button>
    </div>
  );
};

export default NotFound;
