import React, { useRef, useState } from "react";
import "./style.scss";
import LongArrow from "../Icons/LongArrow";
import MaterialSymbolsCallOutlineRounded from "../Icons/MaterialSymbolsCallOutlineRounded";
import Email from "../Icons/Email";
import MaterialSymbolsLocationOnOutlineRounded from "../Icons/MaterialSymbolsLocationOnOutlineRounded";
import InputCustom from "../InputCustom";
import emailjs from "@emailjs/browser";
import IcSharpCheck from "../Icons/IcSharpCheck";
import IconoirCancel from "../Icons/IconoirCancel";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setloading] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [firstnameError, setFirstnameError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [mailSend, setMailSend] = useState(false);
  const [mailNotSend, setMailNotSend] = useState(false);

  const handleChangeFirstname = (e: any) => {
    if (e.target.value !== "") {
      e.currentTarget.classList.add("not-vide");
      setFirstnameError(false);
    } else {
      e.currentTarget.classList.remove("not-vide");
    }
    setFirstname(e.target.value);
  };

  const handleChangeName = (e: any) => {
    if (e.target.value !== "") {
      e.currentTarget.classList.add("not-vide");
      setNameError(false);
    } else {
      e.currentTarget.classList.remove("not-vide");
    }
    setName(e.target.value);
  };

  const handleChangeEmail = (e: any) => {
    if (e.target.value !== "") {
      e.currentTarget.classList.add("not-vide");
      setEmailError(false);
    } else {
      e.currentTarget.classList.remove("not-vide");
    }
    setEmail(e.target.value);
  };

  const handleChangeSubject = (e: any) => {
    if (e.target.value !== "") {
      e.currentTarget.classList.add("not-vide");
      setSubjectError(false);
    } else {
      e.currentTarget.classList.remove("not-vide");
    }
    setSubject(e.target.value);
  };

  const handleChangeMessage = (e: any) => {
    if (e.target.value !== "") {
      setMessageError(false);
      e.currentTarget.classList.add("not-vide");
    } else {
      e.currentTarget.classList.remove("not-vide");
    }
    setMessage(e.target.value);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (firstname === "") {
      setFirstnameError(true);
    }
    if (name === "") {
      setNameError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (subject === "") {
      setSubjectError(true);
    }
    if (message === "") {
      setMessageError(true);
    } else if (
      firstname !== "" &&
      name !== "" &&
      email !== "" &&
      subject !== "" &&
      message !== ""
    ) {
      if (form.current) {
        setloading(true);
        emailjs
          .sendForm(
            "service_pvegg7c",
            "template_sh2l4e9",
            form.current,
            "S0ZpRMium8vRLGUbh"
          )
          .then(() => {
            setName("");
            setFirstname("");
            setEmail("");
            setMessage("");
            setSubject("");
            setMailSend(true);
          })
          .catch(() => {
            setMailNotSend(true);
          })
          .finally(() => setloading(false));
      }
    }
  };

  return (
    <section id="contact" className="contact_wrapper">
      <div className="contact_container">
        <div>
          <h2 className="sixCaps">
            Wanna work with me ! <LongArrow />
          </h2>
          <span>Or just say hello!</span>
          <div className="informations">
            <span>
              <MaterialSymbolsLocationOnOutlineRounded />
              Antananarivo, Madagascar
            </span>
            <a href="tel:0328512630">
              <MaterialSymbolsCallOutlineRounded />+261 32 85 126 30
            </a>
            <a href="mailto:rakotomampionona12@gmail.com">
              <Email />
              rakotomampionona12@gmail.com
            </a>
          </div>
        </div>
        <div className="contact_form">
          <form ref={form} onSubmit={sendEmail}>
            <p>
              FOR BOOKINGS, COMMERCIAL OR GENERAL ENQUIRIES - Please use the
              contact form below.
            </p>
            <div className="input-wrapper">
              <InputCustom
                label="Name"
                name="user_first_name"
                value={firstname}
                onChange={handleChangeFirstname}
                haveError={firstnameError}
                type="text"
              />
              <InputCustom
                label="Lastname"
                name="user_name"
                value={name}
                onChange={handleChangeName}
                haveError={nameError}
                type="text"
              />
              <InputCustom
                label="Email"
                name="user_email"
                value={email}
                onChange={handleChangeEmail}
                haveError={emailError}
                type="email"
              />
              <InputCustom
                label="Subject"
                name="user_subject"
                value={subject}
                onChange={handleChangeSubject}
                haveError={subjectError}
                type="text"
              />
              <div
                className={`input-container ${
                  messageError ? "error-input" : ""
                }`}
              >
                <textarea
                  name="user_message"
                  id="message-text"
                  rows={6}
                  value={message}
                  onChange={handleChangeMessage}
                ></textarea>
                <label htmlFor="message-text">Message *</label>
              </div>
            </div>
            {(firstnameError ||
              nameError ||
              emailError ||
              subjectError ||
              messageError) && (
              <span className="error-message">
                (*) Please fill in the empty fields.
              </span>
            )}
            <button
              disabled={loading}
              type="submit"
              className={`${loading && "button--loading"}`}
            >
              {loading ? <span></span> : "SEND"}
            </button>
            {mailSend && (
              <div className="toast-message success">
                <span>
                  <IcSharpCheck />
                </span>
                Message sent successfully!
              </div>
            )}

            {mailNotSend && (
              <div className="toast-message error">
                <span>
                  <IconoirCancel />
                </span>
                Mail not sent. Try again!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
