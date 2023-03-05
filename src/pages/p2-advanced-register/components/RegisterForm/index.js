import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./style.module.css";

import Input from "./Input";
import CompanyImage from "./CompanyImage";
import BirthdayForm from "./BirthdayForm";
import GenderForm from "./GenderForm";

function RegisterForm() {
  return (
    <form className={style["register-form"]}>
      <CompanyImage />

      <h1 className={style["register-header"]}>Sign Up</h1>

      <div className={style["register-inputs"]}>
        <Input
          icon={<FontAwesomeIcon icon={faEnvelope} />}
          type={"email"}
          label={"E-mail"}
        />
        <Input
          icon={<FontAwesomeIcon icon={faLock} />}
          type={"password"}
          label={"Password"}
        />
        <Input
          icon={<FontAwesomeIcon icon={faGhost} />}
          type={"text"}
          label={"What should we call you?"}
        />
      </div>

      <BirthdayForm />

      <GenderForm />

      <span className={style["register-sentence"]}>
        By clicking on Sign Up, you agree to epox's{" "}
        <a href="/">Terms and Conditions of Use</a>.
      </span>

      <button className={style["register-button"]}>Sign Up</button>

      <div style={{ fontSize: "14px", textAlign:"center" }} className={style["register-sentence"]}>
        Already had an account? <a href="/">Login</a>
      </div>

    </form>
  );
}

export default RegisterForm;
