import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { yupAddressScema } from "../../../utils/yupFormSchema";
import CountryData from "../../../utils/indiaStatesAndCities.json";
import "./addressForm.css";

interface addressFormSchema {
  name: string;
  country: string;
  state: string;
  city: string;
  pincode: string;
  address: string;
}

interface addressFormProps {
  index: number;
  setAddresses: Function;
}

function AddressForm({ index, setAddresses }: addressFormProps) {
  const [toggleState, setToggleState] = useState(true);
  const initialValues: addressFormSchema = {
    name: `Address ${index + 1}`,
    country: "India",
    state: "",
    city: "",
    pincode: "",
    address: "",
  };

  const countryDataArray = Object.entries(CountryData);

  const [selectedStateIndex, setSelectedStateIndex] = useState(0);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yupAddressScema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty, values, setFieldValue } =
          formik;

        return (
          <div>
            <div className="addressWrapper">
              <div
                className="addressTopBarWrapper"
                onClick={() => {
                  setToggleState((prev) => !prev);
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Address {index + 1}
                </div>
                <img
                  src={
                    require("../../../assets/icons/chevron-down-solid.svg")
                      .default
                  }
                  alt="mySvgImage"
                  style={{ height: "20px" }}
                />
              </div>
              <div
                className={
                  toggleState ? "addressOpenState" : "addressCloseState"
                }
              >
                <div className="fieldColumnMargin">
                  <div className="fieldColumn">
                    <label>What do you want to call this address?</label>

                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className={
                        errors.name && touched.name
                          ? "inputError"
                          : "noErrorInput"
                      }
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className="error"
                    />
                  </div>
                </div>

                <div className="fieldColumnMargin">
                  <div className="fieldColumn">
                    <label>Country</label>

                    <Field
                      type="text"
                      name="country"
                      id="country"
                      className={
                        errors.country && touched.country
                          ? "inputError"
                          : "noErrorInput"
                      }
                    />
                    <ErrorMessage
                      name="country"
                      component="span"
                      className="error"
                    />
                  </div>
                </div>

                <div className="fieldColumnMargin">
                  <div className="fieldColumn">
                    <label>State</label>

                    <Field
                      as="select"
                      name="state"
                      id="state"
                      className={
                        errors.state && touched.state
                          ? "inputError"
                          : "noErrorInput"
                      }
                      onChange={(e: any) => {
                        setSelectedStateIndex(e.target.value);
                        setFieldValue("state", e.target.value);
                      }}
                    >
                      {countryDataArray.map((state, index) => {
                        return (
                          <option key={index} value={index}>
                            {state[0]}
                          </option>
                        );
                      })}
                    </Field>
                    <ErrorMessage
                      name="country"
                      component="span"
                      className="error"
                    />
                  </div>
                </div>

                <div className="fieldColumnMargin">
                  <div className="fieldColumn">
                    <label>City</label>

                    <Field
                      as="select"
                      name="city"
                      id="city"
                      className={
                        errors.city && touched.city
                          ? "inputError"
                          : "noErrorInput"
                      }
                    >
                      {countryDataArray[selectedStateIndex][1].map((city) => {
                        return (
                          <option key={city.toString()} value={city.toString()}>
                            {city}
                          </option>
                        );
                      })}
                    </Field>
                    <ErrorMessage
                      name="country"
                      component="span"
                      className="error"
                    />
                  </div>
                </div>

                <div className="fieldColumnMargin">
                  <div className="fieldColumn">
                    <label>Address</label>

                    <Field
                      type="text"
                      name="address"
                      id="address"
                      className={
                        errors.address && touched.address
                          ? "inputError"
                          : "noErrorInput"
                      }
                    />
                    <ErrorMessage
                      name="address"
                      component="span"
                      className="error"
                    />
                  </div>
                </div>

                <div className="fieldColumnMargin">
                  <div className="fieldColumn">
                    <label htmlFor="pincode">Pincode</label>

                    <Field
                      type="text"
                      name="pincode"
                      id="pincode"
                      maxLength="6"
                      className={
                        errors.pincode && touched.pincode
                          ? "inputError"
                          : "noErrorInput"
                      }
                    />
                    <ErrorMessage
                      name="pincode"
                      component="span"
                      className="error"
                    />
                  </div>
                </div>

                {/* SAVE BUTTON */}

                <div className="fieldColumnMargin">
                  <button
                    className="saveButton"
                    disabled={false}
                    onClick={() => {
                      const finalValues: addressFormSchema = {
                        name: values.name,
                        country: values.country,
                        state:
                          countryDataArray[selectedStateIndex][0].toString(),
                        city: values.city,
                        pincode: values.pincode,
                        address: values.address,
                      };
                      setAddresses((prev: any) => [...prev, values]);
                      setToggleState(false);
                      console.log(values);
                    }}
                  >
                    Save Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default AddressForm;
