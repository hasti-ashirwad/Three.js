import { useState } from "react"
import { FaArrowRight } from "react-icons/fa";
import "../style/Contact.css";
import map from "../assets/map.png";
import axios from "axios";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { Formik } from "formik";

function Contact() {

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeerror, setAgreeerror] = useState('');
  const handleTermsCheckboxChange = (e) => {
    setAgreeTerms(e.target.checked);
  };


  const submitForm = (values, { resetForm }) => {
    if (agreeTerms) {
      try {
        axios
        .post(process.env.REACT_APP_JOB_URL + "clients/", values, {            headers: {
              "content-type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res)
            if (res.status === 200 || res.status === 201) {
              Swal.fire({
                title: "Data has been submited",
                icon: "success",
                toast: true,
                timer: 3000,
                position: "top-right",
                timerProgressBar: true,
                showConfirmButton: false,
              });
              resetForm();
              setAgreeerror('');
            }
          }).catch((error)=>{
            console.log(error)
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      setAgreeerror('Please accept the terms and conditions')
    }
  };

  return (
    <>
      <section id="contact" className="backgroundimg bg-cover bg-no-repeat" style={{ backgroundImage: `url(${map})` }}>
        <div className="contact">
          <div className="row justify-between m-3"></div>
        </div>
        <div>
        <Formik
            initialValues={initialValues}
            onSubmit={submitForm}
            validationSchema={validationSchema}
          >
            {({
              values,
              errors,
              touched,
              submitForm,
              handleBlur,
              handleChange,
            }) => (
            <div className="col-md-2 contact-review text-white">
              <h2 className="heading text-white">Contact Us</h2>
              <p>Please fill in the form below.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="col-span-1">
                  <input
                    type="text"
                    className="form-control w-full input-box"
                    placeholder="Full Name"
                    name="your_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.your_name}
                  />
                  {errors.your_name && touched.your_name && (
                      <div className="error">{errors.your_name}</div>
                    )}
                </div>
                <div className="col-span-1">
                  <input
                    type="email"
                    className="form-control w-full input-box"
                    placeholder="Email Address"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                      <div className="error">{errors.email}</div>
                    )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
                <div className="col-span-1">
                  <input
                    type="text"
                    className="form-control w-full input-box"
                    placeholder="Phone Number"
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                  />
                  {errors.phone && touched.phone && (
                    <div className="error">{errors.phone}</div>
                  )}
                </div>
                <div className="col-span-1 ml-2">
                  <select
                    className="form-select w-full input-box"
                    aria-label="Default select example"
                    name="intrested_in"
                    style={{color:"#000"}}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.intrested_in}
                  >
                    <option selected>Intrested In</option>
                    <option value="frontend">Web developer</option>
                    <option value="mobileapp">Mobile app developer</option>
                    <option value="backend">Backend developer</option>
                    <option value="ui/ux">UI/UX designer</option>
                  </select>
                  {errors.intrested_in && touched.intrested_in && (
                      <div className="error">{errors.intrested_in}</div>
                    )}
                </div>
              </div>
              <div className="grid grid-cols-1 mt-3">
                <div className="col-span-1">
                  <textarea
                    className="form-control w-full "
                    placeholder="Message"
                    name="messages"
                    rows="3"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.messages}
                  ></textarea>
                  {errors.messages && touched.messages && (
                    <div className="error">{errors.messages}</div>
                  )}
                  </div>
              </div>
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="agreeTerms"
                  value={agreeTerms}
                  onChange={handleTermsCheckboxChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I agree to the terms & conditions of Ashirwad infotech.
                </label>
                {agreeerror && <div className="error">{agreeerror}</div>}
              </div>
              <button className="mt-4 button" disabled={!agreeTerms} onClick={submitForm}>
                Send your inquiry
                <FaArrowRight className="ms-3" />
              </button>
            </div>
          )}
          </Formik>              
        </div>
      </section>
    </>
  );
}

const initialValues = {
  your_name: "",
  email: "",
  phone: "",
  messages: "",
  intrested_in: "",
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const phoneNumeric = /^\d{10}$/;
const validationSchema = Yup.object().shape({
  your_name: Yup.string().required("*Full Name is required"),
  email: Yup.string()
    .email("*Invalid email address")
    .required("*Email is required"),
  phone: Yup
    .string()
    .matches(phoneRegExp, "Enter only numeric")
    .matches(phoneNumeric, "Phone number is not valid")
    .required("Required"),
  intrested_in: Yup.string().required("*Please select an option"),
  messages: Yup.string(),
  agreeTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

export default Contact;
