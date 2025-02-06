import ProductCard from '@/components/common/ProductCard';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Bus, ShieldCheck } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const servicesList = [
  {
    icon: <Bus />,
    title: 'Antar Barang',
    description:
      'Pesanan Anda akan diantar dengan aman dan tepat waktu langsung ke lokasi Anda.',
  },
  {
    icon: <Award />,
    title: 'Jaminan Kepuasan',
    description:
      'Kami pastikan Anda puas. Jika tidak sesuai harapan, kami siap membantu.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Pembayaran Aman',
    description:
      'Keamanan Anda adalah prioritas kami. Pembayaran Anda dijamin aman.',
  },
];

const productList = [
  {
    image: '/images/product-1.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    price: 200000,
  },
  {
    image: '/images/product-2.jpg',
    name: 'Pakaian Adat Jawa',
    status: 'Tersedia',
    price: 650000,
  },
  {
    image: '/images/product-3.jpg',
    name: 'Jas Hitam Pria',
    status: 'Tersedia',
    price: 125000,
  },
  {
    image: '/images/product-4.jpg',
    name: 'Make Up Wisuda',
    status: 'Tersedia',
    price: 150000,
  },
];

const featuredList = [
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
];

const Home = () => {
  return (
    <>
      <section className='bg-neutral-100 mb-20'>
        <div className='max-w-6xl mx-auto px-4 lg:px-0'>
          <div className='flex justify-between min-h-[440px]'>
            <div className='max-w-md flex flex-col justify-center'>
              <h1 className='text-3xl tracking-tight font-semibold text-neutral-900 mb-6'>
                Tampil Maksimal untuk <br className='hidden md:block' /> Setiap
                Momen Berharga
              </h1>
              <p className='leading-relaxed text-neutral-700 mb-6'>
                Solusi lengkap untuk penampilan istimewa Anda dengan koleksi
                busana berkualitas dan tata rias profesional.
              </p>
              <Button asChild className='w-fit'>
                <Link href='/'>
                  Lihat Katalog <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className='flex items-end'>
              <img src='/images/hero-image.png' alt='' />
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 lg:px-0 mb-20'>
        <div className='flex justify-between items-center'>
          {servicesList.map((service, index) => (
            <div key={index} className='w-72'>
              <span className='h-14 w-14 flex justify-center items-center bg-neutral-100 rounded-full mb-6'>
                {service.icon}
              </span>
              <h2 className='font-semibold mb-3'>{service.title}</h2>
              <p className='text-sm text-neutral-700'>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 lg:px-0 mb-20'>
        <div className='text-center mb-20'>
          <span className='text-xs text-neutral-400 mb-2'>GET NOW</span>
          <h2 className='text-2xl font-bold'>Produk Terlaris</h2>
        </div>
        <div className='flex justify-between items-center'>
          <div className='grid grid-cols-4'>
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
        </div>
      </section>

      <section className='bg-gradient-to-r from-neutral-100 to-white mb-20'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex justify-between min-h-[304px]'>
            <div className='max-w-md flex flex-col justify-center'>
              <h2 className='text-2xl font-bold mb-6'>
                Temukan Koleksi Kebaya Terbaik
              </h2>
              <p className='leading-relaxed text-neutral-700 mb-6'>
                Jelajahi kebaya dengan desain anggun dan bahan berkualitas.
                Pilihan sempurna untuk setiap momen spesialmu!
              </p>
              <Button asChild className='w-fit'>
                <Link href='/'>
                  Lihat Katalog <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className='flex items-end'>
              <img src='/images/cta-image.png' className='h-64' alt='' />
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 lg:px-0 mb-20'>
        <div className='text-center mb-20'>
          <span className='text-sm font-medium px-4 py-1 border rounded-full cursor-pointer'>
            Unggulan
          </span>
          <span className='text-sm font-normal px-4 py-1 text-neutral-400 cursor-pointer'>
            Terbaru
          </span>
        </div>
        <div className='flex justify-between items-center'>
          <div className='grid grid-cols-4'>
            {featuredList.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                name={product.name}
                status={product.status}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
