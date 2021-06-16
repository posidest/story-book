import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [avatar, setAvatar] = useState(null)
  const [image, setImage] = useState(null)
  const [bio, setBio] = useState("")
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()
  const me = useSelector((state) => state.session.user)


  const onSignUp = (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = dispatch(signUp(username, email, password, avatar, bio));
      if (!user.errors) {
        return user;
      } else {
        setErrors(user.errors)
      }
    } else {
      errors.push('Password must match repeat password.')
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateAvatar = (e) => {
    let file = e.target.files[0]
    setAvatar(file)
    file = URL.createObjectURL(file)
    setImage(file)
  }

  const updateBio = (e) => {
    setBio(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (me) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Avatar</label>
        <input
          type="file"
          accept="image/*"
          name="avatar"
          onChange={updateAvatar}
        ></input>
      </div>
      {image && (
        <div>
          <img src={image} alt='avatar'/>
        </div>
      )}
      <div>
      <div>
        <label>Bio</label>
        <textarea onChange={updateBio}/>
      </div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
