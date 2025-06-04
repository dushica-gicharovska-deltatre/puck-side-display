
import React from 'react';

interface ScoreboardHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  hideScores: boolean;
  onToggleScores: () => void;
}

const ScoreboardHeader: React.FC<ScoreboardHeaderProps> = ({
  activeTab,
  onTabChange,
  hideScores,
  onToggleScores,
}) => {
  const tabs = ['All', 'NBA', 'MLB', 'NHL'];

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-8">
        <h1 className="text-4xl font-bold text-white">Scores</h1>
        <div className="flex bg-gray-800 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <span className="text-gray-400 text-sm">Hide Scores</span>
        <button
          onClick={onToggleScores}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            hideScores ? 'bg-blue-600' : 'bg-gray-600'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              hideScores ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ScoreboardHeader;
