import './App.css';
import AuthProvider from './helpers/auth/auth';
import { Routes, Route } from 'react-router-dom';
import HomePageLayout from './components/Layouts/HomePageLayout';
import RelPowerLightLayout from './components/Layouts/RelPowerLightLayout';
import RelPowerTimeLayout from './components/Layouts/RelPowerTimeLayout';
import AbsPowerLayout from './components/Layouts/AbsPowerLayout';
import NoMatchLayout from './components/Layouts/NoMatchLayout';

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePageLayout />} />
          <Route path="/lightdark" element={<RelPowerLightLayout />} />
          <Route path="/time" element={<RelPowerTimeLayout />} />
          <Route path="/absolutepower" element={<AbsPowerLayout />} />
          <Route path="*" element={<NoMatchLayout />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
