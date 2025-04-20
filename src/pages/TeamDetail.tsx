
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { matches, teamStats } from '../data';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

const TeamDetail: React.FC = () => {
  const { teamName } = useParams<{ teamName: string }>();
  
  const teamStat = teamStats.find(stat => stat.teamName === teamName);
  
  // Get recent matches for this team
  const recentMatches = matches
    .filter(match => match.homeTeam === teamName || match.awayTeam === teamName)
    .filter(match => match.isPlayed)
    .slice(0, 5);
  
  // Calculate form percentage based on recent results
  const formPercentage = teamStat 
    ? Math.round((teamStat.form.filter(result => result === 'W').length / teamStat.form.length) * 100) 
    : 0;
  
  // Mock values for the statistics that aren't provided in the data
  const winPercentage = 40.77;
  const drawPercentage = 15.38;
  const lossPercentage = 43.85;
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{teamName}</h2>
      
      {/* Summary Stats Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded">
          <div className="text-center text-xl">{teamStat?.won || 0}</div>
          <div className="text-center text-sm text-gray-600">Wins</div>
        </div>
        
        <div className="bg-white p-4 shadow rounded">
          <div className="text-center text-xl">{teamStat?.played || 0}</div>
          <div className="text-center text-sm text-gray-600">JÁTSZOTT</div>
        </div>
        
        <div className="bg-white p-4 shadow rounded">
          <div className="text-center text-xl">{teamStat?.goalDifference || 0}</div>
          <div className="text-center text-sm text-gray-600">Gólkül.</div>
        </div>
        
        <div className="bg-white p-4 shadow rounded">
          <div className="text-center text-xl">21</div>
          <div className="text-center text-sm text-gray-600">???</div>
        </div>
        
        <div className="bg-white p-4 shadow rounded">
          <div className="text-center text-xl">{formPercentage}%</div>
          <div className="text-center text-sm text-gray-600">FORMA</div>
        </div>
        
        <div className="bg-white p-4 shadow rounded">
          <div className="text-center text-xl">
            {teamStat ? (teamStat.goalsFor / teamStat.played).toFixed(2) : "0.00"}
          </div>
          <div className="text-center text-sm text-gray-600">Gólátlag</div>
        </div>
      </div>
      
      {/* Recent Matches */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Legutóbbi mérkőzések</h3>
        <div className="bg-white shadow">
          {recentMatches.map((match, index) => (
            <div key={index} className="p-3 border-b flex justify-between">
              <div>
                {match.time} {match.homeTeam === teamName ? match.awayTeam : match.homeTeam}
              </div>
              <div>
                {match.fulltimeScore}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Overall Results */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Összesített eredmény</h3>
        <div className="bg-white p-4 shadow">
          <div className="flex mb-2">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-green-500 h-4 rounded-full" 
                style={{ width: `${winPercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="text-sm">GYŐZELEM {winPercentage}%</div>
          
          <div className="flex mb-2 mt-3">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-yellow-500 h-4 rounded-full" 
                style={{ width: `${drawPercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="text-sm">DÖNTETLEN {drawPercentage}%</div>
          
          <div className="flex mb-2 mt-3">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-red-500 h-4 rounded-full" 
                style={{ width: `${lossPercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="text-sm">VERESÉG {lossPercentage}%</div>
        </div>
      </div>
      
      {/* League Table */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Virtuális Labdarúgás Liga Mód Retail</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Poz.</th>
                <th className="p-2"></th>
                <th className="p-2 text-left">Csapat</th>
                <th className="p-2">M</th>
                <th className="p-2">Gy</th>
                <th className="p-2">D</th>
                <th className="p-2">V</th>
                <th className="p-2">LG</th>
                <th className="p-2">KG</th>
                <th className="p-2">Gólk.</th>
                <th className="p-2">PTK</th>
                <th className="p-2">Forma</th>
              </tr>
            </thead>
            <tbody>
              {teamStats.slice(0, 5).map((stat) => (
                <tr 
                  key={stat.id} 
                  className={`border-b ${stat.teamName === teamName ? 'bg-blue-100' : ''}`}
                >
                  <td className="p-2">{stat.position}</td>
                  <td className="p-2">
                    {stat.positionChange === 'up' && <ArrowUp size={16} className="text-green-500" />}
                    {stat.positionChange === 'down' && <ArrowDown size={16} className="text-red-500" />}
                    {stat.positionChange === 'same' && <Minus size={16} className="text-gray-400" />}
                  </td>
                  <td className="p-2 font-medium">
                    <Link to={`/csapatok/${stat.teamName}`} className="hover:underline">
                      {stat.teamName}
                    </Link>
                  </td>
                  <td className="p-2">{stat.played}</td>
                  <td className="p-2">{stat.won}</td>
                  <td className="p-2">{stat.drawn}</td>
                  <td className="p-2">{stat.lost}</td>
                  <td className="p-2">{stat.goalsFor}</td>
                  <td className="p-2">{stat.goalsAgainst}</td>
                  <td className="p-2">{stat.goalDifference}</td>
                  <td className="p-2">{stat.points}</td>
                  <td className="p-2">
                    <div className="flex space-x-1">
                      {stat.form.map((result, index) => (
                        <div 
                          key={index}
                          className={`w-4 h-4 ${
                            result === 'W' ? 'bg-green-500' : 
                            result === 'D' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-right">
          <Link to="/tabellak" className="text-blue-600 hover:underline">Teljes tabella mutatása</Link>
        </div>
      </div>
      
      {/* Match Probabilities */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Feltérképzett mérkőzések</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Rendes játékidő</th>
                <th className="p-2">1. idő</th>
                <th className="p-2">2. félidő</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Hazai győzelem</td>
                <td className="p-2">40%</td>
                <td className="p-2">60%</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Döntetlen</td>
                <td className="p-2">20%</td>
                <td className="p-2">15%</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Vendég győzelem</td>
                <td className="p-2">40%</td>
                <td className="p-2">25%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Goal Statistics */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Gólátlag</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Lőtt gólátlag</th>
                <th className="p-2">Kapott gól rékült mérkőzések</th>
                <th className="p-2">Legalább 1 gól esett</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">1.4</td>
                <td className="p-2">3 mérkőzés, 60%</td>
                <td className="p-2">4 mérkőzés, 80%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
