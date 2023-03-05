import { useState } from "react";
import style from "./style.module.css";

function Input({ label, type }) {
  const [value, setValue] = useState("");
  return (
    <div className={style["basic-input"]}>
      <label>{label}</label>
      <input
        required
        value={value}
        type={type}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
}

export default Input;
