import axios from 'axios';

// Set the token into the header as x-auth-token to use it every API request
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['authorization'];
  }
};

export default setAuthToken;
