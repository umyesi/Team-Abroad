import React, { Component } from "react";
import { connect } from "react-redux";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

class AuthModals extends Component {
  constructor() {
    super();
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
    //this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
    if (this.state.width < 775) {
      this.props.hideModal();
    }
  };

  switchAuthModal = () => {
    const modalList = [SignInModal, SignUpModal];
    const { currIndex } = this.props;

    if (currIndex < modalList.length - 1) {
      this.props.switchModal(currIndex + 1);
    } else if (currIndex === modalList.length - 1) {
      this.props.switchModal(currIndex - 1);
    }
  };

  handleModalHide = () => {
    this.props.hideModal();
  };

  render() {
    const modalList = [SignInModal, SignUpModal];
    const { currIndex } = this.props;
    const ModalComponent = modalList[currIndex];

    return (
      <div>
        <ModalComponent
          switchModal={this.switchAuthModal}
          onHide={this.handleModalHide}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currIndex: state.auth.currIndex,
    showModal: state.auth.showModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch({ type: "HIDE_MODAL" }),
    switchModal: currIndex => dispatch({ type: "SWITCH_MODAL", currIndex })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthModals);
