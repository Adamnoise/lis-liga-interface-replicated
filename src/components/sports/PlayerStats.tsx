
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface PlayerStat {
  id: string | number;  // Updated to accept both string and number
  name: string;
  team: string;
  matches: number;
  goals: number;
  assists: number;
  rating: number;
}

interface PlayerStatsProps {
  stats: PlayerStat[];
  className?: string;
}

const PlayerStats = ({ stats, className }: PlayerStatsProps) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>Játékos Statisztikák</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Játékos</TableHead>
              <TableHead>Csapat</TableHead>
              <TableHead className="text-center">M</TableHead>
              <TableHead className="text-center">G</TableHead>
              <TableHead className="text-center">GP</TableHead>
              <TableHead className="text-right">Értékelés</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stats.map((player) => (
              <TableRow key={player.id.toString()}>
                <TableCell className="font-medium">{player.name}</TableCell>
                <TableCell>{player.team}</TableCell>
                <TableCell className="text-center">{player.matches}</TableCell>
                <TableCell className="text-center">{player.goals}</TableCell>
                <TableCell className="text-center">{player.assists}</TableCell>
                <TableCell className="text-right">{player.rating.toFixed(1)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PlayerStats;
