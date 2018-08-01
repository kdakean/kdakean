import { boardService } from '../_services';
import { boardConstants } from '../_constants';

export function fetchBoards(options) {
  return function(dispatch) {
    dispatch({type: boardConstants.GET_BOARDS_SUCCESS, payload: {
      boards: [
        {"id": 123, "name": "Kdakean"}
      ]
    }})
    // boardService.getBoards(options)
    //   .then((response) => {
    //     dispatch({type: boardConstants.GET_BOARDS_SUCCESS, payload: response.data})
    //   })
    //   .catch((err) => {
    //   })
  }
}
