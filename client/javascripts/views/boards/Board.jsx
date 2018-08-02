import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardText, CardBody,
  CardTitle, CardFooter } from 'reactstrap';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

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
          <Card className="board">
            <CardBody className="table">
              {this.dropdownOptions()}
                <CardTitle className="card-caption">
                  <Link to={`/k/${board.slug}`} className="">
                    {board.name}
                  </Link>
                </CardTitle>
              <CardText className="card-description">
                <Link to={`/k/${board.slug}`} className="">
                  {board.description}
                </Link>
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
                    <Moment locale="km" format="DD/MMM/YYYY">{board.created_at}</Moment>
                  </span>
                </div>
              </div>
            </CardFooter>
          </Card>
    );
  }
}

export default Board;
