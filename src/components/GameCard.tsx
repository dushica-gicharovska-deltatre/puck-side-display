
import React from 'react';

interface Team {
  name: string;
  city: string;
  logo: string;
  score: number;
}

interface Game {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  status: 'final' | 'live' | 'upcoming';
  time: string;
  date: string;
  period?: string;
  inning?: string;
}

interface GameCardProps {
  game: Game;
  hideScores: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ game, hideScores }) => {
  const getStatusDisplay = () => {
    if (game.status === 'final') return 'FINAL';
    if (game.status === 'live') {
      return game.period || game.inning || 'LIVE';
    }
    return game.time;
  };

  const getStatusColor = () => {
    if (game.status === 'final') return 'text-gray-400';
    if (game.status === 'live') return 'text-green-400';
    return 'text-blue-400';
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-105 border border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xs text-gray-400 font-medium">
          {game.date}
        </div>
        <div className={`text-xs font-bold ${getStatusColor()}`}>
          {getStatusDisplay()}
        </div>
      </div>
      
      <div className="space-y-4">
        {/* Away Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">
                {game.awayTeam.name.slice(0, 2)}
              </span>
            </div>
            <span className="text-white font-medium">
              {game.awayTeam.name}
            </span>
          </div>
          <div className="text-2xl font-bold text-white">
            {hideScores ? '-' : game.awayTeam.score}
          </div>
        </div>
        
        {/* Home Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">
                {game.homeTeam.name.slice(0, 2)}
              </span>
            </div>
            <span className="text-white font-medium">
              {game.homeTeam.name}
            </span>
          </div>
          <div className="text-2xl font-bold text-white">
            {hideScores ? '-' : game.homeTeam.score}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
