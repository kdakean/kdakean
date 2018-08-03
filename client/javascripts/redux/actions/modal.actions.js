import { modalConstants } from '../_constants';
import { boardService } from '../_services';

export function toggleModalBoard(boardSlug) {
  return function(dispatch) {
    if(boardSlug) {
      // dispatch({type: modalConstants.MODAL_BOARD_TOGGLE, payload: {
      //   id: 123,
      //   name: "Kdakean",
      //   slug: "koko",
      //   description: "Test kdakean"
      // }});
      boardService.getBoard(boardSlug, {})
      .then((response) => {
        dispatch({type: modalConstants.MODAL_BOARD_TOGGLE, payload: response.data});
      })
      .catch((err) => {
        console.log(err)
      })
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
