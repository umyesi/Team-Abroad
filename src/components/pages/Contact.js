import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { sendMessage } from "../../store/actions/contactActions";
import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import emailsent from "../../assets/images/emailsent.png";
import { Formik, Form, Field, ErrorMessage } from "formik";

class Contact extends React.Component {
  get initialValues() {
    return {
      name: "",
      surname: "",
      phone: "",
      email: "",
      message: ""
    };
  }

  handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
    console.log(values);
    this.props.sendMessage(values);
  };

  validate = values => {
    const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!emailTest.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  render() {
    const { messageSent, sendingError } = this.props;

    return (
      <div className="contact-container">
        <div className="title">
          <h2>Contact Us</h2>
          <hr />
        </div>

        <div className="contact-info pl-1">
          <FaPhone size={23} className="" />
          <p className="pt-1">+33 6 05 88 96 28</p>
          <MdLocationOn size={28} className="" />
          <div>
            <p className="">63, rue de la fosse aux bergers</p>
            <p>Villemomble, France</p>
          </div>
          <MdEmail size={26} />
          <p className="pt-1">umyesigiorgi@gmail.com</p>
        </div>

        {messageSent ? (
          <div className="message-sent">
            <img className="email-sent" src={emailsent} alt="message-sent" />
            <p>Your message has been successfully sent</p>
          </div>
        ) : (
          <Formik
            initialValues={this.initialValues}
            validate={this.validate}
            onSubmit={this.handleSubmit}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form className="row">
                <div className="col-6 mb-4">
                  <Field
                    name="name"
                    id="name"
                    placeholder="First name"
                    className="form-control"
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  />
                </div>
                <div className="col-6">
                  <Field
                    className="form-control"
                    name="surname"
                    id="surname"
                    placeholder="Last name"
                  />
                </div>

                <div className="col-6">
                  <Field
                    name="phone"
                    className="form-control"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-6">
                  <Field
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                    //type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  />
                </div>

                <div className="mt-4 col-12">
                  <Field
                    className={`form-control text-input ${
                      touched.message && errors.message ? "is-invalid" : ""
                    }`}
                    type="textarea"
                    id="message"
                    name="message"
                    placeholder="Message"
                  />
                  <ErrorMessage
                    component="div"
                    name="message"
                    className="invalid-feedback"
                  />
                </div>
                <div className="col align-left mt-5">
                  <Button
                    disabled={isSubmitting}
                    variant="secondary"
                    type="submit"
                  >
                    {isSubmitting ? "Please wait..." : "Send Message"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        )}

        <div className="text-center text-danger mt-3">
          {sendingError ? <p>{sendingError}</p> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messageSent: state.message.messageSent,
    sendingError: state.message.sendingError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: creds => dispatch(sendMessage(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
