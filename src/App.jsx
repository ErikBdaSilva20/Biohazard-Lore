import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageLayout from './components/PageLayout';

// Pages
import AnimationsPage from './pages/AnimationsPage';
import CharacterDossier from './pages/CharacterDossier';
import ComparisonPage from './pages/ComparisonPage';
import CorporationsList from './pages/CorporationsList';
import CutContentPage from './pages/CutContentPage';
import GamePage from './pages/GamePage';
import GamesList from './pages/GamesList';
import Home from './pages/Home';
import InfectionMap from './pages/InfectionMap';
import TheoriesPage from './pages/TheoriesPage';
import Timeline from './pages/Timeline';
import VirusesList from './pages/VirusesList';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <PageLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GamesList />} />
          <Route path="/games/:id" element={<GamePage />} />
          <Route path="/viruses" element={<VirusesList />} />
          <Route path="/characters" element={<CharacterDossier />} />
          <Route path="/corporations" element={<CorporationsList />} />
          <Route path="/chronology" element={<Timeline />} />
          <Route path="/theories" element={<TheoriesPage />} />
          <Route path="/cut-content" element={<CutContentPage />} />
          <Route path="/animations" element={<AnimationsPage />} />
          <Route path="/map" element={<InfectionMap />} />
          <Route path="/re4-comparison" element={<ComparisonPage />} />

          {/* Legacy & Redirects support if needed */}
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/infections" element={<VirusesList />} />
          <Route path="/dossier" element={<CharacterDossier />} />
        </Routes>
      </AnimatePresence>
    </PageLayout>
  );
}

export default App;
