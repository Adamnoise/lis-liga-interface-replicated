
import React from 'react';
import { Link } from 'react-router-dom';
import { matches, teamStats } from '../data';
import PlayerCard from '../components/sports/PlayerCard';
import LatestResults from '../components/sports/LatestResults';
import Standings from '../components/sports/Standings';
import Scoreboard from '../components/sports/Scoreboard';
import PlayerStats from '../components/sports/PlayerStats';

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

  // Mock data for player stats
  const mockPlayerStats = [
    {
      id: '1',
      name: 'John Doe',
      team: 'Team A',
      matches: 15,
      goals: 10,
      assists: 5,
      rating: 8.5
    },
    // ... more players
  ];

  return (
    <div className="space-y-6">
      {/* Featured Player */}
      <PlayerCard
        name="John Doe"
        position="Csatár"
        team="Team A"
        imageUrl="/placeholder.svg"
        stats={{
          matches: 15,
          goals: 10,
          assists: 5
        }}
      />

      {/* Latest Results and Standings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LatestResults 
          matches={recentMatches.map(match => ({
            id: match.id,
            homeTeam: match.homeTeam,
            awayTeam: match.awayTeam,
            homeScore: parseInt(match.fulltimeScore?.split(':')[0] || '0'),
            awayScore: parseInt(match.fulltimeScore?.split(':')[1] || '0'),
            date: match.date,
            time: match.time
          }))} 
        />
        
        <Standings stats={teamStats.slice(0, 5)} />
      </div>

      {/* Next Match Scoreboard */}
      {upcomingMatches[0] && (
        <Scoreboard
          homeTeam={upcomingMatches[0].homeTeam}
          awayTeam={upcomingMatches[0].awayTeam}
          homeScore={0}
          awayScore={0}
          matchTime={`${upcomingMatches[0].date} ${upcomingMatches[0].time}`}
        />
      )}

      {/* Player Stats */}
      <PlayerStats stats={mockPlayerStats} />
    </div>
  );
};

export default Overview;
