import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Shield, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from '../components/common/LanguageSwitch';

export function HomePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">OCR</span>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSwitch />
              <button
                onClick={() => navigate('/auth')}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
              >
                {t('auth.login')}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">{t('home.title')}</span>
              <span className="block text-blue-600">{t('home.subtitle')}</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {t('home.description')}
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <button
                onClick={() => navigate('/auth')}
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                {t('home.getStarted')}
              </button>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-6">
                <div className="rounded-lg bg-blue-100 p-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-gray-900">Easy File Management</h3>
              <p className="mt-2 text-gray-500">
                Upload, organize, and access your documents from anywhere, anytime.
              </p>
            </div>

            <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-6">
                <div className="rounded-lg bg-blue-100 p-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-gray-900">Secure Storage</h3>
              <p className="mt-2 text-gray-500">
                Your documents are protected with enterprise-grade security measures.
              </p>
            </div>

            <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-6">
                <div className="rounded-lg bg-blue-100 p-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-gray-900">Team Collaboration</h3>
              <p className="mt-2 text-gray-500">
                Share and collaborate on documents with your team seamlessly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}