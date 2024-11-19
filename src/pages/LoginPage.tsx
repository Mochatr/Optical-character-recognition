import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { FileText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    login(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <div className="py-6">
        <Link to="/" className="flex items-center justify-center">
          <FileText className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">DocManager</span>
        </Link>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-4">
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
}