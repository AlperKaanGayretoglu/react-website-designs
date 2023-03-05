import { useState } from "react";

import style from "./style.module.css";

function Input({ icon, label, type }) {
  const [value, setValue] = useState("");
  return (
    <div>
      <div className={style["basic-input"]+" input-group mb-3"}>
        <span className="icon input-group-text">{icon}</span>
        <input
          className="form-control"
          required
          value={value}
          placeholder={label}
          type={type}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default Input;
