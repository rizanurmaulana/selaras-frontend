import { Button } from '@/components/ui/button';

import React from 'react';
import { Link } from 'react-router';

const products = [
  {
    id: 1,
    name: 'Kebaya Wanita Modern',
    image: '/images/kebaya-1.jpg',
    orderDate: '27 July 2024',
    price: 200000,
    status: 'Processing',
  },
  {
    id: 2,
    name: 'Kebaya Wanita Modern',
    image: '/images/kebaya-2.jpg',
    orderDate: '15 August 2024',
    price: 235000,
    status: 'Shipped',
  },
  {
    id: 3,
    name: 'Kebaya Wanita Modern',
    image: '/images/kebaya-3.jpg',
    orderDate: '5 September 2024',
    price: 250000,
    status: 'Completed',
  },
];

const ProductOrders = () => {
  return (
    <section className='max-w-5xl mx-auto flex items-center min-h-screen'>
      <div>
        <h2 className='font-semibold mb-14'>Orders</h2>
        <div className='space-y-8'>
          {products.map((product) => (
            <div
              key={product.id}
              className='w-[600px] flex justify-between items-center'
            >
              <div className='flex gap-x-8'>
                <div className='h-20 w-20'>
                  <img
                    src={product.image}
                    className='w-full h-full object-cover rounded-md'
                    alt={product.name}
                  />
                </div>
                <div>
                  <Link
                    to={`/product/${product.id}`}
                    className='font-medium text-sm mb-1  hover:underline'
                  >
                    {product.name}
                  </Link>
                  <p className='text-xs text-neutral-600 mb-1'>
                    Ordered on: {product.orderDate}
                  </p>
                  <p className='text-xs font-medium'>
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      minimumFractionDigits: 0,
                    }).format(product.price)}
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-x-8'>
                <p className='underline underline-offset-4'>{product.status}</p>
                <Link to={`/product/${product.id}`}>
                  <Button variant='outline' className='border-black'>
                    View Item
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOrders;
