import { modalConstants } from './../_constants';

export default function reducer(state={
    modalBoardOpen: false,
    board: {
      id: null,
      name: "",
      slug: "",
      description: ""
    }
  }, action) {
    switch(action.type) {
      case (modalConstants.MODAL_BOARD_OFF): {
        return {
          ...state,
          modalBoardOpen: false
        }
      }
      case (modalConstants.MODAL_BOARD_ON): {
        return {
          ...state,
          modalBoardOpen: true
        }
      }
      case (modalConstants.MODAL_BOARD_TOGGLE): {
        const {board} = action.payload;
        console.log(board)
        return {
          ...state,
          modalBoardOpen: !state.modalBoardOpen,
          board: board
        }
      }
    }
  return state;
};
