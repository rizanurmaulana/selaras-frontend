import { Heart } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product, widthCard }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={`${widthCard} p-2 bg-white relative`}>
      <button
        onClick={toggleFavorite}
        className='absolute top-4 right-4 p-2 rounded-full bg-white'
      >
        <Heart
          className={`w-5 h-5 transition-colors ${
            isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'
          }`}
        />
      </button>
      <Link to={`/product/${product.id}`}>
        <div className='h-52 md:h-60 xl:h-80 rounded-sm overflow-hidden mb-6'>
          <img
            src={product.image}
            alt={product.name}
            className='aspect-2/3 object-cover w-full h-full'
          />
        </div>
        <div>
          <h5 className='font-medium mb-3 truncate'>{product.name}</h5>
          <div className='flex items-center gap-4'>
            <span className='px-4 py-[2px] uppercase text-xs font-medium bg-white border rounded-full'>
              {product.status}
            </span>
            <p className='text-sm text-neutral-600'>
              {product.price.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
