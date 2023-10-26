/* eslint-disable react-memo/require-memo */

import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo,useEffect, useState} from 'react';
import {IntlProvider} from 'react-intl';

import {LanguageProvider} from '../contexts/LanguageContext';
import {useLanguage} from '../hooks/useLanguage';

interface AppContentProps {
  Component: AppProps['Component'];
  pageProps: AppProps['pageProps'];
}


function AppContent({Component, pageProps}: AppContentProps) {
  const {locale} = useLanguage();

  const [messages, setMessages] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMessages() {
      try {
        const {default: loadedMessages} = await import(`../../public/locales/${locale}.json`);

        setMessages(loadedMessages);

        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load locale messages:', error);
      }
    }

    loadMessages();
  }, [locale]);

  if (isLoading) {
    return null; // or return a loading spinner
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <LanguageProvider>
        <AppContent Component={Component} pageProps={pageProps} />
      </LanguageProvider>
    </>
  );
});

export default MyApp;
