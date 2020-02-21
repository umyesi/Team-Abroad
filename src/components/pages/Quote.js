import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { sendMessage } from "../../store/actions/contactActions";
import emailsent from "../../assets/images/emailsent.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import Select from "react-select";
// import DayPicker from "react-day-picker";
// import "react-day-picker/lib/style.css";
// import PropTypes from "prop-types";
// import DayPickerInput from "react-day-picker/DayPickerInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

class Contact extends React.Component {
  get initialValues() {
    return {
      name: "",
      surname: "",
      phone: "",
      email: "",
      program: "",
      residence: "",
      message: "",
      birthDate: "",
      date: ""
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
    } else if (!emailTest.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.message) {
      errors.message = "Required";
    } else if (!messageTest.test(values.message)) {
      errors.message = "Your message must be at least 10 characters long";
    }
    if (!phoneTest.test(values.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!values.program || values.program == "undefined") {
      errors.program = "Required";
    }

    return errors;
  };

  render() {
    console.log(new Date());
    const { messageSent, sendingError } = this.props;
    const includedDates = [new Date("2020-02-01"), new Date("2020-03-01")];

    return (
      <div className="quote-container">
        <div className="title">
          <h2>Get a Quote</h2>
          <hr />
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
            {({ touched, errors, isSubmitting, values, setFieldValue }) => (
              <Form className="row">
                <div className="col-6 mb-4">
                  <Field
                    name="name"
                    id="name"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="col-6">
                  <Field
                    className="form-control"
                    name="surname"
                    id="surname"
                    placeholder="Last Name"
                  />
                </div>

                <div className="col-6 mb-4">
                  <Field
                    className="form-control"
                    name="birthDate"
                    placeholder="Date of Birth"
                  />
                </div>

                <div className="col-6">
                  <Field
                    className="form-control"
                    name="residence"
                    placeholder="Country of Residence"
                  />
                </div>

                <div className="col-6 mb-4">
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
                <div className="col-6">
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
                <div className="col-6 ">
                  <Field
                    component="select"
                    name="program"
                    className={`program ${
                      touched.program && errors.program ? "is-invalid" : ""
                    }`}
                  >
                    <option value="undefined">-- Select Program --</option>
                    <option value="English">English Program</option>
                    <option value="French">French Program</option>
                    <option value="Internship">Internship Program</option>
                  </Field>
                  <ErrorMessage
                    component="div"
                    name="program"
                    className="invalid-feedback"
                  />
                </div>
                <div className="col-6 date-picker-container">
                  <DatePicker
                    className="date-picker"
                    selected={values.date}
                    dateFormat="MMMM d, yyyy"
                    className="form-control"
                    name="date"
                    onChange={dates => setFieldValue("date", dates)}
                    includeDates={includedDates}
                    placeholderText=" Please choose the date that is most convenient to you "
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
                    {isSubmitting ? "Please wait..." : "Send Request"}
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
