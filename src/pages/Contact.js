import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.8290023424493!2d75.84608237530824!3d30.863462174521555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8261414b0a67%3A0xd78f0e1b183ef436!2sSAI%20MANDIR!5e0!3m2!1sen!2sin!4v1674599055093!5m2!1sen!2sin"
                width="600"
                title="maps"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact Us</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email*"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        className="w-100 form-control"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5 " />
                        <address className="mb-0"> Ludhiana, Punjab</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+91 8475522698">+91 8475522698</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:info@BazaarBoost.com">
                          info@BazaarBoost.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BsInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - Friday 10 AM - 5 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
