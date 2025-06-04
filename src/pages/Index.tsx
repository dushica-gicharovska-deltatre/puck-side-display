
import React, { useState } from 'react';
import ScoreboardHeader from '@/components/ScoreboardHeader';
import GameCard from '@/components/GameCard';
import { mockGames } from '@/utils/mockData';

const Index = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [hideScores, setHideScores] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleToggleScores = () => {
    setHideScores(!hideScores);
  };

  const filteredGames = activeTab === 'All' ? mockGames : mockGames.filter(game => {
    // For demo purposes, showing all games regardless of tab
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <ScoreboardHeader
          activeTab={activeTab}
          onTabChange={handleTabChange}
          hideScores={hideScores}
          onToggleScores={handleToggleScores}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              hideScores={hideScores}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
