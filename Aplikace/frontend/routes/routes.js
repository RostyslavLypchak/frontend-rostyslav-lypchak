
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import QuestPage from './pages/QuestPage';
import AccountPage from './pages/AccountPage';
import SettingsPage from './pages/SettingsPage';

const routes = [
  { path: '/', component: LoginPage, exact: true },
  { path: '/quests', component: QuestPage },
  { path: '/account', component: AccountPage },
  { path: '/settings', component: SettingsPage },
];

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={route.component}
            exact={route.exact || false}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
