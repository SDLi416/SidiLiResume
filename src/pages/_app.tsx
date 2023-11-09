/* eslint-disable react-memo/require-memo */

import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';
import {IntlProvider} from 'react-intl';

import {LanguageProvider} from '../contexts/LanguageContext';
import {useLanguage} from '../hooks/useLanguage';
import messages from '../locales';

interface AppContentProps {
  Component: AppProps['Component'];
  pageProps: AppProps['pageProps'];
}

interface LocaleMessage {
  [key: string]: string;
}

function AppContent({Component, pageProps}: AppContentProps) {
  const {locale} = useLanguage();

  // 现在不再需要状态和效果来处理消息加载
  const currentMessages: LocaleMessage = messages[locale] || messages['en']; // 默认回退到英语

  return (
    <IntlProvider locale={locale} messages={currentMessages}>
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
