import { Link } from 'react-router-dom';

interface Producer {
  id: string;
  name: string;
  image: string;
  location: string;
  description: string;
  rating: number;
}

interface ProducerCardProps {
  producer: Producer;
}

export default function ProducerCard({ producer }: ProducerCardProps) {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/producer/${producer.id}`}>
        <img 
          src={producer.image} 
          alt={producer.name}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/producer/${producer.id}`}>
          <h3 className="text-xl font-semibold text-gray-900 hover:text-green-600">
            {producer.name}
          </h3>
        </Link>
        <div className="flex items-center mt-1 mb-2">
          <span className="flex mr-2">{renderStars(producer.rating)}</span>
          <span className="text-sm text-gray-500">({producer.rating}/5)</span>
        </div>
        <p className="text-gray-600 text-sm mb-2">
          <span className="inline-block mr-2">📍</span>
          {producer.location}
        </p>
        <p className="text-gray-700 line-clamp-2 mb-4 text-sm">{producer.description}</p>
        <Link 
          to={`/producer/${producer.id}`}
          className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Ver Productos
        </Link>
      </div>
    </div>
  );
}