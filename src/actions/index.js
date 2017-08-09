import $ from 'jquery';
import {PARSE_API_URL, PARSE_HEADERS} from '../utility/parse';

export function signup(user) {
  return function(dispatch) {
    fetch(`${PARSE_API_URL}/users`, {
      method: "POST",
      body: user,
      headers: PARSE_HEADERS
    }).then((response) => {
      response.json()
      .then((result) => {
        dispatch({type: 'AUTH_USER'});
        localStorage.setItem('user', JSON.stringify(result));
      });
    }).catch((err) => {
      console.log(err);
    })
  };
};

export function signin(user) {
  return function(dispatch) {
    fetch(`${PARSE_API_URL}/login?${$.param(user)}`, {headers: PARSE_HEADERS})
    .then((response) => {
      response.json().then((result) => {
        dispatch({type: 'AUTH_USER'});
        localStorage.setItem('user', JSON.stringify(result));
      }).catch((err) => {
        console.log(err);
      });
    });
  };
};
