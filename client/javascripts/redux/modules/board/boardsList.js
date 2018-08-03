import { boardConstants } from './../../_constants';

export default function reducer(state=[], action) {
    switch(action.type) {
      case (boardConstants.GET_BOARDS_SUCCESS): {
        const {boards} = action.payload;
        return boards;
      }

      case (boardConstants.UPDATE_BOARDS_SUCCESS): {
        const {board} = action.payload;
        return boards.map(b => {
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
  return state;
};
