import { routerReducer }    from 'react-router-redux';
import { combineReducers }  from 'redux';

export const reducers = {
};

export default combineReducers({
  ...reducers,
  routing: routerReducer
});
