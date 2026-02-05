import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FavoriteGame from './components/FavoriteGame';
import GameplayDetails from './components/GameplayDetails';
import GameExperience from './components/GameExperience';
import SteamCommunityHelp from './components/SteamCommunityHelp';
import CommunityComparison from './components/CommunityComparison';
import NewGameAnalysis from './components/NewGameAnalysis';
import Proposal from './components/Proposal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <FavoriteGame />
        <GameplayDetails />
        <GameExperience />
        <SteamCommunityHelp />
        <CommunityComparison />
        <NewGameAnalysis />
        <Proposal />
      </main>
    </div>
  );
};

export default App;