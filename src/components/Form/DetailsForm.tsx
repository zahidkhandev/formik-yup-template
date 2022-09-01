import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { yupFormSchema } from "../../utils/yupFormSchema";
import AddressForm from "./AddressForm/AddressForm";
import "./detailsForm.css";

interface formSchema {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  addresses: Array<Object>;
}

const initialValues: formSchema = {
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  addresses: [],
};

function DetailsForm() {
  const [addresses, setAddresses] = useState<Array<Object>>([]);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yupFormSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty, values, setFieldValue } =
          formik;

        return (
          <Form>
            <div className="formWrapper">
              {/* FIRST COLUMN */}
              <div className="formColumn">
                <h1 className="title">General Details</h1>

                {/* NAME ROW */}
                <div className="nameRow">
                  {/* FIRST NAME FIELD */}

                  <div className="fieldColumn">
                    <label htmlFor="fname">First Name</label>

                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      className={
                        errors.firstName && touched.firstName
                          ? "inputError"
                          : "noErrorInput"
                      }
                    />
                    <ErrorMessage
                      name="firstName"
                      component="span"
                      className="error"
                    />
                  </div>

                  {/* LAST NAME FIELD */}

                  <div className="fieldColumn">
                    <label htmlFor="lname">Last Name</label>

                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      className={
                        errors.lastName && touched.lastName
                          ? "inputError"
                          : "noErrorInput"
                      }
                    />
                    <ErrorMessage
                      name="lastName"
                      component="span"
                      className="error"
                    />
                  </div>
                </div>

                {/* EMAIL FIELD */}
                <div className="fieldColumnMargin">
                  <div className="fieldColumn">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={
                        errors.email && touched.email
                          ? "inputError"
                          : "noErrorInput"
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error"
                    />
                  </div>
                </div>

                {/* PHONE NUMBER FIELD */}
                <div className="fieldColumnMargin">
                  <div className="fieldColumn">
                    <label htmlFor="tel">Phone Number</label>
                    <div
                      className={
                        errors.phoneNumber && touched.phoneNumber
                          ? "phoneNumError"
                          : "phoneNumField"
                      }
                    >
                      <span className="countryCode">+91</span>
                      <Field
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        maxLength="10"
                        className="phoneNumInput"
                      />
                    </div>
                    <ErrorMessage
                      name="phoneNumber"
                      component="span"
                      className="error"
                    />
                  </div>
                </div>
              </div>

              {/* SECOND COLUMN */}

              <div className="formColumn">
                <div className="addressRow">
                  <h1 className="title">Addresses</h1>
                  <div
                    onClick={() => {
                      setAddresses((prev) => [...prev, {}]);
                      console.log(values);
                    }}
                    className="addAddress"
                  >
                    <img
                      src={require("../../assets/icons/plus-solid.svg").default}
                      alt="mySvgImage"
                      style={{ height: "20px" }}
                    />
                    Add Address
                  </div>
                </div>
                {addresses.map((address, index) => {
                  return (
                    <AddressForm
                      index={index}
                      key={index}
                      setAddresses={setAddresses}
                    />
                  );
                })}
              </div>
            </div>
            <button
              className="submitButton"
              onClick={() => {
                setFieldValue("addresses", addresses);
              }}
            >
              Save
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default DetailsForm;
