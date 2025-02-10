import ProductCard from '@/components/common/ProductCard';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import React from 'react';

const productList = [
  {
    image: '/images/kebaya-1.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    price: 200000,
  },
  {
    image: '/images/kebaya-2.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    price: 235000,
  },
  {
    image: '/images/kebaya-3.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    price: 250000,
  },
  {
    image: '/images/kebaya-4.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    price: 250000,
  },
  {
    image: '/images/kebaya-1.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    price: 200000,
  },
  {
    image: '/images/kebaya-2.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    price: 235000,
  },
  {
    image: '/images/kebaya-3.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    price: 250000,
  },
  {
    image: '/images/kebaya-4.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    price: 250000,
  },
  {
    image: '/images/kebaya-1.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    price: 200000,
  },
];

const Products = () => {
  return (
    <>
      <Navbar />
      <section className='max-w-6xl mx-auto my-8'>
        <div className='flex gap-x-8'>
          <div className='w-1/5'>
            <div className='border rounded-md py-4 px-3'>
              <h4 className='text-sm font-medium mb-4'>Kategori</h4>
              <div className='flex flex-col divide-y'>
                <div className='flex items-center py-3 gap-x-2'>
                  <Checkbox id='kebaya' className='border-neutral-300'  />
                  <label
                    htmlFor='kebaya'
                    className='text-sm text-neutral-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Kebaya
                  </label>
                </div>
                <div className='flex items-center py-3 gap-x-2'>
                  <Checkbox id='kebaya' className='border-neutral-300'  />
                  <label
                    htmlFor='kebaya'
                    className='text-sm text-neutral-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Kebaya
                  </label>
                </div>
                <div className='flex items-center py-3 gap-x-2'>
                  <Checkbox id='kebaya' className='border-neutral-300'  />
                  <label
                    htmlFor='kebaya'
                    className='text-sm text-neutral-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Jas
                  </label>
                </div>
                <div className='flex items-center py-3 gap-x-2'>
                  <Checkbox id='kebaya' className='border-neutral-300'  />
                  <label
                    htmlFor='kebaya'
                    className='text-sm text-neutral-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Pakaian Adat
                  </label>
                </div>
                <div className='flex items-center py-3 gap-x-2'>
                  <Checkbox id='kebaya' className='border-neutral-300'  />
                  <label
                    htmlFor='kebaya'
                    className='text-sm text-neutral-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Kostum
                  </label>
                </div>
                <div className='flex items-center py-3 gap-x-2'>
                  <Checkbox id='kebaya' className='border-neutral-300' />
                  <label
                    htmlFor='kebaya'
                    className='text-sm text-neutral-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Make Up
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='w-4/5'>
            <div className='grid grid-cols-3 gap-x-6 gap-y-8'>
              {productList.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  name={product.name}
                  status={product.status}
                  price={product.price}
                />
              ))}
            </div>
            <div className='place-self-center mt-16'>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href='#' />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href='#'>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href='#' isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href='#'>3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href='#' />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Products;
