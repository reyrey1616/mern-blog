import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Spinner from './components/global/Spinner';
import Navbar from './components/Navbar/Navbar';

// Dynamic Imports
const LoginPage = lazy(() => import('./pages/Login/Login.page'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
