import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';

class App extends React.Component<{ t: TFunction }> {
  render() {
    const { t } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{t('greeting')}</p>
        </header>
      </div>
    );
  }
}

export default withTranslation()(App);
