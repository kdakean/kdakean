import { modalConstants } from '../_constants';

export function toggleModalBoard() {
  return function(dispatch) {
    dispatch({type: modalConstants.MODAL_TOGGLE_BOARD, payload: {}});
  }
}
