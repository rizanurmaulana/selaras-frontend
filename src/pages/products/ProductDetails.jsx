import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <Navbar />

      <section className='max-w-6xl mx-auto px-4 sm:px-12 xl:px-0 my-4'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to='/'>Beranda</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link to='/product'>Katalog</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Kebaya Wanita Modern</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-12 xl:px-0 mb-20 overflow-x-hidden'>
        <div className='flex flex-col md:flex-row justify-between gap-x-10 xl:gap-x-20'>
          <div className='w-full md:w-1/2 h-full flex items-center justify-center rounded-sm overflow-hidden mb-4'>
            <img
              src='/images/catalogs/kebaya-1.jpg'
              alt=''
              className='w-full h-full aspect-square object-cover'
            />
          </div>
          <div className='md:w-1/2'>
            <h2 className='font-bold text-2xl mb-3'>Kebaya Wanita Modern</h2>
            <div className='flex gap-x-2 mb-6'>
              <span className='px-4 py-[2px] text-xs bg-neutral-100 rounded-full flex items-center'>
                <Star
                  strokeWidth={0.5}
                  size={14}
                  className='fill-neutral-800 text-neutral-800 mr-2'
                />{' '}
                4.2 - 54 Reviews
              </span>
              <span className='px-4 py-[2px] uppercase text-xs font-medium bg-white border rounded-full'>
                Tersedia
              </span>
            </div>
            <p className='text-lg font-semibold mb-7'>
              {(200000).toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
              })}
            </p>
            <div className='mb-4 md:mb-8'>
              <h6 className='text-neutral-600 uppercase text-xs font-medium mb-2'>
                Available Colors
              </h6>
              <ToggleGroup
                type='single'
                className='flex-wrap justify-start gap-x-2'
              >
                <ToggleGroupItem value='blue' aria-label='Color Blue'>
                  <span className='h-6 w-6 rounded-full bg-blue-300'></span>Biru
                </ToggleGroupItem>
                <ToggleGroupItem value='yellow' aria-label='Color Yellow'>
                  <span className='h-6 w-6 rounded-full bg-yellow-300'></span>
                  Kuning
                </ToggleGroupItem>
                <ToggleGroupItem value='green' aria-label='Color Green'>
                  <span className='h-6 w-6 rounded-full bg-green-500'></span>
                  Hijau
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className='mb-4 md:mb-8'>
              <h6 className='text-neutral-600 uppercase text-xs font-medium mb-2'>
                Select Size
              </h6>
              <ToggleGroup
                type='single'
                className='flex-wrap justify-start gap-x-2'
              >
                <ToggleGroupItem
                  value='s'
                  aria-label='Size S'
                  variant='outline'
                >
                  S
                </ToggleGroupItem>
                <ToggleGroupItem
                  value='m'
                  aria-label='Size M'
                  variant='outline'
                >
                  M
                </ToggleGroupItem>
                <ToggleGroupItem
                  value='l'
                  aria-label='Size L'
                  variant='outline'
                >
                  L
                </ToggleGroupItem>
                <ToggleGroupItem
                  value='xl'
                  aria-label='Size XL'
                  variant='outline'
                >
                  XL
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className='mb-4 md:mb-8'>
              <h6 className='text-neutral-600 uppercase text-xs font-medium mb-2'>
                Quantity
              </h6>
              <div className='flex items-center gap-x-2 border w-fit rounded-[6px]'>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={handleDecrement}
                  disabled={count === 1}
                >
                  -
                </Button>
                <Input
                  type='text'
                  value={count}
                  readOnly
                  className='w-12 text-center border-none'
                />
                <Button variant='ghost' size='icon' onClick={handleIncrement}>
                  +
                </Button>
              </div>
            </div>
            <div className='flex space-x-2'>
              <Button className='w-52 bg-sky-800 hover:bg-sky-700'>
                Add to chart
              </Button>
              <Button onClick={toggleFavorite} variant='outline'>
                <Heart
                  className={`transition-colors ${
                    isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'
                  }`}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
