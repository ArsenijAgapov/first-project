import React from 'react';
import './App.css';
import {Route} from 'react-router';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import MusicContainer from './components/Music/MusicContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import Header from './components/Header/Header';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBarContainer />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <ProfileContainer />} />
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
