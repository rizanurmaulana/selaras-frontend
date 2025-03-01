import React from 'react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import ProductCard from '@/components/common/ProductCard';
import { Checkbox } from '@/components/ui/checkbox';

const productList = [
  {
    id: 1,
    image: '/images/catalogs/kebaya-1.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    isFavorite: false,
    price: 200000,
  },
  {
    id: 2,
    image: '/images/catalogs/kebaya-2.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    isFavorite: false,
    price: 235000,
  },
  {
    id: 3,
    image: '/images/catalogs/kebaya-3.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    isFavorite: false,
    price: 250000,
  },
  {
    id: 4,
    image: '/images/catalogs/jas-1.jpg',
    name: 'Jas Formal Pria',
    status: 'Tersedia',
    isFavorite: false,
    price: 270000,
  },
  {
    id: 5,
    image: '/images/catalogs/jas-2.jpg',
    name: 'Jas Formal Pria',
    status: 'Tersedia',
    isFavorite: false,
    price: 220000,
  },
  {
    id: 6,
    image: '/images/catalogs/jas-3.jpg',
    name: 'Jas Formal Anak',
    status: 'Tersedia',
    isFavorite: false,
    price: 320000,
  },
  {
    id: 7,
    image: '/images/catalogs/makeup-1.jpg',
    name: 'Make Up Karakter Pria',
    status: 'Tersedia',
    isFavorite: false,
    price: 280000,
  },
  {
    id: 8,
    image: '/images/catalogs/makeup-2.JPG',
    name: 'Make Up Wisuda Wanita',
    status: 'Tersedia',
    isFavorite: false,
    price: 260000,
  },
  {
    id: 9,
    image: '/images/catalogs/makeup-3.JPG',
    name: 'Make Up Arabian Look',
    status: 'Tersedia',
    isFavorite: false,
    price: 300000,
  },
  {
    id: 10,
    image: '/images/catalogs/kostum-1.jpg',
    name: 'Kostum Profesi Anak',
    status: 'Tersedia',
    isFavorite: false,
    price: 290000,
  },
  {
    id: 11,
    image: '/images/catalogs/kostum-2.jpg',
    name: 'Pakaian Adat Anak',
    status: 'Tersedia',
    isFavorite: false,
    price: 350000,
  },
  {
    id: 12,
    image: '/images/catalogs/kostum-3.jpg',
    name: 'Kostum Profesi Anak',
    status: 'Tersedia',
    isFavorite: false,
    price: 310000,
  },
];

const Products = () => {
  return (
    <>
      <Navbar />
      <section className='max-w-6xl mx-auto my-8'>
        <div className='flex flex-wrap'>
          <div className='w-1/5'>
            <div className='border rounded-md py-4 px-3'>
              <h4 className='text-sm font-medium mb-4'>Kategori</h4>
              <div className='flex flex-col divide-y'>
                <div className='flex items-center py-3 gap-x-2'>
                  <Checkbox id='kebaya' className='border-neutral-300' />
                  <label
                    htmlFor='kebaya'
                    className='text-sm text-neutral-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Kebaya
                  </label>
                </div>
                <div className='flex items-center py-3 gap-x-2'>
                  <Checkbox id='kebaya' className='border-neutral-300' />
                  <label
                    htmlFor='kebaya'
                    className='text-sm text-neutral-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Kebaya
                  </label>
                </div>
                <div className='flex items-center py-3 gap-x-2'>
                  <Checkbox id='kebaya' className='border-neutral-300' />
                  <label
                    htmlFor='kebaya'
                    className='text-sm text-neutral-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Jas
                  </label>
                </div>
                <div className='flex items-center py-3 gap-x-2'>
                  <Checkbox id='kebaya' className='border-neutral-300' />
                  <label
                    htmlFor='kebaya'
                    className='text-sm text-neutral-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Pakaian Adat
                  </label>
                </div>
                <div className='flex items-center py-3 gap-x-2'>
                  <Checkbox id='kebaya' className='border-neutral-300' />
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
            <div className='grid grid-cols-3 gap-x-2 gap-y-8'>
              {productList.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  widthCard='w-full'
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
