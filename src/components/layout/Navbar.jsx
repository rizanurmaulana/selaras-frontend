import React, { useState } from 'react';
import { Link } from 'react-router';
import { CircleUserRound, ShoppingBasket } from 'lucide-react';

const Navbar = () => {
  const [cart, setCart] = useState(0);

  return (
    <header className='sticky top-0 w-full bg-white'>
      <div className='max-w-6xl mx-auto flex justify-between items-center w-full px-4 lg:px-0 min-h-20'>
        <div className='flex items-center gap-28'>
          <Link to='/'>
            <img src='/logo/selaras-brand.png' alt='' />
          </Link>
          <nav>
            <ul className='flex items-center gap-x-8'>
              <li className='text-sm text-neutral-600 hover:text-neutral-900'>
                <Link to='/'>Beranda</Link>
              </li>
              <li className='text-sm text-neutral-600 hover:text-neutral-900'>
                <Link to='/products'>Katalog</Link>
              </li>
              <li className='text-sm text-neutral-600 hover:text-neutral-900'>
                <Link to='/about'>Tentang Kami</Link>
              </li>
              <li className='text-sm text-neutral-600 hover:text-neutral-900'>
                <Link to='/contact'>Kontak</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex items-center justify-end gap-8'>
          <Link to='/cart' className='relative'>
            <ShoppingBasket className='text-neutral-600 hover:text-neutral-900 h-6' />
            {cart > 0 && (
              <span className='absolute -top-2 -right-2 text-[10px] font-medium min-h-4 min-w-4 outline outline-2 flex justify-center items-center bg-neutral-600 text-white rounded-full'>
                {cart}
              </span>
            )}
          </Link>
          <Link to='/login'>
            <CircleUserRound className='text-neutral-600 hover:text-neutral-900 h-6' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
