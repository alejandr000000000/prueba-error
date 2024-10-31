import { useState } from 'react';
import ProducerCard from '../components/ProducerCard';
import SearchBar from '../components/SearchBar';

const mockProducers = [
  {
    id: '1',
    name: 'Granja Orgánica El Verde',
    image: '/images/farm1.jpg',
    location: 'San José, Costa Rica',
    description: 'Producimos vegetales y frutas orgánicas usando métodos sostenibles.',
    rating: 4.5
  },
  {
    id: '2',
    name: 'Productos Frescos María',
    image: '/images/farm2.jpg',
    location: 'Alajuela, Costa Rica',
    description: 'Especialistas en hierbas aromáticas y vegetales de temporada.',
    rating: 4.8
  },
];

export default function Producers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducers = mockProducers
    .filter(producer =>
      producer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      producer.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Productores Locales</h1>
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <SearchBar
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
            placeholder="Buscar por nombre o ubicación..."
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="name">Ordenar por Nombre</option>
            <option value="rating">Ordenar por Calificación</option>
          </select>
        </div>
      </div>

      {filteredProducers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No se encontraron productores que coincidan con tu búsqueda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducers.map(producer => (
            <ProducerCard key={producer.id} producer={producer} />
          ))}
        </div>
      )}
    </div>
  );
}