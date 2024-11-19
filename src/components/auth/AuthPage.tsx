import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react'; 
import { Link } from 'react-router-dom';

interface AuthPageProps {
  onLogin: (email: string, password: string) => void;
  onRegister: (email: string, password: string) => void;
}

export function AuthPage({ onLogin, onRegister }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      onLogin(email, password);
    } else {
      if (password === confirmPassword) {
        onRegister(email, password);
      }
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-8 text-center">
        <Link to="/" className="inline-flex items-center">
          <FileText className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900"> OCR </span>
        </Link>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {isLogin ? t('auth.login') : t('auth.register')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {t('auth.email')}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              {t('auth.password')}
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                {t('auth.confirmPassword')}
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {t('auth.submit')}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            {isLogin ? t('auth.switchToRegister') : t('auth.switchToLogin')}
          </button>
        </div>
      </div>
    </div>
  );
}