/* eslint-disable react-memo/require-memo */
import router from 'next/router';
import React, {useContext, useEffect, useState} from 'react';

import {LanguageContext} from '../../contexts/LanguageContext';

const LanSelectableButtons: React.FC = () => {
  const {locale} = useContext(LanguageContext) ?? {};
  const [, setSelectedLanguage] = useState(locale === 'en' ? 'English' : '中文');

  useEffect(() => {
    setSelectedLanguage(locale === 'en' ? 'English' : '中文');
  }, [locale]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const languageName = event.target.value;
    const newLocale = languageName === 'English' ? 'en' : 'zh';

    // Update the query parameter
    const newQuery = {
      ...router.query,
      lang: newLocale, // Set the new language
    };

    router.replace({
      pathname: router.pathname,
      query: newQuery,
    }, undefined, {shallow: true}); // Perform the routing
  };

  return (
    <>
      <style>
        {`
          select:focus {
            outline: none;
            border-color: orange;
            box-shadow: 0 0 0 0px orange;
          }
        `}
      </style>
      <select
        className="bg-transparent border p-2 font-black text-xs text-neutral-100 focus:outline-none focus:border-orange-500 hover:border-orange-500"
        onChange={handleSelectChange}
        value={locale === 'en' ? 'English' : '中文'}
      >
        <option value="English">English</option>
        <option value="中文">中文</option>
      </select>
    </>
  );
  
};

export default LanSelectableButtons;
