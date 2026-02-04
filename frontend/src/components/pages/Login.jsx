import React from "react";
import "../styles/login.css";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./i18n";
import { useTranslation } from "react-i18next";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { i18n } = useTranslation();

  const options = [
    {
      label: "Svenska",
      value: "sv",
      flag: "https://storage.123fakturere.no/public/flags/SE.png",
    },
    {
      label: "English",
      value: "en",
      flag: "https://storage.123fakturere.no/public/flags/GB.png",
    },
  ];
  const selected =
    options.find((opt) => opt.value === i18n.language) || options[1];

  const handleSelect = (opt) => {
    i18n.changeLanguage(opt.value);
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    if (email.trim() === "") {
      setEmailError("This field cannot be empty");
      isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("This field cannot be empty");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      alert("Login success ");
    }
  };
  const { t } = useTranslation();

  return (
    <>
      <nav className="navbar">
        <div>
          <img
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            alt="Logo"
            className="logo"
          ></img>
        </div>

        <ul>
          <li>
            <a href="">{t("Home")}</a>
          </li>
          <li>
            <a href="">{t("Order")}</a>
          </li>
          <li>
            <a href="">{t("OurCustomer")}</a>
          </li>
          <li>
            <a href="">{t("AboutUs")}</a>
          </li>
          <li>
            <a href="">{t("contact")}</a>
          </li>
          <div className="langSelect">
            <button
              type="button"
              className="langBtn"
              onClick={() => setOpen(!open)}
            >
              <span>{selected.label}</span>
              <img
                src={selected.flag}
                alt={selected.label}
                className="flagIcon"
              />
            </button>
            {open && (
              <div className="langDropdown">
                {options.map((opt) => (
                  <div
                    key={opt.value}
                    className="langOption"
                    onClick={() => handleSelect(opt)}
                  >
                    <span>{opt.label}</span>
                    <img src={opt.flag} alt={opt.label} className="flagIcon" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </ul>
      </nav>

      <form onSubmit={handleSubmit}>
        <h1>{t("login")}</h1>
        <label>{t("emailLabel")}</label>
        <input
          type="text"
          placeholder={t("emailPlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="errorText">{emailError}</p>}
        <label>{t("passwordLabel")}</label>

        <div className="passwordBox">
          <input
            type={showPassword ? "text" : "password"}
            placeholder={t("passwordPlaceholder")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="passwordInput"
          />

          <span
            className="eyeIcon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
        <button>{t("Log in")}</button>
        <div className="register">
          <a className="re" href="">
            {t("register")}
          </a>
          <a className="fo" href="">
            {t("forgot")}
          </a>
        </div>
      </form>

      <footer className="main-footer">
        <div className="footer-top">
          <h2 className="footer-add">{t("123 Fakturera")}</h2>
          <nav className="footer-nav">
            <a href="#">{t("Home")}</a>
            <a href="#">{t("Order")}</a>
            <a href="#">{t("contact")}</a>
          </nav>
        </div>

        <hr className="footer-line" />

        <div className="footer-bottom">
          <p>{t("© Lättfaktura, CRO no. 638537, 2025. All rights reserved.")}</p>
        </div>
      </footer>
    </>
  );
}

export default Login;
