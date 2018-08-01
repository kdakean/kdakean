import { boardConstants } from './../../_constants';

export default function reducer(state={}, action) {
    switch(action.type) {
      case (boardConstants.GET_BOARDS_SUCCESS):{
        const {boards} = action.payload;
        return {
          ...state,
          boardsList: boards
        }
      }
    }
  return state;
};
