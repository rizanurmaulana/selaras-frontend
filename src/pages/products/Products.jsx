import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Checkbox } from '@/components/ui/checkbox';
import ProductCard from '@/components/common/ProductCard';

const productList = [
  {
    id: 1,
    name: 'Jas Anak Laki Hitam',
    category: 'Jas',
    image: '/images/catalogs/jas-3.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 310000,
  },
  {
    id: 2,
    name: 'Kebaya Brokat Modern',
    category: 'Kebaya',
    image: '/images/catalogs/kebaya-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 200000,
  },
  {
    id: 3,
    name: 'Make Up Karakter Pria',
    category: 'Make Up',
    image: '/images/catalogs/makeup-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 280000,
  },
  {
    id: 4,
    name: 'Pakaian Adat Betawi Anak',
    category: 'Pakaian Adat',
    image: '/images/catalogs/kostum-3.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 345000,
  },
  {
    id: 5,
    name: 'Kostum Chef Anak',
    category: 'Kostum',
    image: '/images/catalogs/kostum-2.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 300000,
  },
  {
    id: 6,
    name: 'Make Up Bold Glam',
    category: 'Make Up',
    image: '/images/catalogs/makeup-2.JPG',
    status: 'Tersedia',
    isFavorite: false,
    price: 295000,
  },
  {
    id: 7,
    name: 'Jas Pria Formal Abu',
    category: 'Jas',
    image: '/images/catalogs/jas-2.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 280000,
  },
  {
    id: 8,
    name: 'Pakaian Adat Toraja Anak',
    category: 'Pakaian Adat',
    image: '/images/catalogs/kostum-2.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 310000,
  },
  {
    id: 9,
    name: 'Kebaya Lurik Batik',
    category: 'Kebaya',
    image: '/images/catalogs/kebaya-2.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 240000,
  },
  {
    id: 10,
    name: 'Make Up Natural Dewy',
    category: 'Make Up',
    image: '/images/catalogs/makeup-3.JPG',
    status: 'Tersedia',
    isFavorite: false,
    price: 285000,
  },
  {
    id: 11,
    name: 'Kostum Perawat Anak',
    category: 'Kostum',
    image: '/images/catalogs/kostum-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 295000,
  },
  {
    id: 12,
    name: 'Make Up Arabian Look',
    category: 'Make Up',
    image: '/images/catalogs/makeup-3.JPG',
    status: 'Tersedia',
    isFavorite: false,
    price: 300000,
  },
  {
    id: 13,
    name: 'Kostum Pahlawan Anak',
    category: 'Kostum',
    image: '/images/catalogs/kostum-3.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 275000,
  },
  {
    id: 14,
    name: 'Pakaian Adat Bugis Anak',
    category: 'Pakaian Adat',
    image: '/images/catalogs/kostum-2.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 335000,
  },
  {
    id: 15,
    name: 'Jas Tuxedo Pria',
    category: 'Jas',
    image: '/images/catalogs/jas-2.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 330000,
  },
  {
    id: 16,
    name: 'Kebaya Wisuda Putih',
    category: 'Kebaya',
    image: '/images/catalogs/kebaya-2.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 215000,
  },
  {
    id: 17,
    name: 'Kebaya Tradisional Jawa',
    category: 'Kebaya',
    image: '/images/catalogs/kebaya-3.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 225000,
  },
  {
    id: 18,
    name: 'Pakaian Adat Aceh Anak',
    category: 'Pakaian Adat',
    image: '/images/catalogs/kostum-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 355000,
  },
  {
    id: 19,
    name: 'Jas Slim Fit Abu',
    category: 'Jas',
    image: '/images/catalogs/jas-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 320000,
  },
  {
    id: 20,
    name: 'Make Up Wisuda Wanita',
    category: 'Make Up',
    image: '/images/catalogs/makeup-2.JPG',
    status: 'Tersedia',
    isFavorite: false,
    price: 260000,
  },
  {
    id: 21,
    name: 'Pakaian Adat Kalimantan Anak',
    category: 'Pakaian Adat',
    image: '/images/catalogs/kostum-3.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 315000,
  },
  {
    id: 22,
    name: 'Kostum Pemadam Anak',
    category: 'Kostum',
    image: '/images/catalogs/kostum-3.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 285000,
  },
  {
    id: 23,
    name: 'Kebaya Modern Elegan',
    category: 'Kebaya',
    image: '/images/catalogs/kebaya-2.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 245000,
  },
  {
    id: 24,
    name: 'Kostum Polisi Anak',
    category: 'Kostum',
    image: '/images/catalogs/kostum-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 290000,
  },
  {
    id: 25,
    name: 'Jas Pesta Elegan',
    category: 'Jas',
    image: '/images/catalogs/jas-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 300000,
  },
  {
    id: 26,
    name: 'Pakaian Adat Riau Anak',
    category: 'Pakaian Adat',
    image: '/images/catalogs/kostum-2.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 325000,
  },
  {
    id: 27,
    name: 'Kostum Polisi Wanita Anak',
    category: 'Kostum',
    image: '/images/catalogs/kostum-2.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 305000,
  },
  {
    id: 28,
    name: 'Make Up Pesta Natural',
    category: 'Make Up',
    image: '/images/catalogs/makeup-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 290000,
  },
  {
    id: 29,
    name: 'Pakaian Adat Papua Anak',
    category: 'Pakaian Adat',
    image: '/images/catalogs/kostum-3.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 325000,
  },
  {
    id: 30,
    name: 'Kostum Astronot Anak',
    category: 'Kostum',
    image: '/images/catalogs/kostum-3.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 310000,
  },
  {
    id: 31,
    name: 'Kebaya Brokat Lengan Pendek',
    category: 'Kebaya',
    image: '/images/catalogs/kebaya-3.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 230000,
  },
  {
    id: 32,
    name: 'Pakaian Adat Jawa Anak',
    category: 'Pakaian Adat',
    image: '/images/catalogs/kostum-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 350000,
  },
  {
    id: 33,
    name: 'Make Up Korea Look',
    category: 'Make Up',
    image: '/images/catalogs/makeup-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 275000,
  },
  {
    id: 34,
    name: 'Jas Formal Kantoran',
    category: 'Jas',
    image: '/images/catalogs/jas-2.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 310000,
  },
  {
    id: 35,
    name: 'Jas Anak Putih',
    category: 'Jas',
    image: '/images/catalogs/jas-3.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 260000,
  },
  {
    id: 36,
    name: 'Kostum Dokter Anak',
    category: 'Kostum',
    image: '/images/catalogs/kostum-2.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 275000,
  },
  {
    id: 37,
    name: 'Pakaian Adat Dayak Anak',
    category: 'Pakaian Adat',
    image: '/images/catalogs/kostum-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 320000,
  },
  {
    id: 38,
    name: 'Make Up Pernikahan',
    category: 'Make Up',
    image: '/images/catalogs/makeup-2.JPG',
    status: 'Tersedia',
    isFavorite: false,
    price: 310000,
  },
  {
    id: 39,
    name: 'Pakaian Adat Sunda Anak',
    category: 'Pakaian Adat',
    image: '/images/catalogs/kostum-3.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 330000,
  },
  {
    id: 40,
    name: 'Kebaya Wisuda Hijab',
    category: 'Kebaya',
    image: '/images/catalogs/kebaya-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 255000,
  },
  {
    id: 41,
    name: 'Pakaian Adat Bali Anak',
    category: 'Pakaian Adat',
    image: '/images/catalogs/kostum-2.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 340000,
  },
  {
    id: 42,
    name: 'Kebaya Bali Premium',
    category: 'Kebaya',
    image: '/images/catalogs/kebaya-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 250000,
  },
  {
    id: 43,
    name: 'Make Up Wisuda Soft',
    category: 'Make Up',
    image: '/images/catalogs/makeup-3.JPG',
    status: 'Tersedia',
    isFavorite: false,
    price: 320000,
  },
  {
    id: 44,
    name: 'Kebaya Encim Betawi',
    category: 'Kebaya',
    image: '/images/catalogs/kebaya-3.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 235000,
  },
  {
    id: 45,
    name: 'Jas Slim Fit Hitam',
    category: 'Jas',
    image: '/images/catalogs/jas-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 270000,
  },
  {
    id: 46,
    name: 'Kostum Pilot Anak',
    category: 'Kostum',
    image: '/images/catalogs/kostum-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 315000,
  },
  {
    id: 47,
    name: 'Pakaian Adat Batak Anak',
    category: 'Pakaian Adat',
    image: '/images/catalogs/kostum-1.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 360000,
  },
  {
    id: 48,
    name: 'Kebaya Wisuda Soft Pink',
    category: 'Kebaya',
    image: '/images/catalogs/kebaya-2.jpg',
    status: 'Tersedia',
    isFavorite: false,
    price: 248000,
  },
];

const ITEMS_PER_PAGE = 12;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = Array.from(new Set(productList.map((p) => p.category)));

  const handleCategoryChange = (category) => {
    setCurrentPage(1); // reset to first page
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const filteredProducts =
    selectedCategories.length === 0
      ? productList
      : productList.filter((product) =>
          selectedCategories.includes(product.category),
        );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Navbar />
      <section className='max-w-6xl mx-auto my-8'>
        <div className='flex flex-wrap'>
          {/* Sidebar */}
          <div className='w-1/5'>
            <div className='border rounded-md py-4 px-3'>
              <h4 className='text-sm font-medium mb-4'>Kategori</h4>
              <div className='flex flex-col divide-y'>
                {categories.map((category) => (
                  <div
                    key={category}
                    className='flex items-center py-3 gap-x-2'
                  >
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryChange(category)}
                      className='border-neutral-300'
                    />
                    <label
                      htmlFor={category}
                      className='text-sm text-neutral-600 leading-none'
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className='w-4/5'>
            <div className='grid grid-cols-3 gap-x-2 gap-y-8'>
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  widthCard='w-full'
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className='mt-16 flex justify-center'>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => goToPage(currentPage - 1)}
                        className={
                          currentPage === 1
                            ? 'pointer-events-none opacity-50'
                            : 'cursor-pointer'
                        }
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          isActive={currentPage === i + 1}
                          onClick={() => goToPage(i + 1)}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => goToPage(currentPage + 1)}
                        className={
                          currentPage === totalPages
                            ? 'pointer-events-none opacity-50'
                            : 'cursor-pointer'
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
