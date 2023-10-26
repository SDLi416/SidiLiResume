// contexts/LanguageContext.tsx
/* eslint-disable react-memo/require-memo */
import type {ReactNode} from 'react';
import React, {createContext, useState} from 'react';

export interface LanguageContextProps {
  locale: string;
  changeLanguage: (locale: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [locale, setLocale] = useState<string>('en');

  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale);
  };

  return (
    <LanguageContext.Provider value={{locale, changeLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};
