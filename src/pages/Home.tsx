import { Link } from 'react-router-dom'
import ImageCarousel from '../components/ImageCarousel'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Fresh Local Produce Direct from Farmers
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with local producers and get fresh, sustainable products
        </p>
        <Link
          to="/producers"
          className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Find Producers
        </Link>
      </section>
      
      <ImageCarousel />
      
      <section className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Fresh Products</h3>
          <p>Direct from local farms to your table</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Support Local</h3>
          <p>Help sustain local farming communities</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Sustainable</h3>
          <p>Environmentally conscious farming practices</p>
        </div>
      </section>
    </div>
  )
}