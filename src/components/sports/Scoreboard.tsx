
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ScoreboardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  matchTime: string;
  className?: string;
}

const Scoreboard = ({ 
  homeTeam, 
  awayTeam, 
  homeScore, 
  awayScore, 
  matchTime, 
  className 
}: ScoreboardProps) => {
  return (
    <Card className={cn("bg-gray-800 text-white", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <div className="text-center flex-1">
            <div className="text-2xl font-bold mb-2">{homeTeam}</div>
            <div className="text-4xl font-bold">{homeScore}</div>
          </div>
          <div className="text-center px-4">
            <div className="text-xl font-bold mb-2">VS</div>
            <div className="text-sm">{matchTime}</div>
          </div>
          <div className="text-center flex-1">
            <div className="text-2xl font-bold mb-2">{awayTeam}</div>
            <div className="text-4xl font-bold">{awayScore}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Scoreboard;
