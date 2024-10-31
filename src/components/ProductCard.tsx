import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  unit: string;
  producer: string;
  producerId: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/producer/${product.producerId}`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/producer/${product.producerId}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-green-600">{product.name}</h3>
        </Link>
        <p className="text-gray-600 text-sm">{product.producer}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-green-600 font-bold">
            ${product.price.toFixed(2)}/{product.unit}
          </span>
          <button 
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            onClick={() => {/* TODO: Add to cart functionality */}}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}