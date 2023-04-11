import { } from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import './App.scss';

import Header from './Header/Header';
import MainContent from './MainContent/MainContent';

function App() {
  return (
    <>
      <Theme preset={presetGpnDefault}>
        <Header />
        <MainContent />
      </Theme>
    </>
  )
}

export default App
