import { routerReducer }    from 'react-router-redux';
import { combineReducers }  from 'redux';

import authentication from './authentication';
import boardReducers from './board_reducers';

export const reducers = {
  authentication,
  boardReducers
};

export default combineReducers({
  ...reducers,
  routing: routerReducer
});
