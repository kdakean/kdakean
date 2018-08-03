import { connect } from 'react-redux';
import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import Board               from './../boards/Board.jsx';
import { fetchBoards } from './../../redux/actions/board.actions.js';
import Masonry from 'react-masonry-component';
const masonryOptions = {
  transitionDuration: 0
};

@connect((store) => {
  return {
    ...store.boardReducers
  };
}, { fetchBoards })
class Home extends Component {
  componentWillMount() {
    this.props.fetchBoards();
  }

  render() {
    const {boardsList} = this.props;
    const boardsEl = boardsList.map(board =>
      <Col xs="12" sm="6" md="4" lg="3" key={board.id}>
        <Board board={board} key={board.id}></Board>
      </Col>
    )

    return (
      <div className="container pt-3">
        <Masonry
          className={'row'}
          options={masonryOptions}>
          {boardsEl}
        </Masonry>
      </div>
    );
  }
}

export default Home;
