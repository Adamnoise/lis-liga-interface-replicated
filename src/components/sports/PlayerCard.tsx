
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface PlayerCardProps {
  name: string;
  position: string;
  team: string;
  imageUrl: string;
  stats: {
    matches: number;
    goals: number;
    assists: number;
  };
}

const PlayerCard = ({ name, position, team, imageUrl, stats }: PlayerCardProps) => {
  return (
    <Card className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-xl font-bold">{name}</h3>
          <p className="text-gray-300">{position}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-600 mb-4">{team}</p>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">{stats.matches}</p>
            <p className="text-sm text-gray-600">Mérkőzések</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{stats.goals}</p>
            <p className="text-sm text-gray-600">Gólok</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{stats.assists}</p>
            <p className="text-sm text-gray-600">Gólpasszok</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
