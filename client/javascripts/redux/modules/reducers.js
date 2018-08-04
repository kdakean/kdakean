import { routerReducer }    from 'react-router-redux';
import { combineReducers }  from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as sweetalert } from 'react-redux-sweetalert';

import authentication from './authentication';
import boardReducers from './board_reducers';
import modalReducers from './modal_reducers';

export const reducers = {
  sweetalert,
  authentication,
  boardReducers,
  modalReducers,
  form: formReducer,
};

export default combineReducers({
  ...reducers,
  routing: routerReducer
});
