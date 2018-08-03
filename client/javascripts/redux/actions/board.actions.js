import { boardService } from '../_services';
import { boardConstants, modalConstants } from '../_constants';
import { history } from '../_helpers';

export function createBoard(boardParams) {
  return function(dispatch) {
    boardService.createBoard(boardParams)
      .then((response) => {
        dispatch({type: modalConstants.MODAL_BOARD_OFF});
        const {board} = response.data;
        history.push('/k/' + board.slug);
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function updateBoard(boardParams) {
  return function(dispatch) {
    boardService.updateBoard(boardParams)
      .then((response) => {
        dispatch({type: boardConstants.UPDATE_BOARDS_SUCCESS, payload: response.data});
        dispatch({type: modalConstants.MODAL_BOARD_OFF});
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
export function fetchBoards(options) {
  return function(dispatch) {
    dispatch({type: boardConstants.GET_BOARDS_SUCCESS, payload: {
      boards: [
        {
          id: 123,
          name: "-1 Kdakean",
          slug: "slug-1",
          description: "This is the description of kdakean.",
          total_tasks: 200,
          created_at: "2018-08-03T09:22:34.438088105Z",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        },
        {
          id: 12,
          name: "0 Kdakean name very long long long long name",
          slug: "slug-1",
          description: "This is the description description description description sdf sdfsdf sdfsdf sfsd of kdakean.",
          total_tasks: 200,
          created_at: "2018-08-03T09:22:34.438088105Z",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        },
        {
          id: 1,
          name: "1 Kdakean name very long long long long name",
          slug: "slug-1",
          description: "This is the description description description description sdf sdfsdf sdfsdf sfsd of kdakean.",
          total_tasks: 200,
          created_at: "2018-08-03T09:22:34.438088105Z",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        },
        {
          id: 2,
          name: "2 Kdakean name",
          slug: "slug-1",
          description: "",
          total_tasks: 200,
          created_at: "2018-08-03T09:22:34.438088105Z",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        },
        {
          id: 3,
          name: "3 Kdakean name very long",
          slug: "slug-1",
          description: "This is the .",
          total_tasks: 200,
          created_at: "2018-08-03T09:22:34.438088105Z",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        },
        {
          id: 4,
          name: "4 Kdakean name very long long long long name",
          slug: "slug-1",
          description: "This is the description description description.",
          total_tasks: 200,
          created_at: "2018-08-03T09:22:34.438088105Z",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        },
        {
          id: 5,
          name: "5 Kdakean name very long long long long name",
          slug: "slug-1",
          description: "This is the description.",
          total_tasks: 200,
          created_at: "2018-08-03T09:22:34.438088105Z",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        },
        {
          id: 6,
          name: "6 Kdakean name very long long long long name sure it so long long long long go go",
          slug: "slug-1",
          description: "",
          total_tasks: 200,
          created_at: "2018-08-03T09:22:34.438088105Z",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        }
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
