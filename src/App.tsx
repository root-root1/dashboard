import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/sections/Header';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Homepage from './components/pages/HomePages';
import Dashboard from './components/pages/DashBoard';
import PrivateRoute from './components/auth/PrivateRoute';
import PublicRoute from './components/auth/PublicRoute';
import Loader from './components/UI/Loader';
import firebase from './firebase/config';
import { getUserById, setLoading, setNeedVerification } from './state/action-creators/authAction';
import { RootState } from './state';
import { useTypeSelector } from './hooks/useTypeSelector';
import { AnyAction } from 'redux';
import CustomerForm from './components/pages/CustomerForm';

const App: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useTypeSelector((state: RootState) => state.auth);

  //checking if user Exist
  useEffect(() => {
    dispatch(setLoading(true) as unknown as AnyAction);
    const unsubScribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setLoading(true) as unknown as AnyAction);
        await dispatch(getUserById(user.uid) as unknown as AnyAction);
        if (!user.emailVerified) {
          dispatch(setNeedVerification() as unknown as AnyAction);
        }
      }
      dispatch(setLoading(false) as unknown as AnyAction);
    });
    return () => {
      unsubScribe();
    }
  }, [dispatch]);
  

  if (loading) {
    return <Loader/>
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PublicRoute path='/' component={Homepage} exact />
        <PublicRoute path='/signup' component={SignUp} exact />
        <PublicRoute path='/signIn' component={SignIn} exact />
        <PrivateRoute path='/dashboard' component={Dashboard} exact />
        <PrivateRoute path='/add-customer' component={CustomerForm} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
