
import React, { useState } from 'react';
import { teams, matches } from '../data';

const HeadToHead: React.FC = () => {
  const [team1, setTeam1] = useState<string>('');
  const [team2, setTeam2] = useState<string>('');
  
  // Filter matches between the selected teams
  const h2hMatches = matches.filter(match => 
    (match.homeTeam === team1 && match.awayTeam === team2) ||
    (match.homeTeam === team2 && match.awayTeam === team1)
  );
  
  // Calculate statistics
  const team1Wins = h2hMatches.filter(match => {
    if (!match.fulltimeScore) return false;
    const [homeGoals, awayGoals] = match.fulltimeScore.split(':').map(Number);
    return (match.homeTeam === team1 && homeGoals > awayGoals) ||
           (match.awayTeam === team1 && awayGoals > homeGoals);
  }).length;
  
  const team2Wins = h2hMatches.filter(match => {
    if (!match.fulltimeScore) return false;
    const [homeGoals, awayGoals] = match.fulltimeScore.split(':').map(Number);
    return (match.homeTeam === team2 && homeGoals > awayGoals) ||
           (match.awayTeam === team2 && awayGoals > homeGoals);
  }).length;
  
  const draws = h2hMatches.filter(match => {
    if (!match.fulltimeScore) return false;
    const [homeGoals, awayGoals] = match.fulltimeScore.split(':').map(Number);
    return homeGoals === awayGoals;
  }).length;
  
  return (
    <div>
      <div className="bg-gray-700 text-white p-3 mb-4 text-center">
        <h2 className="text-xl">Csapatok Összehasonlítása (H-2-H)</h2>
      </div>
      
      <div className="bg-white p-4 mb-6 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Csapat 1
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={team1}
              onChange={(e) => setTeam1(e.target.value)}
            >
              <option value="">Válassz csapatot</option>
              {teams.map((team) => (
                <option key={`team1-${team.id}`} value={team.name}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Csapat 2
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={team2}
              onChange={(e) => setTeam2(e.target.value)}
            >
              <option value="">Válassz csapatot</option>
              {teams.map((team) => (
                <option key={`team2-${team.id}`} value={team.name}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {team1 && team2 ? (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Összehasonlítás
          </button>
        ) : (
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded w-full cursor-not-allowed"
            disabled
          >
            Válassz két csapatot
          </button>
        )}
      </div>
      
      {team1 && team2 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 shadow-md text-center">
              <div className="text-lg font-bold mb-1">{team1}</div>
              <div className="text-3xl font-bold">{team1Wins}</div>
              <div className="text-sm text-gray-600">Győzelem</div>
            </div>
            
            <div className="bg-white p-4 shadow-md text-center">
              <div className="text-lg font-bold mb-1">Döntetlen</div>
              <div className="text-3xl font-bold">{draws}</div>
              <div className="text-sm text-gray-600">Mérkőzés</div>
            </div>
            
            <div className="bg-white p-4 shadow-md text-center">
              <div className="text-lg font-bold mb-1">{team2}</div>
              <div className="text-3xl font-bold">{team2Wins}</div>
              <div className="text-sm text-gray-600">Győzelem</div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3">Korábbi Mérkőzések</h3>
          
          {h2hMatches.length > 0 ? (
            <div className="bg-white shadow-md overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Dátum</th>
                    <th className="p-2 text-right">Hazai</th>
                    <th className="p-2 text-center">Eredmény</th>
                    <th className="p-2 text-left">Vendég</th>
                  </tr>
                </thead>
                <tbody>
                  {h2hMatches
                    .filter(match => match.isPlayed)
                    .sort((a, b) => {
                      if (a.date !== b.date) return b.date.localeCompare(a.date);
                      return b.time.localeCompare(a.time);
                    })
                    .map((match, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2">{match.date}</td>
                        <td className="p-2 text-right font-medium">
                          {match.homeTeam}
                        </td>
                        <td className="p-2 text-center font-bold">
                          {match.fulltimeScore}
                        </td>
                        <td className="p-2 text-left font-medium">
                          {match.awayTeam}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              
              {h2hMatches.filter(match => match.isPlayed).length === 0 && (
                <div className="p-4 text-center text-gray-500">
                  Nincs korábbi mérkőzés a két csapat között
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white p-4 text-center text-gray-500 shadow-md">
              Nincs korábbi mérkőzés a két csapat között
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HeadToHead;
