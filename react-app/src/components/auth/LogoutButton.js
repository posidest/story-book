import React from "react";
import {useDispatch} from 'react-redux';
import { logout } from '../../store/session';
// import '../NavBar/NavBar.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = (e) => {
    dispatch(logout());
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
