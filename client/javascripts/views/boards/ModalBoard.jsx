import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import BoardForm from './_BoardForm.jsx';
import { connect } from 'react-redux';
import { createBoard, updateBoard } from './../../redux/actions/board.actions.js';

@connect((store) => {
  return {};
}, { createBoard, updateBoard })
class ModalBoard extends Component {
  submit = data => {
    if(data.id) {
      return (this.props.updateBoard(data))
    } else {
      return (this.props.createBoard(data))
    }
  }
  render() {
    const {isOpen, toggle} = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle} className={'modal-board modal-dialog-centered'}>
        <ModalBody className="p-3">
          <BoardForm onSubmit={this.submit}/>
        </ModalBody>
      </Modal>
    );
  }
}

export default ModalBoard;
