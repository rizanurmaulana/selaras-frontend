import React, { useState } from 'react';
import { Link } from 'react-router';
import { CircleUserRound, Menu, ShoppingCart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Beranda', path: '/' },
  { label: 'Katalog', path: '/catalog' },
  { label: 'Tentang Kami', path: '/about' },
  { label: 'Kontak', path: '/contact' },
];

const NavLinks = ({ className }) => (
  <ul className={`flex md:items-center gap-8 ${className}`}>
    {navItems.map(({ label, path }) => (
      <li
        key={path}
        className='text-sm text-neutral-600 hover:text-neutral-900'
      >
        <Link to={path}>{label}</Link>
      </li>
    ))}
  </ul>
);

const CartIcon = ({ cartCount }) => (
  <Link to='/cart' className='relative'>
    <ShoppingCart className='text-neutral-600 hover:text-neutral-900 h-6' />
    {cartCount > 0 && (
      <span className='absolute -top-2 -right-2 text-[10px] font-medium min-h-4 min-w-4 outline outline-2 flex justify-center items-center bg-sky-800 text-white rounded-full'>
        {cartCount}
      </span>
    )}
  </Link>
);

const Navbar = () => {
  const [cart, setCart] = useState(3);
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 w-full bg-white z-10'>
      <div className='max-w-6xl mx-auto flex justify-between items-center w-full px-4 sm:px-12 xl:px-0 min-h-20'>
        {/* Logo & Desktop Navigation */}
        <div className='flex items-center gap-28'>
          <Link to='/'>
            <img src='/logo/selaras-brand.png' alt='Selaras Logo' />
          </Link>
          <nav className='hidden md:block'>
            <NavLinks />
          </nav>
        </div>

        {/* Mobile Menu & Icons */}
        <div className='flex items-center gap-4'>
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen} className='z-[100]'>
            <SheetTrigger asChild>
              <Button variant='ghost' size='h-6' className='md:hidden'>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side='left'
              aria-describedby='mobile-menu-description'
            >
              <SheetTitle className='mb-10'>
                <img src='/logo/selaras-brand.png' alt='Selaras Logo' />
              </SheetTitle>

              <div className='flex flex-col items-start'>
                <NavLinks
                  className='flex-col gap-y-8'
                  onClick={() => setOpen(false)}
                />
              </div>
            </SheetContent>
          </Sheet>

          {/* Cart & User Icons */}
          <CartIcon cartCount={cart} />
          <Link to='/login'>
            <CircleUserRound className='text-neutral-600 hover:text-neutral-900 h-6' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
