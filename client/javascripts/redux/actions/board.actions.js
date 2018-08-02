import { boardService } from '../_services';
import { boardConstants } from '../_constants';

export function fetchBoards(options) {
  return function(dispatch) {
    dispatch({type: boardConstants.GET_BOARDS_SUCCESS, payload: {
      boards: [
        {
          id: 123,
          name: "-1 Kdakean",
          description: "This is the description of kdakean.",
          total_tasks: 200,
          created_at: "2018-07-01 00:10:10",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        },
        {
          id: 12,
          name: "0 Kdakean name very long long long long name",
          description: "This is the description description description description sdf sdfsdf sdfsdf sfsd of kdakean.",
          total_tasks: 200,
          created_at: "2018-07-01 00:10:10 +0000",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        },
        {
          id: 1,
          name: "1 Kdakean name very long long long long name",
          description: "This is the description description description description sdf sdfsdf sdfsdf sfsd of kdakean.",
          total_tasks: 200,
          created_at: "2018-07-01 00:10:10 +0000",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        },
        {
          id: 2,
          name: "2 Kdakean name",
          description: "",
          total_tasks: 200,
          created_at: "2018-07-01 00:10:10 +0000",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        },
        {
          id: 3,
          name: "3 Kdakean name very long",
          description: "This is the .",
          total_tasks: 200,
          created_at: "2018-07-01 00:10:10 +0000",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        },
        {
          id: 4,
          name: "4 Kdakean name very long long long long name",
          description: "This is the description description description.",
          total_tasks: 200,
          created_at: "2018-07-01 00:10:10 +0000",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        },
        {
          id: 5,
          name: "5 Kdakean name very long long long long name",
          description: "This is the description.",
          total_tasks: 200,
          created_at: "2018-07-01 00:10:10 +0000",
          owner: {
            id: 1234,
            name: "User Name",
            avarta_url: null
          }
        },
        {
          id: 6,
          name: "6 Kdakean name very long long long long name sure it so long long long long go go",
          description: "",
          total_tasks: 200,
          created_at: "2018-07-01 00:10:10 +0000",
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
