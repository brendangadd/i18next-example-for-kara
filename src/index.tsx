import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React escapes by default
    },
    react: {
      useSuspense: false
    },
    detection: {
      // https://github.com/i18next/i18next-browser-languageDetector
      // Default: [
      //   'querystring',
      //   'cookie',
      //   'localStorage',
      //   'sessionStorage',
      //   'navigator',
      //   ...
      // ]
      // Preferring (enforcing) "navigator" prevents caching, which can do the
      // trick until we have richer language selection features.
      order: ['navigator']
    }
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
