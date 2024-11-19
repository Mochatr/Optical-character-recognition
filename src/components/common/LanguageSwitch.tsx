import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageSwitch() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
      aria-label="Toggle language"
    >
      <Globe className="h-5 w-5 mr-1" />
      {i18n.language.toUpperCase()}
    </button>
  );
}