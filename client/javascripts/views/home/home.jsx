import { connect } from 'react-redux';
import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import Board               from './../boards/Board.jsx';
import { fetchBoards } from './../../redux/actions/board.actions.js';

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
    console.log(this.props.boardsList);
    const {boardsList} = this.props;
    const boardsEl = boardsList.map(board =>
      <Col xs="12" sm="6" md="4" lg="3" key={board.id}>
        <Board board={board} key={board.id}></Board>
      </Col>
    )

    return (
      <div className="container pt-3">
        <Row>
          {boardsEl}
        </Row>
      </div>
    );
  }
}

export default Home;
