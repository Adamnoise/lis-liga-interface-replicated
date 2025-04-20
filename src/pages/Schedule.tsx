
import React, { useState } from 'react';
import { matches } from '../data';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Schedule: React.FC = () => {
  const [currentRound, setCurrentRound] = useState(6);
  const totalRounds = 20;
  
  const filteredMatches = matches.filter(match => match.round === currentRound);
  
  const handlePrevRound = () => {
    if (currentRound > 1) {
      setCurrentRound(currentRound - 1);
    }
  };
  
  const handleNextRound = () => {
    if (currentRound < totalRounds) {
      setCurrentRound(currentRound + 1);
    }
  };
  
  return (
    <div>
      <div className="bg-gray-700 text-white p-3 mb-4 text-center">
        <h2 className="text-xl">Virtuális Labdarúgás Liga Mód Retail 20424</h2>
      </div>

      {/* Round Selector */}
      <div className="flex flex-col items-center mb-6">
        <h3 className="text-lg mb-3">Fordulók</h3>
        <div className="flex items-center">
          <button 
            onClick={handlePrevRound} 
            disabled={currentRound === 1}
            className="px-2 disabled:opacity-50"
          >
            <ArrowLeft size={20} />
          </button>
          
          <div className="flex space-x-2 overflow-x-auto py-2">
            {Array.from({ length: totalRounds }, (_, i) => i + 1).map((round) => (
              <button
                key={round}
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${currentRound === round ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setCurrentRound(round)}
              >
                {round}
              </button>
            ))}
          </div>
          
          <button 
            onClick={handleNextRound} 
            disabled={currentRound === totalRounds}
            className="px-2 disabled:opacity-50"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-2">
          <a href="#" className="text-blue-600 hover:underline">Teljes Menetrend</a>
        </div>
      </div>

      {/* Match List */}
      <div className="bg-gray-800 text-white p-2">
        <h3 className="text-center">Forduló {currentRound}</h3>
        <p className="text-center text-sm">20/04/25</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full bg-white">
          <thead>
            <tr>
              <th className="p-2 border-r">Idő</th>
              <th className="p-2 text-right border-r w-1/3"></th>
              <th className="p-2 text-center border-r"></th>
              <th className="p-2 text-left border-r w-1/3"></th>
              <th className="p-2 text-center border-r">Félidő</th>
              <th className="p-2 text-center">RJ</th>
            </tr>
          </thead>
          <tbody>
            {filteredMatches.map((match) => (
              <tr key={match.id} className="border-b">
                <td className="p-2 border-r">{match.time}</td>
                <td className="p-2 text-right border-r">{match.homeTeam}</td>
                <td className="p-2 text-center border-r">-</td>
                <td className="p-2 text-left border-r">{match.awayTeam}</td>
                <td className="p-2 text-center border-r">{match.halftimeScore || '-'}</td>
                <td className="p-2 text-center">{match.fulltimeScore || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
