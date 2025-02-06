import React from 'react';

const ProductCard = ({ image, name, status, price }) => {
  return (
    <div className='p-2'>
      <div className='h-80 rounded-sm overflow-hidden mb-6'>
        <img src={image} alt='' className='aspect-2/3 object-cover' />
      </div>
      <h5 className='font-medium mb-3'>{name}</h5>
      <div className='flex items-center gap-4'>
        <span className='px-4 py-[2px] uppercase text-xs font-medium bg-white border rounded-full'>
          {status}
        </span>
        <p className='text-sm text-neutral-600'>
          {price.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
          })}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
