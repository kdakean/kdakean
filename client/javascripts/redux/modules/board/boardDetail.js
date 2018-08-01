import { boardConstants } from './../../_constants';

export default function reducer(state={}, action) {
    switch(action.type) {
      case (boardConstants.GET_BOARD_DETAIL_SUCCESS):{
        const {board} = action.payload;
        return {
          ...state,
          boardDetail: board
        }
      }
    }
  return state;
};
