import { boardConstants } from './../../_constants';
import filter from 'lodash/filter';

export default function reducer(state=[], action) {
    switch(action.type) {
      case (boardConstants.GET_BOARDS_SUCCESS): {
        const {boards} = action.payload;
        return boards;
      }

      case (boardConstants.UPDATE_BOARDS_SUCCESS): {
        const {board} = action.payload;
        console.log(board)
        return state.map(b => {
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

      case (boardConstants.DELETE_BOARDS_SUCCESS): {
        const {board_id} = action.payload;
        console.log(board_id)
        return filter(state, function(b) { return b.id !== board_id; })
      }
    }
  return state;
};
