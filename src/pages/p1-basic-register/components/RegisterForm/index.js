import Input from "./Input";

import style from "./style.module.css";

function RegisterForm() {
  return (
    <form className={style["register-form"]}>
      <h1 className={style["register-header"]}>Register</h1>
      <div className={style["register-inputs"]}>
        <Input type={"text"} label={"Name"} />
        <Input type={"email"} label={"Email"} />
        <Input type={"password"} label={"Password"} />
      </div>

      <div className={style["register-terms"]}>
        <div className={style["register-checkbox"]} type={"checkbox"}></div>
        <span className={style["register-sentence"]}>
          I agree to the <a href="/">terms of use</a> and{" "}
          <a href="/">privacy policy</a>.
        </span>
      </div>

      <button className={style["register-button"]}>Register</button>
      <div style={{fontSize:"14px"}} className={style["register-sentence"]}>Already have an account? <a href="/">Sign in here.</a></div>
    </form>
  );
}

export default RegisterForm;
