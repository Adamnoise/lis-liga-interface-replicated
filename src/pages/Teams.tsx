
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { teams } from '../data';
import { Search } from 'lucide-react';

const Teams: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Keresés"
            className="w-full p-2 border border-gray-300 pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>
      
      <div className="bg-white">
        {filteredTeams.map((team) => (
          <div 
            key={team.id} 
            className="p-3 border-b hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate(`/csapatok/${team.name}`)}
          >
            {team.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
