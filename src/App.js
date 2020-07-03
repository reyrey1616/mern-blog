import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Spinner from './components/global/Spinner';
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './styles/Global.styles';
import Alerts from './components/global/Alerts/Alerts';
// Dynamic Imports
const LoginPage = lazy(() => import('./pages/Login/Login.page'));
const SignupPage = lazy(() => import('./pages/Signup/Signup.page'));
const HomePage = lazy(() => import('./pages/Home/Home.page'));

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Navbar />
          <Alerts />

          <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignupPage} />
            <Route path='/' component={HomePage} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
