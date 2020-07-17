import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from './components/global/Spinner';
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './styles/Global.styles';
import Alerts from './components/global/Alerts/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/HOC/PrivateRoute/PrivateRoute';
import { loadUserStart } from './redux/users/user.actions';
import store from './redux/store';
// Dynamic Imports
const LoginPage = lazy(() => import('./pages/Login/Login.page'));
const SignupPage = lazy(() => import('./pages/Signup/Signup.page'));
const HomePage = lazy(() => import('./pages/Home/Home.page'));

if (localStorage.token) {
  setAuthToken(localStorage.getItem('token'));
}

const App = ({ loadCurrentUser }) => {
  useEffect(() => {
    store.dispatch(loadCurrentUser());
  }, [loadCurrentUser]);

  return (
    <div>
      <GlobalStyles />
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Navbar />
          <Alerts />

          <Switch>
            <Route path='/login' exact component={LoginPage} />
            <Route path='/signup' exact component={SignupPage} />
            {/* <Route path='/' exact component={HomePage} /> */}

            <PrivateRoute path='/' exact component={HomePage} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadCurrentUser: () => dispatch(loadUserStart()),
});
export default connect(null, mapDispatchToProps)(App);
