// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import QuestPage from './pages/Quests';
import AccountPage from './AccountPage';
import SettingsPage from './pages/SettingsPage';

const App = () => {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/quests" component={Quests} />
        <Route path="/account" component={AccountPage} />
        <Route path="/settings" component={SettingsPage} />
      </Switch>
    </Router>
  );
};



export default App;
