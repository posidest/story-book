import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Library from './components/Library';
import Splash from './components/Splash';
import Publish from './components/Publish';
import HowTo from './components/Publish/HowTo';
import { authenticate } from "./store/session";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/" exact={true}>
          <Splash />
        </Route>
        <ProtectedRoute path="/dashboard" exact={true}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <ProtectedRoute path="/library" exact={true}>
          <Library />
        </ProtectedRoute>
        <ProtectedRoute path="/create" exact={true}>
          <HowTo />
        </ProtectedRoute>
        <ProtectedRoute path="/publish" exact={true}>
          <Publish />
        </ProtectedRoute>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
