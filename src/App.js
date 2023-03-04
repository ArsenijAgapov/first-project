import React from 'react';
import './App.css';
import {Route} from 'react-router';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import MusicContainer from './components/Music/MusicContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBarContainer />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <MusicContainer />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/users' render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
