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
      message: "",
      all: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 200);
  }

  handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
    console.log(values);
    this.props.sendMessage(values);
  };

  validate = values => {
    const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const messageTest = /^[^]{10,}$/;
    const phoneTest = /^[0-9+-]*$/;
    let errors = {};

    if (!values.email) {
      errors.email = "Required";
      errors.all = true;
    } else if (!emailTest.test(values.email)) {
      errors.email = "Invalid email address";
      errors.all = true;
    }
    if (!values.message) {
      errors.message = "Required";
    } else if (!messageTest.test(values.message)) {
      errors.message = "Your message must be at least 10 characters long";
      errors.all = true;
    }
    if (!phoneTest.test(values.phone)) {
      errors.phone = "Please enter a valid phone number";
      errors.all = true;
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
              {({ touched, errors, isSubmitting, values }) => (
                <Form className="row">
                  <div className="col-md-6 mb-4">
                    <Field
                      name="name"
                      id="name"
                      placeholder="First name"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <Field
                      className="form-control"
                      name="surname"
                      id="surname"
                      placeholder="Last name"
                    />
                  </div>

                  <div className="col-md-6 mb-4">
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
                  <div className="col-md-6 mb-4">
                    <Field
                      className={`form-control ${
                        touched.phone && errors.phone ? "is-invalid" : ""
                        }`}
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                    />
                    <ErrorMessage
                      component="div"
                      name="phone"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mt-4 col-12">
                    <Field
                      className={`form-control text-input ${
                        touched.message && errors.message ? "is-invalid" : ""
                        }`}
                      component="textarea"
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
                    {errors.all ? <p className="validation-error">Please fill in all required fields.</p> : null}
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
    messageSent: state.contact.messageSent,
    sendingError: state.contact.sendingError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: creds => dispatch(sendMessage(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
