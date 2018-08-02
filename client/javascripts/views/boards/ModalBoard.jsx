import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalBoard extends Component {
  handleSaveandApply = data => {
    console.log(data)
  }
  render() {
    const {isOpen, toggle} = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle} className={'modal-board'}>
        <ModalBody className="text-center p-0">
          <h1>Modal board</h1>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" size="sm" onClick={this.handleSaveandApply}>
            Save and Apply
          </Button>
          <Button color="secondary" size="sm" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalBoard;
