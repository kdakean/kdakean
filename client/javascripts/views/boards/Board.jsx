import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardText, CardBody,
  CardTitle, CardFooter } from 'reactstrap';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { toggleModalBoard } from './../../redux/actions/modal.actions.js';
import { deleteBoard } from './../../redux/actions/board.actions.js';
import { swal, close } from 'react-redux-sweetalert';

@connect((store) => {
  return {};
}, {toggleModalBoard, swal, close, deleteBoard})
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

  toggleModalBoard = (event) => {
    event.preventDefault();
    const {board} = this.props;
    this.props.toggleModalBoard(board.slug);
  }

  clickDeleteBoard = (event) => {
    event.preventDefault();
    const {board, swal, close, deleteBoard} = this.props;
    swal({
      title: 'Are you sure?',
      text: 'Delete board "' + board.name + '"',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: 'red',
      onConfirm: function() {
        console.log('I in')
        deleteBoard(board.slug);
        close();
      }
    })
  }

  dropdownOptions() {
    const {Owner} = this.props.board;

    return(
      <Dropdown isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
                className="card-options">
        <DropdownToggle
          tag="span"
        >
          <FontAwesomeIcon icon="ellipsis-h" />
        </DropdownToggle>
        <DropdownMenu className="m-0 p-0">
          <DropdownItem onClick={this.toggleModalBoard} className="btn-sm">
            <FontAwesomeIcon icon="edit" />
            <span className="pl-1">
              Edit
            </span>
          </DropdownItem>
          {currentUser.id == Owner.id && <DropdownItem divider className="m-0"/>}

          {
            currentUser.id == Owner.id &&
            <DropdownItem onClick={this.clickDeleteBoard} className="text-danger btn-sm">
              <FontAwesomeIcon icon="trash-alt" />
              <span className="pl-1">
                Delete
              </span>
            </DropdownItem>
          }
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
                    {board.tasks_count}
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
