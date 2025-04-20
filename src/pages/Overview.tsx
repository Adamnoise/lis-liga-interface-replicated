
import React from 'react';
import { Link } from 'react-router-dom';
import { matches, teamStats } from '../data';

const Overview: React.FC = () => {
  // Get the league leader (team at position 1)
  const leagueLeader = teamStats.find(stat => stat.position === 1);
  
  // Get upcoming matches
  const upcomingMatches = [...matches]
    .filter(match => !match.isPlayed)
    .sort((a, b) => {
      if (a.date !== b.date) return a.date.localeCompare(b.date);
      return a.time.localeCompare(b.time);
    })
    .slice(0, 5);
  
  // Get recent results
  const recentMatches = [...matches]
    .filter(match => match.isPlayed)
    .sort((a, b) => {
      if (a.date !== b.date) return b.date.localeCompare(a.date);
      return b.time.localeCompare(a.time);
    })
    .slice(0, 5);
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* League Leader */}
        <div>
          <h2 className="text-xl font-bold mb-3">Liga Vezető</h2>
          {leagueLeader && (
            <div className="bg-white p-4 shadow-md">
              <div className="flex items-center justify-between">
                <Link to={`/csapatok/${leagueLeader.teamName}`} className="text-xl font-bold hover:underline">
                  {leagueLeader.teamName}
                </Link>
                <div className="text-2xl font-bold">{leagueLeader.points} pont</div>
              </div>
              
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="font-bold">{leagueLeader.played}</div>
                  <div className="text-sm text-gray-600">Játszott</div>
                </div>
                <div>
                  <div className="font-bold">{leagueLeader.won}</div>
                  <div className="text-sm text-gray-600">Győzelem</div>
                </div>
                <div>
                  <div className="font-bold">{leagueLeader.goalDifference}</div>
                  <div className="text-sm text-gray-600">Gólkül.</div>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="text-sm font-medium">Forma</div>
                <div className="flex mt-1 space-x-1">
                  {leagueLeader.form.map((result, index) => (
                    <div 
                      key={index}
                      className={`w-5 h-5 flex items-center justify-center text-xs text-white font-bold ${
                        result === 'W' ? 'bg-green-500' : 
                        result === 'D' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                    >
                      {result === 'W' ? 'W' : result === 'D' ? 'D' : 'L'}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Next Round */}
        <div>
          <h2 className="text-xl font-bold mb-3">Következő Forduló</h2>
          <div className="bg-white shadow-md">
            <div className="bg-gray-800 text-white p-2">
              <div className="text-center">Forduló 6</div>
              <div className="text-center text-sm">20/04/25</div>
            </div>
            
            {upcomingMatches.map((match, index) => (
              <div key={index} className="border-b p-3 flex justify-between items-center">
                <div className="flex-1 text-right pr-2 font-medium">{match.homeTeam}</div>
                <div className="px-2 text-gray-500">vs</div>
                <div className="flex-1 pl-2 font-medium">{match.awayTeam}</div>
                <div className="ml-4 text-sm text-gray-500">{match.time}</div>
              </div>
            ))}
            
            <div className="p-2 text-center">
              <Link to="/menetrend" className="text-blue-600 hover:underline text-sm">
                Teljes menetrend
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Results */}
        <div>
          <h2 className="text-xl font-bold mb-3">Legutóbbi Eredmények</h2>
          <div className="bg-white shadow-md">
            {recentMatches.map((match, index) => (
              <div key={index} className="border-b p-3 flex justify-between items-center">
                <div className="flex-1 text-right pr-2 font-medium">{match.homeTeam}</div>
                <div className="px-3 font-bold">{match.fulltimeScore}</div>
                <div className="flex-1 pl-2 font-medium">{match.awayTeam}</div>
                <div className="ml-4 text-sm text-gray-500">{match.date}</div>
              </div>
            ))}
            
            <div className="p-2 text-center">
              <Link to="/tabellak" className="text-blue-600 hover:underline text-sm">
                Összes eredmény
              </Link>
            </div>
          </div>
        </div>
        
        {/* Top Teams */}
        <div>
          <h2 className="text-xl font-bold mb-3">Top 5 Csapat</h2>
          <div className="bg-white shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Poz.</th>
                    <th className="p-2 text-left">Csapat</th>
                    <th className="p-2">M</th>
                    <th className="p-2">GY</th>
                    <th className="p-2">D</th>
                    <th className="p-2">V</th>
                    <th className="p-2">P</th>
                  </tr>
                </thead>
                <tbody>
                  {teamStats.slice(0, 5).map((team) => (
                    <tr key={team.id} className="border-b hover:bg-gray-50">
                      <td className="p-2 text-center">{team.position}</td>
                      <td className="p-2 font-medium">
                        <Link to={`/csapatok/${team.teamName}`} className="hover:underline">
                          {team.teamName}
                        </Link>
                      </td>
                      <td className="p-2 text-center">{team.played}</td>
                      <td className="p-2 text-center">{team.won}</td>
                      <td className="p-2 text-center">{team.drawn}</td>
                      <td className="p-2 text-center">{team.lost}</td>
                      <td className="p-2 text-center font-bold">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-2 text-center">
              <Link to="/tabellak" className="text-blue-600 hover:underline text-sm">
                Teljes tabella
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
