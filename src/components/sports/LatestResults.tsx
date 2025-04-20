
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  date: string;
  time: string;
}

interface LatestResultsProps {
  matches: Match[];
  className?: string;
}

const LatestResults = ({ matches, className }: LatestResultsProps) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>Legutóbbi Eredmények</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {matches.map((match) => (
            <div 
              key={match.id} 
              className="p-3 bg-gray-50 rounded-lg flex items-center justify-between"
            >
              <div className="flex-1 text-right pr-4 font-medium">{match.homeTeam}</div>
              <div className="px-4 font-bold">
                {match.homeScore} - {match.awayScore}
              </div>
              <div className="flex-1 pl-4 font-medium">{match.awayTeam}</div>
              <div className="text-sm text-gray-500 ml-4">
                {match.date} {match.time}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LatestResults;
