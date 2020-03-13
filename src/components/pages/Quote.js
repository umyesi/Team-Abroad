import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getQuote } from "../../store/actions/contactActions";
import emailsent from "../../assets/images/emailsent.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Quote extends React.Component {
  get initialValues() {
    return {
      name: "",
      surname: "",
      birthdate: "",
      residence: "",
      email: "",
      phone: "",
      program: "",
      date: "",
      number: "",
      flight: "",
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
    console.log("dj");
    setTimeout(() => {
      setSubmitting(false);
    }, 400);

    this.props.getQuote(values);
  };

  validate = values => {
    const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const phoneTest = /^[0-9+-]*$/;
    const numberTest = /^[0-9]*$/;
    let errors = {};
    

    if (!values.email) {
      errors.email = "Required";
    } else if (!emailTest.test(values.email)) {
      errors.email = "Invalid email address";
      errors.all = true;
    }
    if (!phoneTest.test(values.phone)) {
      errors.phone = "Please enter a valid phone number";
      errors.all = true;
    }
    if (!values.program || values.program === "undefined") {
      errors.program = "Required";
      errors.all = true;
    }
    if (!values.number) {
      errors.number = "Required";
    } else if (!numberTest.test(values.number)) {
      errors.number = "Please specify the number of students";
      errors.all = true;
    }
    if (!values.flight || values.flight === "") {
      errors.flight = "Required";
      errors.all = true;
    }
    if (!values.date) {
      errors.date = "Required";
      errors.all = true;
    }
    if (!values.birthdate) {
      errors.birthdate = "Required";
      errors.all = true;
    }
    if (!values.residence) {
      errors.residence = "Required";
      errors.all = true;
    }

    return errors;

  };

  render() {
    const { quoteSent, quoteSendingError } = this.props;
    const includedDates = [new Date("2020-02-01"), new Date("2020-03-01")];

    return (
      <div className="quote-container">
        <div className="title">
          <h2>Get a Quote</h2>
          <hr />
        </div>

        {quoteSent ? (
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
              {({
                touched,
                errors,
                isSubmitting,
                values,
                setFieldValue,
                handleChange
              }) => (
                  <Form className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="name">First Name</label>
                      <Field
                        name="name"
                        // id="name"
                        //placeholder="First Name"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="surname">Last Name</label>
                      <Field
                        className="form-control"
                        name="surname"
                        id="surname"
                      //placeholder="Last Name"
                      />
                    </div>

                    <div className="col-md-6 mb-4 date-picker-container">
                      <label htmlFor="birthday" className="required">
                        Date of Birth
                  </label>
                      <Field
                        component={DatePicker}
                        className={`date-picker form-control ${
                          touched.birthdate && errors.birthdate ? "is-invalid" : ""
                          }`}
                        selected={values.birthdate}
                        onChange={dates => setFieldValue("birthdate", dates)}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label htmlFor="residence" className="required">
                        Country of Residence
                  </label>
                      <Field
                        className={`form-control ${
                          touched.residence && errors.residence ? "is-invalid" : ""
                          }`}
                        name="residence"
                      // placeholder="Country of Residence"
                      />
                      <ErrorMessage
                        component="div"
                        name="residence"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label htmlFor="Email Address" className="required">
                        Email Address
                  </label>
                      <Field
                        className={`form-control ${
                          touched.email && errors.email ? "is-invalid" : ""
                          }`}
                        //type="email"
                        name="email"
                        id="email"
                      //placeholder="Email Address"
                      />
                      <ErrorMessage
                        component="div"
                        name="email"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="phone">Phone Number</label>
                      <Field
                        className={`form-control ${
                          touched.phone && errors.phone ? "is-invalid" : ""
                          }`}
                        name="phone"
                        id="phone"
                      // placeholder="Phone Number"
                      />
                      <ErrorMessage
                        component="div"
                        name="phone"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="program" className="required">
                        Select Program
                  </label>
                      <Field
                        component="select"
                        name="program"
                        className={`select form-control ${
                          touched.program && errors.program ? "is-invalid" : ""
                          }`}
                      >
                        <option value="" disabled className="d-none"></option>
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
                    <div className="col-md-6 mb-4 date-picker-container">
                      <label htmlFor="date" className="required">
                        Select starting Date
                  </label>
                      <Field
                        component={DatePicker}
                        className={`date-picker form-control ${
                          touched.date && errors.date ? "is-invalid" : ""
                          }`}
                        selected={values.date}
                        dateFormat="MMMM d, yyyy"
                        name="date"
                        onChange={dates => setFieldValue("date", dates)}
                        includeDates={includedDates}
                      />
                      <ErrorMessage
                        component="div"
                        name="date"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="number" className="required">
                        Number of Students
                  </label>
                      <Field
                        className={`form-control ${
                          touched.number && errors.number ? "is-invalid" : ""
                          }`}
                        name="number"
                      //id="phone"
                      //placeholder="Number of Students"
                      ></Field>
                      <ErrorMessage
                        component="div"
                        name="number"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="flight" className="required">
                        Include Flights
                  </label>
                      <Field
                        component="select"
                        name="flight"
                        className={`form-control select ${
                          touched.flight && errors.flight ? "is-invalid" : ""
                          }`}
                      >
                        <option value="" disabled className="d-none"></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="flight"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="mt-4 col-12 mb-5">
                      <label htmlFor="message">Message</label>
                      <Field
                        className="form-control text-input"
                        component="textarea"
                        type="textarea"
                        //id="message"
                        name="message"
                      />
                    </div>

                    <div className="col align-left">
                      <Button
                        disabled={isSubmitting}
                        variant="secondary"
                        type="submit"
                      >
                        {isSubmitting ? "Please wait..." : "Send Request"}
                      </Button>

                      {errors.all ? <p className="validation-error">Please fill in all required fields.</p> : null}
                    </div>
                  </Form>
                )}
            </Formik>
          )}

        <div className="text-center text-danger mt-3">
          {quoteSendingError ? <p>{quoteSendingError}</p> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quoteSent: state.contact.quoteSent,
    quoteSendingError: state.contact.quoteSendingError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuote: creds => dispatch(getQuote(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
