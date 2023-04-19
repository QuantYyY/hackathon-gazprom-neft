import { FC } from 'react';
import './App.scss';

import Header from './components/Header/Header';
import PageSwitching from './components/PageSwitching/PageSwitching';

import { useAppSelector } from './hook';

const App: FC = () => {

  const store = useAppSelector(store => store.header);

  return (
    <>
      <Header />
      <PageSwitching />
    </>
  );

}

export default App
