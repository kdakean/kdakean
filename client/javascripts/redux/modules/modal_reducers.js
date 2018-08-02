import { modalConstants } from './../_constants';

export default function reducer(state={
    modalBoardOpen: false,
  }, action) {
    switch(action.type) {
      case (modalConstants.MODAL_TOGGLE_BOARD):{
        return {
          ...state,
          modalBoardOpen: !state.modalBoardOpen
        }
      }
    }
  return state;
};
