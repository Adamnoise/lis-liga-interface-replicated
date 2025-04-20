
import { Match, Season, Team, TeamStats } from "../types";

export const teams: Team[] = [
  { id: 1, name: "Chelsea" },
  { id: 2, name: "Liverpool" },
  { id: 3, name: "Manchester Kék" },
  { id: 4, name: "Tottenham" },
  { id: 5, name: "Vörös Ördögök" },
  { id: 6, name: "Everton" },
  { id: 7, name: "Newcastle" },
  { id: 8, name: "Aston Oroszlán" },
  { id: 9, name: "Brentford" },
  { id: 10, name: "Brighton" },
  { id: 11, name: "Crystal Palace" },
  { id: 12, name: "Fulham" },
  { id: 13, name: "London Ágyúk" },
  { id: 14, name: "Nottingham" },
  { id: 15, name: "West Ham" },
  { id: 16, name: "Wolverhampton" },
];

export const seasons: Season[] = [
  { id: 1, year: 20424, name: "Virtuális Labdarúgás Liga Mód Retail 20424" },
  { id: 2, year: 20423, name: "Virtuális Labdarúgás Liga Mód Retail 20423", winner: "Manchester Kék", runnerUp: "Vörös Ördögök", thirdPlace: "Everton" },
  { id: 3, year: 20422, name: "Virtuális Labdarúgás Liga Mód Retail 20422", winner: "Chelsea", runnerUp: "Vörös Ördögök", thirdPlace: "Tottenham" },
  { id: 4, year: 20421, name: "Virtuális Labdarúgás Liga Mód Retail 20421", winner: "Liverpool", runnerUp: "Vörös Ördögök", thirdPlace: "Chelsea" },
  { id: 5, year: 20420, name: "Virtuális Labdarúgás Liga Mód Retail 20420", winner: "Chelsea", runnerUp: "Everton", thirdPlace: "Liverpool" },
  { id: 6, year: 20419, name: "Virtuális Labdarúgás Liga Mód Retail 20419", winner: "Manchester Kék", runnerUp: "Vörös Ördögök", thirdPlace: "Chelsea" },
  { id: 7, year: 20418, name: "Virtuális Labdarúgás Liga Mód Retail 20418", winner: "Manchester Kék", runnerUp: "Liverpool", thirdPlace: "Vörös Ördögök" },
  { id: 8, year: 20417, name: "Virtuális Labdarúgás Liga Mód Retail 20417", winner: "Vörös Ördögök", runnerUp: "Liverpool", thirdPlace: "London Ágyúk" },
  { id: 9, year: 20416, name: "Virtuális Labdarúgás Liga Mód Retail 20416", winner: "Tottenham", runnerUp: "Manchester Kék", thirdPlace: "Chelsea" },
  { id: 10, year: 20415, name: "Virtuális Labdarúgás Liga Mód Retail 20415", winner: "Liverpool", runnerUp: "Vörös Ördögök", thirdPlace: "Manchester Kék" },
  { id: 11, year: 20414, name: "Virtuális Labdarúgás Liga Mód Retail 20414", winner: "Liverpool", runnerUp: "Manchester Kék", thirdPlace: "Chelsea" },
  { id: 12, year: 20413, name: "Virtuális Labdarúgás Liga Mód Retail 20413", winner: "Manchester Kék", runnerUp: "Chelsea", thirdPlace: "Liverpool" },
  { id: 13, year: 20412, name: "Virtuális Labdarúgás Liga Mód Retail 20412", winner: "Liverpool", runnerUp: "Manchester Kék", thirdPlace: "Chelsea" },
  { id: 14, year: 20411, name: "Virtuális Labdarúgás Liga Mód Retail 20411", winner: "Chelsea", runnerUp: "Liverpool", thirdPlace: "Vörös Ördögök" },
  { id: 15, year: 20410, name: "Virtuális Labdarúgás Liga Mód Retail 20410", winner: "Manchester Kék", runnerUp: "Liverpool", thirdPlace: "Vörös Ördögök" },
  { id: 16, year: 20409, name: "Virtuális Labdarúgás Liga Mód Retail 20409", winner: "Liverpool", runnerUp: "Manchester Kék", thirdPlace: "London Ágyúk" },
  { id: 17, year: 20408, name: "Virtuális Labdarúgás Liga Mód Retail 20408", winner: "Liverpool", runnerUp: "Manchester Kék", thirdPlace: "Chelsea" },
  { id: 18, year: 20407, name: "Virtuális Labdarúgás Liga Mód Retail 20407", winner: "Manchester Kék", runnerUp: "Vörös Ördögök", thirdPlace: "Chelsea" },
  { id: 19, year: 20406, name: "Virtuális Labdarúgás Liga Mód Retail 20406", winner: "Chelsea", runnerUp: "Liverpool", thirdPlace: "Tottenham" },
  { id: 20, year: 20405, name: "Virtuális Labdarúgás Liga Mód Retail 20405", winner: "Manchester Kék", runnerUp: "Liverpool", thirdPlace: "Vörös Ördögök" },
];

export const matches: Match[] = [
  // Round 6 (Upcoming matches)
  { id: 1, date: "20/04/25", time: "09:23", homeTeam: "Manchester Kék", awayTeam: "Brentford", round: 6, isPlayed: false },
  { id: 2, date: "20/04/25", time: "09:23", homeTeam: "Fulham", awayTeam: "Nottingham", round: 6, isPlayed: false },
  { id: 3, date: "20/04/25", time: "09:23", homeTeam: "Liverpool", awayTeam: "Chelsea", round: 6, isPlayed: false },
  { id: 4, date: "20/04/25", time: "09:23", homeTeam: "Brighton", awayTeam: "Wolverhampton", round: 6, isPlayed: false },
  { id: 5, date: "20/04/25", time: "09:23", homeTeam: "London Ágyúk", awayTeam: "Crystal Palace", round: 6, isPlayed: false },
  { id: 6, date: "20/04/25", time: "09:23", homeTeam: "Everton", awayTeam: "Newcastle", round: 6, isPlayed: false },
  { id: 7, date: "20/04/25", time: "09:23", homeTeam: "Tottenham", awayTeam: "Aston Oroszlán", round: 6, isPlayed: false },
  { id: 8, date: "20/04/25", time: "09:23", homeTeam: "Vörös Ördögök", awayTeam: "West Ham", round: 6, isPlayed: false },
  
  // Previous matches
  { id: 9, date: "20/04/25", time: "09:16", homeTeam: "Newcastle", awayTeam: "Liverpool", round: 5, halftimeScore: "1:0", fulltimeScore: "2:2", isPlayed: true },
  { id: 10, date: "20/04/25", time: "09:08", homeTeam: "Liverpool", awayTeam: "Manchester Kék", round: 5, halftimeScore: "1:0", fulltimeScore: "3:1", isPlayed: true },
  { id: 11, date: "20/04/25", time: "09:01", homeTeam: "Nottingham", awayTeam: "Liverpool", round: 4, halftimeScore: "0:0", fulltimeScore: "1:0", isPlayed: true },
  { id: 12, date: "20/04/25", time: "08:54", homeTeam: "Liverpool", awayTeam: "Brighton", round: 3, halftimeScore: "0:0", fulltimeScore: "1:0", isPlayed: true },
  { id: 13, date: "20/04/25", time: "08:46", homeTeam: "West Ham", awayTeam: "Liverpool", round: 2, halftimeScore: "0:1", fulltimeScore: "1:1", isPlayed: true },
  
  // Chelsea's recent matches
  { id: 14, date: "20/04/25", time: "09:16", homeTeam: "Chelsea", awayTeam: "Manchester Kék", round: 5, halftimeScore: "0:1", fulltimeScore: "0:3", isPlayed: true },
  { id: 15, date: "20/04/25", time: "09:08", homeTeam: "Brighton", awayTeam: "Chelsea", round: 4, halftimeScore: "0:2", fulltimeScore: "1:3", isPlayed: true },
  { id: 16, date: "20/04/25", time: "09:01", homeTeam: "Chelsea", awayTeam: "Wolverhampton", round: 3, halftimeScore: "0:0", fulltimeScore: "2:0", isPlayed: true },
  { id: 17, date: "20/04/25", time: "08:54", homeTeam: "Aston Oroszlán", awayTeam: "Chelsea", round: 2, halftimeScore: "0:1", fulltimeScore: "0:2", isPlayed: true },
  { id: 18, date: "20/04/25", time: "08:46", homeTeam: "Chelsea", awayTeam: "Crystal Palace", round: 1, halftimeScore: "1:0", fulltimeScore: "2:0", isPlayed: true },
];

export const teamStats: TeamStats[] = [
  { id: 1, teamName: "Chelsea", position: 1, positionChange: "same", played: 5, won: 4, drawn: 0, lost: 1, goalsFor: 7, goalsAgainst: 5, goalDifference: 2, points: 12, form: ["W", "W", "W", "W", "L"] },
  { id: 2, teamName: "Wolverhampton", position: 2, positionChange: "up", played: 5, won: 3, drawn: 1, lost: 1, goalsFor: 8, goalsAgainst: 4, goalDifference: 4, points: 10, form: ["W", "W", "W", "D", "L"] },
  { id: 3, teamName: "Liverpool", position: 3, positionChange: "up", played: 5, won: 3, drawn: 1, lost: 1, goalsFor: 9, goalsAgainst: 5, goalDifference: 4, points: 10, form: ["W", "W", "W", "D", "L"] },
  { id: 4, teamName: "Newcastle", position: 4, positionChange: "same", played: 5, won: 2, drawn: 2, lost: 1, goalsFor: 12, goalsAgainst: 7, goalDifference: 5, points: 8, form: ["W", "W", "D", "W", "L"] },
  { id: 5, teamName: "Everton", position: 5, positionChange: "up", played: 5, won: 2, drawn: 1, lost: 2, goalsFor: 10, goalsAgainst: 4, goalDifference: 6, points: 7, form: ["W", "D", "W", "L", "L"] },
  { id: 6, teamName: "Brentford", position: 6, positionChange: "down", played: 5, won: 2, drawn: 1, lost: 2, goalsFor: 6, goalsAgainst: 3, goalDifference: 3, points: 7, form: ["W", "D", "L", "W", "W"] },
  { id: 7, teamName: "Manchester Kék", position: 7, positionChange: "up", played: 5, won: 2, drawn: 1, lost: 2, goalsFor: 10, goalsAgainst: 8, goalDifference: 2, points: 7, form: ["W", "W", "D", "L", "W"] },
  { id: 8, teamName: "Vörös Ördögök", position: 8, positionChange: "up", played: 5, won: 2, drawn: 1, lost: 2, goalsFor: 8, goalsAgainst: 6, goalDifference: 2, points: 7, form: ["W", "D", "L", "L", "W"] },
  { id: 9, teamName: "London Ágyúk", position: 9, positionChange: "up", played: 5, won: 2, drawn: 1, lost: 2, goalsFor: 6, goalsAgainst: 6, goalDifference: 0, points: 7, form: ["W", "D", "L", "L", "W"] },
  { id: 10, teamName: "Tottenham", position: 10, positionChange: "down", played: 5, won: 1, drawn: 3, lost: 1, goalsFor: 4, goalsAgainst: 4, goalDifference: 0, points: 6, form: ["W", "W", "D", "D", "L"] },
  { id: 11, teamName: "Nottingham", position: 11, positionChange: "same", played: 5, won: 1, drawn: 1, lost: 3, goalsFor: 4, goalsAgainst: 7, goalDifference: -3, points: 4, form: ["W", "D", "L", "L", "L"] },
  { id: 12, teamName: "Aston Oroszlán", position: 12, positionChange: "down", played: 5, won: 1, drawn: 0, lost: 4, goalsFor: 3, goalsAgainst: 9, goalDifference: -6, points: 3, form: ["W", "L", "L", "L", "L"] },
  { id: 13, teamName: "Crystal Palace", position: 13, positionChange: "down", played: 5, won: 1, drawn: 0, lost: 4, goalsFor: 3, goalsAgainst: 8, goalDifference: -5, points: 3, form: ["W", "L", "L", "L", "L"] },
  { id: 14, teamName: "West Ham", position: 14, positionChange: "down", played: 5, won: 0, drawn: 2, lost: 3, goalsFor: 6, goalsAgainst: 12, goalDifference: -6, points: 2, form: ["D", "D", "L", "L", "L"] },
  { id: 15, teamName: "Fulham", position: 15, positionChange: "up", played: 5, won: 0, drawn: 1, lost: 4, goalsFor: 3, goalsAgainst: 9, goalDifference: -6, points: 1, form: ["D", "L", "L", "L", "L"] },
  { id: 16, teamName: "Brighton", position: 16, positionChange: "down", played: 5, won: 0, drawn: 1, lost: 4, goalsFor: 1, goalsAgainst: 7, goalDifference: -6, points: 1, form: ["D", "L", "L", "L", "L"] },
];
