import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Bus, Heart, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import ProductCard from '@/components/common/ProductCard';

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

const categories = [
  {
    id: 1,
    name: 'Kebaya',
    path: '/product?category=kebaya',
    image: '/images/category-1.jpg',
  },
  {
    id: 2,
    name: 'Pakaian Adat',
    path: '/product?category=pakaian-adat',
    image: '/images/category-2.jpg',
  },
  {
    id: 3,
    name: 'Jas',
    path: '/product?category=jas',
    image: '/images/category-3.jpg',
  },
  {
    id: 4,
    name: 'Make Up',
    path: '/product?category=makeup',
    image: '/images/category-4.jpg',
  },
];

const kebayaList = [
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
    price: 200000,
  },
  {
    id: 3,
    image: '/images/catalogs/kebaya-3.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    isFavorite: false,
    price: 200000,
  },
  {
    id: 4,
    image: '/images/catalogs/kebaya-4.jpg',
    name: 'Kebaya Wanita Modern',
    status: 'Tersedia',
    isFavorite: false,
    price: 200000,
  },
];

const jasList = [
  {
    id: 5,
    image: '/images/catalogs/jas-1.jpg',
    name: 'Jas Hitam Pria',
    status: 'Tersedia',
    isFavorite: false,
    price: 200000,
  },
  {
    id: 6,
    image: '/images/catalogs/jas-2.jpg',
    name: 'Jas Pengantin Pria',
    status: 'Tersedia',
    isFavorite: false,
    price: 200000,
  },
  {
    id: 7,
    image: '/images/catalogs/jas-3.jpg',
    name: 'Jas Hitam Anak',
    status: 'Tersedia',
    isFavorite: false,
    price: 125000,
  },
  {
    id: 8,
    image: '/images/catalogs/jas-4.jpg',
    name: 'Jas Formal Pria',
    status: 'Tersedia',
    isFavorite: false,
    price: 150000,
  },
];

const makeupList = [
  {
    id: 9,
    image: '/images/catalogs/makeup-1.jpg',
    name: 'Make Up Karakter Pria',
    status: 'Tersedia',
    isFavorite: false,
    price: 200000,
  },
  {
    id: 10,
    image: '/images/catalogs/makeup-2.JPG',
    name: 'Make Up Wisuda Wanita',
    status: 'Tersedia',
    isFavorite: false,
    price: 200000,
  },
  {
    id: 11,
    image: '/images/catalogs/makeup-3.JPG',
    name: 'Make Up Arabian Look',
    status: 'Tersedia',
    isFavorite: false,
    price: 125000,
  },
  {
    id: 12,
    image: '/images/catalogs/makeup-4.jpg',
    name: 'Make Up Wanita',
    status: 'Tersedia',
    isFavorite: false,
    price: 150000,
  },
];

const kostumList = [
  {
    id: 13,
    image: '/images/catalogs/kostum-1.jpg',
    name: 'Pakaian Karakter Profesi',
    status: 'Tersedia',
    isFavorite: false,
    price: 50000,
  },
  {
    id: 14,
    image: '/images/catalogs/kostum-2.jpg',
    name: 'Pakaiain Adat Anak',
    status: 'Tersedia',
    isFavorite: false,
    price: 70000,
  },
  {
    id: 15,
    image: '/images/catalogs/kostum-3.jpg',
    name: 'Pakaian Karakter Profesi',
    status: 'Tersedia',
    isFavorite: false,
    price: 50000,
  },
  {
    id: 16,
    image: '/images/catalogs/kostum-4.jpg',
    name: 'Pakaian Tari Anak',
    status: 'Tersedia',
    isFavorite: false,
    price: 80000,
  },
];

const Home = () => {
  return (
    <>
      <Navbar />

      <section className='bg-sky-950 mb-20'>
        <div className='max-w-6xl mx-auto px-10 lg:px-0'>
          <div className='md:flex justify-between min-h-[440px]'>
            <div className='sm:max-w-md flex flex-col justify-center py-10 md:py-0'>
              <h1 className='text-3xl tracking-tight font-semibold text-white mb-6'>
                Platform Sewa Busana & <br className='hidden md:block' /> Jasa
                Rias yang Mendukung
                <br className='hidden md:block' /> UMKM Lokal Kuningan
              </h1>
              <p className='leading-relaxed text-white mb-6'>
                Solusi lengkap untuk penampilan istimewa Anda dengan pilihan
                busana berkualitas dan layanan tata rias profesional dari mitra
                terpercaya.
              </p>
              <Button
                asChild
                className='w-fit bg-sky-800 hover:bg-sky-700 px-6'
              >
                <Link to='/product'>
                  Lihat Katalog <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className='flex items-end'>
              <img src='/images/home-image.png' alt='Hero Image' />
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-12 xl:px-0 mb-20'>
        <div className='text-center mb-10'>
          <h2 className='text-2xl font-bold'>Pilihan Kategori Populer</h2>
        </div>
        <div className='flex justify-between items-center gap-4 overflow-x-scroll'>
          {categories.map(({ path, id, image, name }) => (
            <Link to={path} key={id}>
              <div className='w-48 lg:w-64 xl:w-[275px] bg-sky-950'>
                <div className='h-48 lg:h-64 xl:h-[275px] overflow-hidden'>
                  <img
                    src={image}
                    alt={name}
                    className='aspect-square object-cover h-full w-full'
                  />
                </div>
                <h5 className='font-medium py-3 text-center uppercase text-white'>
                  {name}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-12 xl:px-0 mb-20'>
        <div className='flex justify-center items-center'>
          <Link to='/product'>
            <img
              src='/images/banners/banner-1.png'
              alt='banner'
              className='object-cover w-full h-full rounded-sm'
            />
          </Link>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-12 xl:px-0 mb-20'>
        <div className='text-center mb-10'>
          <span className='text-xs text-neutral-400 mb-2 uppercase'>
            Kebaya
          </span>
          <h2 className='text-2xl font-bold'>
            Rekomendasi Kebaya Terbaik untuk Penampilan Sempurna
          </h2>
        </div>
        <div className='flex justify-between items-center gap-2 overflow-x-scroll'>
          {kebayaList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              widthCard='w-full'
            />
          ))}
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-12 xl:px-0 mb-20'>
        <div className='flex justify-center items-center'>
          <Link to='/product'>
            <img
              src='/images/banners/banner-2.png'
              alt='banner'
              className='object-cover w-full h-full rounded-sm'
            />
          </Link>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-12 xl:px-0 mb-20'>
        <div className='text-center mb-10'>
          <span className='text-xs text-neutral-400 mb-2 uppercase'>Jas</span>
          <h2 className='text-2xl font-bold'>
            Rekomendasi Jas Pria untuk Tampilan Elegan di Setiap Acara
          </h2>
        </div>
        <div className='flex justify-between items-center gap-2 overflow-x-scroll'>
          {jasList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              widthCard='w-full'
            />
          ))}
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-12 xl:px-0 mb-20'>
        <div className='flex justify-center items-center'>
          <Link to='/product'>
            <img
              src='/images/banners/banner-3.png'
              alt='banner'
              className='object-cover w-full h-full rounded-sm'
            />
          </Link>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-12 xl:px-0 mb-20'>
        <div className='text-center mb-10'>
          <span className='text-xs text-neutral-400 mb-2 uppercase'>
            Make Up
          </span>
          <h2 className='text-2xl font-bold'>
            Rekomendasi Tata Rias Profesional untuk Tampil Memesona di Setiap
            Acara
          </h2>
        </div>
        <div className='flex justify-between items-center gap-2 overflow-x-scroll'>
          {makeupList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              widthCard='w-full'
            />
          ))}
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-12 xl:px-0 mb-20'>
        <div className='flex justify-center items-center'>
          <Link to='/product'>
            <img
              src='/images/banners/banner-5.png'
              alt='banner'
              className='object-cover w-full h-full rounded-sm'
            />
          </Link>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-12 xl:px-0 mb-20'>
        <div className='text-center mb-10'>
          <span className='text-xs text-neutral-400 mb-2 uppercase'>
            Kostum Anak
          </span>
          <h2 className='text-2xl font-bold'>
            Rekomendasi Kostum Anak Terbaik untuk Momen Spesial
          </h2>
        </div>
        <div className='flex justify-between items-center gap-2 overflow-x-scroll'>
          {kostumList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              widthCard='w-full'
            />
          ))}
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-12 xl:px-0 mb-20'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
          {servicesList.map((service, index) => (
            <div
              key={index}
              className='w-full xl:w-72 flex xl:block items-center gap-4'
            >
              <span className='h-14 w-14 shrink-0 flex justify-center items-center bg-sky-800 text-white rounded-full xl:mb-6'>
                {service.icon}
              </span>
              <div>
                <h2 className='font-semibold mb-3'>{service.title}</h2>
                <p className='text-sm text-neutral-700'>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
