import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Local Market</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-green-700 px-3 py-2 rounded-md">Home</Link>
            <Link to="/producers" className="hover:bg-green-700 px-3 py-2 rounded-md">Producers</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}