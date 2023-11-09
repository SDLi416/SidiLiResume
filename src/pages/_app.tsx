/* eslint-disable react-memo/require-memo */
/* eslint-disable react-hooks/exhaustive-deps */
// _app.tsx
import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import {memo, useContext, useEffect} from 'react';
import {IntlProvider} from 'react-intl';

import {LanguageContext,LanguageProvider} from '../contexts/LanguageContext';
import messages from '../locales';

interface AppContentProps {
  Component: AppProps['Component'];
  pageProps: AppProps['pageProps'];
}

interface LocaleMessage {
  [key: string]: string;
}

const AppContent = ({Component, pageProps}: AppContentProps) => {
  const router = useRouter();
  const languageContext = useContext(LanguageContext);

  // Update the language context when the URL query parameter changes
  useEffect(() => {
    const {lang} = router.query;
    if (lang && typeof lang === 'string' && languageContext) {
      languageContext.changeLanguage(lang);
    }
    // You should add languageContext to the dependency array
    // but make sure to handle the potential infinite loop or re-render properly
    // depending on your context implementation.
  }, [router.query.lang, languageContext]);

  if (!languageContext) {
    // Handle the case where the language context is not available
    return <p>Loading...</p>;
  }

  const currentMessages: LocaleMessage = messages[languageContext.locale] || messages['en']; // Fallback to English

  return (
    <IntlProvider locale={languageContext.locale} messages={currentMessages}>
      <Component {...pageProps} />
    </IntlProvider>
  );
};

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <LanguageProvider>
      <AppContent Component={Component} pageProps={pageProps} />
    </LanguageProvider>
  );
});

export default MyApp;
