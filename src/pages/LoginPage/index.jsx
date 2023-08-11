import React from "react";
import Style from "./style.module.css";
import FormLogin from "../../components/Login/FormLogin";
import QuoteLogin from "../../components/Login/QuoteLogin";

const LoginPage = () => {
  return (
    <section className={Style.section}>
      <FormLogin />
      <QuoteLogin />
    </section>
  );
};

export default LoginPage;
