import Navbar from '@/components/layout/Navbar';
import React from 'react';

const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <section className='max-w-6xl mx-auto my-8'>
        <div className='flex'>
          <div className='flex items-center justify-center'>
            <img
              src='/images/kebaya-1.jpg'
              alt=''
              className='w-96 aspect-square object-cover'
            />
          </div>
          <div>
            <h2 className='font-bold text-2xl'>Kebaya Wanita Modern</h2>
            <div className='flex'>
              <span className='px-4 py-[2px] '>
                44
              </span>
              <span className='px-4 py-[2px] uppercase text-xs font-medium bg-white border rounded-full'>
                Tersedia
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
