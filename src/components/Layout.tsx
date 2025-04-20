
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Globe } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1] || 'overview';

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-700 text-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm mb-1">NYITÓLAP/LABDARÚGÁS/VIRTUÁLIS LABDARÚGÁS</div>
              <h1 className="text-xl font-semibold">Virtuális Labdarúgás Liga Mód Retail 20424</h1>
            </div>
            <div className="flex space-x-4">
              <button className="p-2 rounded hover:bg-gray-600">
                <Settings size={20} />
              </button>
              <button className="p-2 rounded hover:bg-gray-600">
                <Globe size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-600 text-white">
        <div className="container mx-auto flex overflow-x-auto">
          <Link 
            to="/" 
            className={`px-4 py-3 whitespace-nowrap ${currentPath === 'overview' ? 'bg-gray-700' : 'hover:bg-gray-500'}`}
          >
            Áttekintés
          </Link>
          <Link 
            to="/h2h" 
            className={`px-4 py-3 whitespace-nowrap ${currentPath === 'h2h' ? 'bg-gray-700' : 'hover:bg-gray-500'}`}
          >
            H-2-H
          </Link>
          <Link 
            to="/menetrend" 
            className={`px-4 py-3 whitespace-nowrap ${currentPath === 'menetrend' ? 'bg-gray-700' : 'hover:bg-gray-500'}`}
          >
            Menetrend
          </Link>
          <Link 
            to="/tabellak" 
            className={`px-4 py-3 whitespace-nowrap ${currentPath === 'tabellak' ? 'bg-gray-700' : 'hover:bg-gray-500'}`}
          >
            Tabellák
          </Link>
          <Link 
            to="/csapatok" 
            className={`px-4 py-3 whitespace-nowrap ${currentPath === 'csapatok' ? 'bg-gray-700' : 'hover:bg-gray-500'}`}
          >
            Csapatok
          </Link>
          <Link 
            to="/archiv" 
            className={`px-4 py-3 whitespace-nowrap ${currentPath === 'archiv' ? 'bg-gray-700' : 'hover:bg-gray-500'}`}
          >
            Archív
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
