import { useState } from "react";

import style from "./style.module.css";

const initialDate = { month: "", day: "", year: "" };

function BirthdayForm() {
  const [date, setDate] = useState({ initialDate });

  return (
    <div className={style["birthday-form"]}>
      <span className={style["title"]}>Birth Date</span>

      <div className={style["date-inputs"]}>
        <input
          required
          placeholder="mm"
          onChange={(e) => setDate({ ...date, month: e.target.value })}
        ></input>
        <input
          required
          placeholder="dd"
          onChange={(e) => setDate({ ...date, day: e.target.value })}
        ></input>
        <input
          style={{ width: "72px" }}
          required
          placeholder="yyyy"
          onChange={(e) => setDate({ ...date, year: e.target.value })}
        ></input>
      </div>
    </div>
  );
}

export default BirthdayForm;
