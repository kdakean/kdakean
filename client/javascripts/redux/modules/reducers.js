import { routerReducer }    from 'react-router-redux';
import { combineReducers }  from 'redux';
import { reducer as formReducer } from 'redux-form';

import authentication from './authentication';
import boardReducers from './board_reducers';
import modalReducers from './modal_reducers';

export const reducers = {
  authentication,
  boardReducers,
  modalReducers,
  form: formReducer,
};

export default combineReducers({
  ...reducers,
  routing: routerReducer
});
