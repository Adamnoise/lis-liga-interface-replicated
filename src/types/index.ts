
export interface Team {
  id: number;
  name: string;
}

export interface Season {
  id: number;
  year: number;
  name: string;
  winner?: string;
  runnerUp?: string;
  thirdPlace?: string;
}

export interface Match {
  id: number;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  round: number;
  halftimeScore?: string;
  fulltimeScore?: string;
  isPlayed: boolean;
}

export interface TeamStats {
  id: number;
  teamName: string;
  position: number;
  positionChange: 'up' | 'down' | 'same';
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: ('W' | 'D' | 'L')[];
}

export type FormResult = 'W' | 'D' | 'L';
