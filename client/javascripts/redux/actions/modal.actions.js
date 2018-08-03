import { modalConstants } from '../_constants';
import { boardService } from '../_services';

export function toggleModalBoard(boardId) {
  return function(dispatch) {
    if(boardId) {
      dispatch({type: modalConstants.MODAL_BOARD_TOGGLE, payload: {
        id: 123,
        name: "Kdakean",
        slug: "koko",
        description: "Test kdakean"
      }});
      // boardService.getBoard(boardId, {})
      // .then((response) => {
      //   dispatch({type: modalConstants.MODAL_BOARD_TOGGLE, payload: response.data});
      // })
      // .catch((err) => {
      //   console.log(err)
      // })
    } else {
      dispatch({type: modalConstants.MODAL_BOARD_TOGGLE, payload: {
        id: null,
        name: "",
        slug: "",
        description: ""
      }});
    }
  }
}
