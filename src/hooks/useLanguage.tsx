import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

export const translations: Translations = {
  welcome: {
    en: 'Welcome Back',
    fr: 'Bon Retour'
  },
  email: {
    en: 'Email',
    fr: 'E-mail'
  },
  password: {
    en: 'Password',
    fr: 'Mot de passe'
  },
  signIn: {
    en: 'Sign In',
    fr: 'Se Connecter'
  },
  register: {
    en: 'Register',
    fr: "S'inscrire"
  },
  enterEmail: {
    en: 'Enter your email',
    fr: 'Entrez votre e-mail'
  },
  enterPassword: {
    en: 'Enter your password',
    fr: 'Entrez votre mot de passe'
  },
  documentManagement: {
    en: 'Document Management',
    fr: 'Gestion de Documents'
  },
  madeSimple: {
    en: 'Made Simple',
    fr: 'Simplifiée'
  },
  getStarted: {
    en: 'Get Started',
    fr: 'Commencer'
  },
  description: {
    en: 'Securely store, manage, and share your important documents with our intuitive document management system.',
    fr: 'Stockez, gérez et partagez vos documents importants en toute sécurité avec notre système de gestion de documents intuitif.'
  },
  easyFileManagement: {
    en: 'Easy File Management',
    fr: 'Gestion de Fichiers Facile'
  },
  secureStorage: {
    en: 'Secure Storage',
    fr: 'Stockage Sécurisé'
  },
  teamCollaboration: {
    en: 'Team Collaboration',
    fr: 'Collaboration d\'Équipe'
  },
  logout: {
    en: 'Logout',
    fr: 'Déconnexion'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}