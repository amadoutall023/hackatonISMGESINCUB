import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';

// Components
import ProtectedRoute from './components/common/ProtectedRoute';

// Pages
import HomePage from './pages/HomePage';
import IncubatorPage from './pages/IncubatorPage';
import ProgramsPage from './pages/ProgramsPage';
import ProjectsPage from './pages/ProjectsPage';
import ResourcesPage from './pages/ResourcesPage';
import ResourceDetailPage from './pages/ResourceDetailPage';
import CandidaturePage from './pages/CandidaturePage';
import AdminPage from './pages/AdminPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Styles
import './styles/global.css';
import './styles/variables.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/incubator" element={<IncubatorPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:id" element={<ResourceDetailPage />} />
            <Route path="/candidature" element={<CandidaturePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

