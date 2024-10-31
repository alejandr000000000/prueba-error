import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const mockProducts = [
  {
    id: '1',
    name: 'Tomates Orgánicos',
    image: '/images/tomatoes.jpg',
    price: 2.99,
    unit: 'lb',
    producer: 'Granja Orgánica El Verde',
  },
  {
    id: '2',
    name: 'Lechugas Frescas',
    image: '/images/lettuce.jpg',
    price: 1.99,
    unit: 'unidad',
    producer: 'Granja Orgánica El Verde',
  },
];

export default function ProducerDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Granja Orgánica El Verde</h1>
        <p className="text-gray-600 mb-4">San José, Costa Rica</p>
        <p className="text-gray-700">
          Producimos vegetales y frutas orgánicas usando métodos sostenibles.
          Nuestra granja familiar ha estado en operación por más de 20 años.
        </p>
      </div>

      <div className="mb-8 border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('products')}
            className={`pb-4 px-1 ${
              activeTab === 'products'
                ? 'border-b-2 border-green-600 text-green-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Productos
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-4 px-1 ${
              activeTab === 'about'
                ? 'border-b-2 border-green-600 text-green-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Sobre Nosotros
          </button>
        </nav>
      </div>

      {activeTab === 'products' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
          <p className="text-gray-700 mb-4">
            Comenzamos como una pequeña granja familiar y hemos crecido manteniendo
            nuestros valores de agricultura sostenible y productos de calidad.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Métodos de Cultivo</h3>
          <p className="text-gray-700">
            Utilizamos técnicas orgánicas y sostenibles para producir alimentos
            saludables y respetuosos con el medio ambiente.
          </p>
        </div>
      )}
    </div>
  );
}