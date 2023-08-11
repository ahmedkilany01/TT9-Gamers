import React from "react";
import Style from "./style.module.css";
import RightDiv from "../../components/SignUp/SignUpQuote";
import LeftDiv from "../../components/SignUp/SignUpForm";

const SignUpPage = () => {
  return (
    <section className={Style.section}>
      <RightDiv />
      <LeftDiv />
    </section>
  );
};

export default SignUpPage;
