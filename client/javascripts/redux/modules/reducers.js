import { routerReducer }    from 'react-router-redux';
import { combineReducers }  from 'redux';

import authentication from './authentication';

export const reducers = {
  authentication
};

export default combineReducers({
  ...reducers,
  routing: routerReducer
});
