import "./contact.css";
import Priceoye from "../../assets/priceoye-logo.webp";
import Aevent from "../../assets/AeventLogo.webp";
import Currinda from "../../assets/Currinda.webp";
// import Facebook from "../../assets/alphasquad.jpeg";
import facebookIcon from "../../assets/facebook-icon.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";
import linkedIn from "../../assets/linkedin.png";

import { socialsData } from "../../data/socialsData";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // "service_gsrztsj","template_c3bwzga"
    emailjs
      .sendForm(
        "service_gsrztsj",
        "template_c3bwzga",
        form.current,
        "U3YKMM4TE-pBZaztH"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">Companies I Work With</h1>
        <span className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </span>
        <div className="clientImgs">
          <img src={Priceoye} alt="Client" className="clientImg" />
          <img src={Aevent} alt="Client" className="clientImg" />
          <img src={Currinda} alt="Client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
          />
          <input
            type="text"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="msg"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <div className="">
              {socialsData.linkedIn && (
                <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                  <img src={linkedIn} alt="LinkedIn" className="link" />
                </a>
              )}
            </div>
            <div className="">
              {socialsData.twitter && (
                <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                  <img src={twitterIcon} alt="Twitter" className="link" />
                </a>
              )}
            </div>
            <div className="">
              {socialsData.facebook && (
                <a href={socialsData.facebook} target="_blank" rel="noreferrer">
                  <img src={facebookIcon} alt="Facebook" className="link" />
                </a>
              )}
            </div>
            <div className="">
              {socialsData.instagram && (
                <a
                  href={socialsData.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagramIcon} alt="Instagram" className="link" />
                </a>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
