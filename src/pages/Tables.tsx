import React from 'react';
import { Link } from 'react-router-dom';
import { teamStats, matches } from '../data';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

const renderForm = (form: ('W' | 'D' | 'L')[]) => {
  return (
    <div className="flex space-x-1">
      {form.map((result, index) => (
        <div 
          key={index}
          className={`w-4 h-4 ${
            result === 'W' ? 'bg-green-500' : 
            result === 'D' ? 'bg-yellow-500' : 'bg-red-500'
          }`}
        ></div>
      ))}
    </div>
  );
};

const Tables: React.FC = () => {
  return (
    <div>
      {/* League Table */}
      <div className="mb-8">
        <div className="bg-gray-700 text-white p-2 mb-2">
          <h2 className="text-center">Liga Táblázat</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-center">Poz.</th>
                <th className="p-2"></th>
                <th className="p-2 text-left">Csapat</th>
                <th className="p-2 text-center">M</th>
                <th className="p-2 text-center">Gy</th>
                <th className="p-2 text-center">D</th>
                <th className="p-2 text-center">V</th>
                <th className="p-2 text-center">LG</th>
                <th className="p-2 text-center">KG</th>
                <th className="p-2 text-center">Gólk.</th>
                <th className="p-2 text-center">PTK</th>
                <th className="p-2 text-center">Forma</th>
              </tr>
            </thead>
            <tbody>
              {teamStats.map((stat) => (
                <tr key={stat.id} className="border-b hover:bg-gray-50">
                  <td className="p-2 text-center">{stat.position}</td>
                  <td className="p-2 text-center">
                    {stat.positionChange === 'up' && <ArrowUp size={16} className="text-green-500" />}
                    {stat.positionChange === 'down' && <ArrowDown size={16} className="text-red-500" />}
                    {stat.positionChange === 'same' && <Minus size={16} className="text-gray-400" />}
                  </td>
                  <td className="p-2 font-medium">
                    <Link to={`/csapatok/${stat.teamName}`} className="hover:underline">
                      {stat.teamName}
                    </Link>
                  </td>
                  <td className="p-2 text-center">{stat.played}</td>
                  <td className="p-2 text-center">{stat.won}</td>
                  <td className="p-2 text-center">{stat.drawn}</td>
                  <td className="p-2 text-center">{stat.lost}</td>
                  <td className="p-2 text-center">{stat.goalsFor}</td>
                  <td className="p-2 text-center">{stat.goalsAgainst}</td>
                  <td className="p-2 text-center">{stat.goalDifference}</td>
                  <td className="p-2 text-center">{stat.points}</td>
                  <td className="p-2 text-center">
                    {renderForm(stat.form)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="text-sm text-gray-600 mt-2 pl-2">
          <p>- pontok</p>
          <p>- gólkül.</p>
          <p>- lőtt gólok</p>
          <p>- hazai gól arány</p>
          <p>- idegenben lőtt gólok</p>
          <p>- idegenben lőtt gólok</p>
          <p>- mDS (csapatok, lőtt gólok)</p>
        </div>
      </div>
      
      {/* Form Table */}
      <div className="mb-8">
        <div className="bg-gray-700 text-white p-2 mb-2">
          <h2 className="text-center">Forma</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-center">Hely</th>
                <th className="p-2 text-left">Csapat</th>
                <th className="p-2 text-center">Mérkőzések száma</th>
                <th className="p-2 text-center">Előző 5</th>
                <th className="p-2 text-center">Pont</th>
              </tr>
            </thead>
            <tbody>
              {[...teamStats]
                .sort((a, b) => {
                  // Calculate form points
                  const getFormPoints = (form: ('W' | 'D' | 'L')[]) => 
                    form.reduce((acc, result) => {
                      if (result === 'W') return acc + 3;
                      if (result === 'D') return acc + 1;
                      return acc;
                    }, 0);
                  
                  return getFormPoints(b.form) - getFormPoints(a.form);
                })
                .map((stat, index) => (
                  <tr key={stat.id} className="border-b hover:bg-gray-50">
                    <td className="p-2 text-center">{index + 1}</td>
                    <td className="p-2 font-medium">
                      <Link to={`/csapatok/${stat.teamName}`} className="hover:underline">
                        {stat.teamName}
                      </Link>
                    </td>
                    <td className="p-2 text-center">5</td>
                    <td className="p-2 text-center">
                      {renderForm(stat.form)}
                    </td>
                    <td className="p-2 text-center">
                      {stat.form.reduce((acc, result) => {
                        if (result === 'W') return acc + 3;
                        if (result === 'D') return acc + 1;
                        return acc;
                      }, 0)}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Results per Match */}
      <div>
        <div className="bg-gray-700 text-white p-2 mb-2">
          <h2 className="text-center">Eredmények mérkőzésenként</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-center">Idő</th>
                <th className="p-2 text-right">Hazai</th>
                <th className="p-2 text-center">Eredmény</th>
                <th className="p-2 text-left">Vendég</th>
              </tr>
            </thead>
            <tbody>
              {[...matches]
                .filter(match => match.isPlayed)
                .sort((a, b) => {
                  // Sort by date, then time (newest first)
                  if (a.date !== b.date) return b.date.localeCompare(a.date);
                  return b.time.localeCompare(a.time);
                })
                .map((match) => (
                  <tr key={match.id} className="border-b hover:bg-gray-50">
                    <td className="p-2 text-center">{match.time}</td>
                    <td className="p-2 text-right font-medium">{match.homeTeam}</td>
                    <td className="p-2 text-center">{match.fulltimeScore}</td>
                    <td className="p-2 text-left font-medium">{match.awayTeam}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tables;
