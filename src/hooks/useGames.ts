
import { useQuery } from '@tanstack/react-query';

interface ApiGame {
  home: string;
  away: string;
  homeScore: number;
  awayScore: number;
  status: string;
  scheduled: string;
}

interface Game {
  id: string;
  homeTeam: {
    name: string;
    city: string;
    logo: string;
    score: number;
  };
  awayTeam: {
    name: string;
    city: string;
    logo: string;
    score: number;
  };
  status: 'final' | 'live' | 'upcoming';
  time: string;
  date: string;
  period?: string;
}

const fetchGames = async (): Promise<ApiGame[]> => {
  const response = await fetch('/api/games'); // Replace with your actual API endpoint
  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }
  return response.json();
};

const transformApiGameToGame = (apiGame: ApiGame, index: number): Game => {
  const scheduledDate = new Date(apiGame.scheduled);
  const now = new Date();
  
  // Extract team name from full name (e.g., "Toronto Maple Leafs" -> "TOR")
  const getTeamAbbreviation = (fullName: string): string => {
    const words = fullName.split(' ');
    if (words.length >= 2) {
      return words[words.length - 1].substring(0, 3).toUpperCase();
    }
    return fullName.substring(0, 3).toUpperCase();
  };

  // Determine status
  let status: 'final' | 'live' | 'upcoming';
  if (apiGame.status === 'closed') {
    status = 'final';
  } else if (scheduledDate > now) {
    status = 'upcoming';
  } else {
    status = 'live';
  }

  return {
    id: `${index + 1}`,
    homeTeam: {
      name: getTeamAbbreviation(apiGame.home),
      city: apiGame.home.split(' ').slice(0, -1).join(' '),
      logo: '',
      score: apiGame.homeScore
    },
    awayTeam: {
      name: getTeamAbbreviation(apiGame.away),
      city: apiGame.away.split(' ').slice(0, -1).join(' '),
      logo: '',
      score: apiGame.awayScore
    },
    status,
    time: status === 'upcoming' ? scheduledDate.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    }) : '',
    date: scheduledDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    }).toUpperCase(),
    period: status === 'final' ? 'FINAL' : undefined
  };
};

export const useGames = () => {
  return useQuery({
    queryKey: ['games'],
    queryFn: fetchGames,
    refetchInterval: 30000, // Refresh every 30 seconds
    select: (data: ApiGame[]) => data.map(transformApiGameToGame),
    staleTime: 0, // Always consider data stale to ensure fresh fetches
  });
};
