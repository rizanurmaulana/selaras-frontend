import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router';

const productOrders = [
  {
    id: 1,
    name: 'Kebaya Wanita Modern',
    image: '/images/kebaya-1.jpg',
    addedOn: '27 July 2024',
    price: 200000,
    status: 'Processing',
  },
  {
    id: 2,
    name: 'Kebaya Wanita Modern',
    image: '/images/kebaya-2.jpg',
    addedOn: '15 August 2024',
    price: 235000,
    status: 'Shipped',
  },
  {
    id: 3,
    name: 'Kebaya Wanita Modern',
    image: '/images/kebaya-3.jpg',
    addedOn: '5 September 2024',
    price: 250000,
    status: 'Completed',
  },
];

const ProductWishlist = () => {
  return (
    <section className='max-w-5xl mx-auto flex items-center min-h-screen'>
      <div>
        <h2 className='font-semibold mb-14'>Wishlist</h2>
        <div className='space-y-8'>
          {productOrders.map((order, index) => (
            <div key={index} className='w-[600px] flex justify-between'>
              <div className='flex gap-x-8'>
                <div className='h-20 w-20'>
                  <img
                    src={order.image}
                    className='w-full aspect-square object-cover rounded-sm'
                    alt='Product Order'
                  />
                </div>
                <div>
                  <h6 className='font-medium text-sm mb-1'>{order.name}</h6>
                  <p className='text-xs text-neutral-600 mb-1'>
                    {order.addedOn}
                  </p>
                  <Link to={`/product/delete/${order.id}`}>
                    <Button variant='link' className='border-black p-0 h-fit text-xs'>
                      Remove Item
                    </Button>
                  </Link>
                </div>
              </div>
              <div className='flex items-center gap-x-8'>
                <p className='text-sm font-medium'>
                  {order.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0,
                  })}
                </p>
                <Link to={`/product/${order.id}`}>
                  <Button variant='outline' className='border-black'>
                    Add to cart
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

export default ProductWishlist;
