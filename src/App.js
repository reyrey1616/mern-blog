import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/Login/Login.page';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
