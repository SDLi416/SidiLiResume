/* eslint-disable react-memo/require-memo */
import React, {useContext, useEffect, useState} from 'react';

import {LanguageContext} from '../../contexts/LanguageContext';

const LanSelectableButtons: React.FC = () => {
  const {locale, changeLanguage} = useContext(LanguageContext) ?? {};
  const [selectedLanguage, setSelectedLanguage] = useState(locale === 'en' ? 'English' : '中文');

  useEffect(() => {
    setSelectedLanguage(locale === 'en' ? 'English' : '中文');
  }, [locale]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    if (language === 'English') {
      changeLanguage?.('en');
    } else if (language === '中文') {
      changeLanguage?.('zh');
    }
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
