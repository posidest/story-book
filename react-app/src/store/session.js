const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

const removeUser = () => ({
    type: REMOVE_USER
})

export const authenticate = () => async(dispatch) => {
  const res = await fetch('/api/auth/',{
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json()
  if (!data.errors) {
      dispatch(setUser(data))
      return data;
  }
}

export const login = (email, password) => async (dispatch) => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  if (res.ok) {
      const data = await res.json()
      console.log(data, 'login data from thunk')
      dispatch(setUser(data))
      return data;
  } else {
    const data = await res.json()
    return data
  }
}

export const logout = () => async (dispatch) => {
  const res = await fetch('/api/auth/logout', {
    headers: {
      "Content-Type": "application/json",
    }
  });
  if (res.ok) {
      const data = await res.json()
      dispatch(removeUser())
      return data;
  }
};

export const signUp = (user) => async (dispatch) => {
    const { avatar, username, email, password, bio } = user;
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("bio", bio)

    if (avatar) formData.append("avatar", avatar);

    const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        body: formData,
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(setUser(data.user));
        return data.user;
    } else {
      const data = await res.json()
      return data;
    }
}


export default function reducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = { ...state, user: action.payload }
            return newState;
        case REMOVE_USER:
            newState = {};
            // newState.user = null;
            return newState;
        default: return state;
    }
}


