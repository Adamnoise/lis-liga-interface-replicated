
import React, { useState } from 'react';
import { seasons } from '../data';
import { ArrowRight } from 'lucide-react';

const Archive: React.FC = () => {
  const [displayedSeasons, setDisplayedSeasons] = useState(seasons.slice(0, 15));
  
  const handleShowMore = () => {
    setDisplayedSeasons(seasons);
  };

  return (
    <div>
      <div className="bg-gray-700 text-white p-3 mb-2">
        <h2 className="text-center">archív</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Szezon</th>
              <th className="p-3 text-left">Győztes</th>
              <th className="p-3 text-left">Második hely</th>
              <th className="p-3 text-left">Harmadik hely</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {displayedSeasons.map((season) => (
              <tr key={season.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{season.name}</td>
                <td className="p-3">{season.winner || '-'}</td>
                <td className="p-3">{season.runnerUp || '-'}</td>
                <td className="p-3">{season.thirdPlace || '-'}</td>
                <td className="p-3 text-right">
                  <ArrowRight className="inline-block" size={18} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {displayedSeasons.length < seasons.length && (
        <div className="mt-4 text-center">
          <button 
            className="bg-gray-700 text-white px-4 py-2"
            onClick={handleShowMore}
          >
            Több mutatása
          </button>
        </div>
      )}
    </div>
  );
};

export default Archive;
