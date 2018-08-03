import boardsList from './board/boardsList';
import boardDetail from './board/boardDetail';

export default function reducer(state={
    boardsList: [],
    boardDetail: {},
  }, action) {
    return {
      ...state,
      boardsList: boardsList(state.boardsList, action),
    }
};
