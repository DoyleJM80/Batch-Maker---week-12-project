import $ from 'jquery';
import {PARSE_API_URL, PARSE_HEADERS} from '../utility/parse';

export function signup(user) {
  return function(dispatch) {
    fetch(`${PARSE_API_URL}/users`, {
      method: "POST",
      body: user,
      headers: PARSE_HEADERS
    }).then((response) => {
      console.log('response', response);
      if(!response.ok) {
        throw Error(response.statusText);
      }
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
      console.log('response', response);
      if(!response.ok) {
        throw Error(response.statusText);
      }
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

// export function fetchRecipes() {
//   return function(dispatch) {
//     fetch(`$PARSE_API_URL/classes/Recipe`, {headers: PARSE_HEADERS}).then((response) => {
//       if(!response.ok) {
//         throw Error(response.statusText);
//       }  
//       response.json().then((result) => {
//         dispatch({type: ''})
//       }).catch((err) => {
//         console.log(err);
//       });
//     });
//   };
  // fetch(`${PARSE_API_URL}/classes/Recipe`, {headers: PARSE_HEADERS}).then((response) => {
  //     response.json().then((result) => {
  //       console.log(result);
  //       this.setState({recipes: result.results});
  //       console.log(this.state.recipes);
  //     });
  //   });
// }