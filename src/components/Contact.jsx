import { FaArrowRight } from "react-icons/fa";
import "../style/Contact.css";
import map from "../assets/map.png"
function Contact() {
  return (
    <>
      <section id="contact" className="backgroundimg bg-cover bg-no-repeat" style={{ backgroundImage: `url(${map})` }}>
        <div className="contact">
          <div className="row justify-between m-3"></div>
        </div>
        <div>
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
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="email"
                    className="form-control w-full input-box"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
                <div className="col-span-1">
                  <input
                    type="text"
                    className="form-control w-full input-box"
                    placeholder="Phone Number"
                    name="phone"
                  />
                </div>
                <div className="col-span-1 ml-2">
                  <select
                    className="form-select w-full input-box"
                    aria-label="Default select example"
                    name="intrested_in"
                    style={{color:"#000"}}
                  >
                    <option selected>Intrested In</option>
                    <option value="frontend">Web developer</option>
                    <option value="mobileapp">Mobile app developer</option>
                    <option value="backend">Backend developer</option>
                    <option value="ui/ux">UI/UX designer</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 mt-3">
                <div className="col-span-1">
                  <textarea
                    className="form-control w-full "
                    placeholder="Message"
                    name="messages"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="agreeTerms"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I agree to the terms & conditions of Ashirwad infotech.
                </label>
                <div className="error"></div>
              </div>
              <button className="mt-4 button" >
                Send your inquiry
                <FaArrowRight className="ms-3" />
              </button>
            </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
