import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Dashboard } from './pages/Dashboard';
import { useAuth } from './hooks/useAuth';
import { AuthPage } from './components/auth/AuthPage';

export default function App() {
  const { isAuthenticated, login } = useAuth();

  const handleRegister = (email: string, password: string) => {
    // logic to register a new user
    console.log('Registering:', email, password);
    // login the user after registration
    login(email, password);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/auth"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col justify-center items-center">
                <AuthPage onLogin={login} onRegister={handleRegister} />
              </div>
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}