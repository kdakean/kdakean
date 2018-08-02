import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardText, CardBody,
  CardTitle, CardFooter } from 'reactstrap';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

class Board extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  dropdownOptions() {
    return(
      <Dropdown isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
                className="card-options">
        <DropdownToggle
          tag="span"
        >
          <FontAwesomeIcon icon="ellipsis-h" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <FontAwesomeIcon icon="edit" />
            <span className="pl-1">
              Edit
            </span>
          </DropdownItem>
          <DropdownItem divider/>
          <DropdownItem className="text-danger">
            <FontAwesomeIcon icon="trash-alt" />
            <span className="pl-1">
              Delete
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }

  render() {
    const {board} = this.props;

    return (
          <Card>
            <CardBody className="table">
              {this.dropdownOptions()}
              <CardTitle className="card-caption">
                {board.name}
              </CardTitle>
              <CardText>
                {board.description}
              </CardText>
            </CardBody>
            <CardFooter>
              <div className="d-flex justify-content-between">
                <div className="stats">
                  <FontAwesomeIcon icon="tasks" />
                  <span className="pl-1">
                    {board.total_tasks}
                  </span>
                </div>
                <div className="stats">
                  <FontAwesomeIcon icon="clock" />
                  <span className="pl-1">
                    {board.created_at}
                  </span>
                </div>
              </div>
            </CardFooter>
          </Card>
    );
  }
}

export default Board;
