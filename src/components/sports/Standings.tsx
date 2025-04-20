
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface TeamStats {
  id: number;  // Changed from string to number
  position: number;
  teamName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

interface StandingsProps {
  stats: TeamStats[];
  className?: string;
}

const Standings = ({ stats, className }: StandingsProps) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>Liga Táblázat</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Poz.</TableHead>
              <TableHead>Csapat</TableHead>
              <TableHead className="text-center">M</TableHead>
              <TableHead className="text-center">GY</TableHead>
              <TableHead className="text-center">D</TableHead>
              <TableHead className="text-center">V</TableHead>
              <TableHead className="text-center">P</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stats.map((team) => (
              <TableRow key={team.id}>
                <TableCell className="font-medium">{team.position}</TableCell>
                <TableCell>
                  <Link to={`/csapatok/${team.teamName}`} className="hover:underline">
                    {team.teamName}
                  </Link>
                </TableCell>
                <TableCell className="text-center">{team.played}</TableCell>
                <TableCell className="text-center">{team.won}</TableCell>
                <TableCell className="text-center">{team.drawn}</TableCell>
                <TableCell className="text-center">{team.lost}</TableCell>
                <TableCell className="text-center font-bold">{team.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Standings;
