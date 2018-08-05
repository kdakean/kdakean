import { boardConstants } from './../_constants';
import filter from 'lodash/filter';

export default function reducer(state={
    list: [],
    meta: {}
  }, action) {
    switch(action.type) {
      case (boardConstants.GET_BOARDS_SUCCESS): {
        const {boards} = action.payload;
        return {
          ...state,
          list: boards
        };
      }

      case (boardConstants.UPDATE_BOARDS_SUCCESS): {
        const {board} = action.payload;
        return {
          ...state,
          list: state.list.map(b => {
            if(board.id === b.id) {
              return {
                ...b,
                ...board
              }
            } else {
              return b;
            }
          })
        }
      }

      case (boardConstants.DELETE_BOARDS_SUCCESS): {
        const {board_id} = action.payload;
        return {
          ...state,
          list: filter(state.list, function(b) { return b.id !== board_id; })
        }
      }
    }
  return state;
};
