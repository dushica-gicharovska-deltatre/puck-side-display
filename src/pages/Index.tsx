
import React, { useState } from 'react';
import ScoreboardHeader from '@/components/ScoreboardHeader';
import GameCard from '@/components/GameCard';
import { useGames } from '@/hooks/useGames';

const Index = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [hideScores, setHideScores] = useState(false);
  
  const { data: games = [], isLoading, error } = useGames();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleToggleScores = () => {
    setHideScores(!hideScores);
  };

  const filteredGames = activeTab === 'All' ? games : games.filter(game => {
    // For now, showing all games regardless of tab since API doesn't specify league
    return true;
  });

  if (error) {
    console.error('Error fetching games:', error);
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <ScoreboardHeader
          activeTab={activeTab}
          onTabChange={handleTabChange}
          hideScores={hideScores}
          onToggleScores={handleToggleScores}
        />
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-white text-lg">Loading games...</div>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-red-400 text-lg">Failed to load games. Using sample data...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                hideScores={hideScores}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
