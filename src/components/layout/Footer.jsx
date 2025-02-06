import React from 'react';

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className='bg-neutral-100'>
      <div className='max-w-6xl mx-auto px-4 lg:px-0 py-16'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <img
              src='/logo/selaras-brand.png'
              alt='Logo Selaras'
              className='mb-5'
            />
            <p className='text-sm text-neutral-700'>
              Selaras adalah Platform Sewa Busana dan Jasa Rias yang memudahkan
              penyewaan pakaian dan rias profesional, serta memberdayakan UMKM
              lokal di Kabupaten Kuningan.
            </p>
          </div>
          <div className='flex justify-between'>
            <div className='text-sm'>
              <h6 className='font-medium uppercase text-neutral-600 mb-10'>
                Support
              </h6>
              <ul>
                <li className='mb-4'>
                  <a href='#' className='font-medium text-neutral-700'>
                    FAQ
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='font-medium text-neutral-700'>
                    Terms of use
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='font-medium text-neutral-700'>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className='text-sm'>
              <h6 className='font-medium uppercase text-neutral-600 mb-10'>
                Company
              </h6>
              <ul>
                <li className='mb-4'>
                  <a href='#' className='font-medium text-neutral-700'>
                    About us
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='font-medium text-neutral-700'>
                    Contact
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='font-medium text-neutral-700'>
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className='text-sm'>
              <h6 className='font-medium uppercase text-neutral-600 mb-10'>
                SHOP
              </h6>
              <ul>
                <li className='mb-4'>
                  <a href='#' className='font-medium text-neutral-700'>
                    My account
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='font-medium text-neutral-700'>
                    Checkout
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='font-medium text-neutral-700'>
                    Cart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-4 border-t'>
        <p className='text-sm'>&copy; {getYear} Selaras. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
