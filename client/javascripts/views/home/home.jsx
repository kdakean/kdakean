import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import Board               from './../boards/Board.jsx';

class PublicHomePage extends Component {

  render() {
    return (
      <div className="container pt-3">
        <Row>
          <Col xs="12" sm="6" md="4" lg="3">
            <Board></Board>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PublicHomePage;
