import { boardService } from '../_services';
import { boardConstants } from '../_constants';

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
          created_at: "2017-12-23T03:46:36.000Z",
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
          created_at: "2017-12-23T03:46:36.000Z",
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
          created_at: "2017-12-23T03:46:36.000Z",
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
          created_at: "2017-12-23T03:46:36.000Z",
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
          created_at: "2017-12-23T03:46:36.000Z",
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
          created_at: "2017-12-23T03:46:36.000Z",
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
          created_at: "2017-12-23T03:46:36.000Z",
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
          created_at: "2017-12-23T03:46:36.000Z",
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
