import postsList from './board/boardsList';
import postsDetail from './board/boardDetail';

export default function reducer(state={
    boardsList: [],
    boardDetail: {},
  }, action) {
    return {
      ...state,
      boardsList: boardsList(state, action),
      boardDetail: boardDetail(state, action),
    }
};
