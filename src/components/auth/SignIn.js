import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import styled from "styled-components";

const Styles = styled.div`
  .wrapper {
    max-width: 500px;
    margin: 50px 0;
    padding: 40px 25px;
    background-color: whitesmoke;
    font-family: Arial;
    font-size: 16px;
    line-height: 1.5rem;
    letter-spacing: 1px;
  }

  .menu {
    display: flex;
    justify-content: center;
  }

  .modal-wrapper {
      width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100% - 40px);
    height: calc(100vh - 100px);
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    padding: 50px 20px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .no-modal-wrapper {
    max-width: 500px;
    font-size: 16px;
    line-height: 30px;
    background-color: #a4d1c8;
    padding: 20px;
    margin-top: 50px;
    border-radius: 10px;
    
  }

  .modal {
    width: 100%;
    height: fit-content;
    max-width: 300px;
    background-color: #a4d1c8;
    position: relative;
    border: 5px;
    box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    padding: 20px;
  }

  .modal p {
    font-size: 12px;
    line-height: 24px;
  }

  .link {
    background-color: #537d91;
    color: white;
    font-size: 20px;
    font-family: Arial;
    padding: 10px;
    border-radius: 2px;
    margin-right: 10px;
  }
`;

class Modal extends Component {
  constructor() {
    super();
    this.modalRef = React.createRef();
    console.log(this.modalRef);
  }

  componentDidMount() {
    console.log(this.props);
    const { isModal } = this.props;

    if (isModal) {
      disableBodyScroll(this.modalRef.current);
    }
  }

     componentWillUnmount() {
       enableBodyScroll(this.modalRef.current);
   }

  render() {
    const { id } = this.props.match.params;

    if (this.props.isModal) {
      return (
        <Styles>
          <div
            ref={this.modalRef}
            className="modal-wrapper"
            onClick={() => this.props.history.goBack()}
          >
            <div className="modal" onClick={e => e.stopPropagation()}>
              <h1>{id}</h1>
              <p>ssimon</p>
            </div>
          </div>
        </Styles>
      );
    } else {
      return (
        <Styles>
          <div className="no-modal-wrapper">
            <h1>{id}</h1>
            <p>nu xar maimuni</p>
          </div>
        </Styles>
      );
    }
  }
}

export default withRouter(Modal);
