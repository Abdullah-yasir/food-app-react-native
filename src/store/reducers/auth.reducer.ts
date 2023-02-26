import {LOGIN} from '../action-types';

export const authReducer = (state = {isLoggedIn: false}, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, isLoggedIn: true};

    default:
      return state;
  }
};
