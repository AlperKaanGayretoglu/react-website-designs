import style from "./style.module.css";

function GenderForm() {
  return (
    <div className={style["gender-radios"]}>
      <div className={style["gender-radio"]}>
        <span type={"radio"}></span>
        <span className={style["gender-radio-text"]}>Male</span>
      </div>
      <div className={style["gender-radio"]}>
        <span type={"radio"}></span>
        <span className={style["gender-radio-text"]}>Female</span>
      </div>
      <div className={style["gender-radio"]}>
        <span type={"radio"}></span>
        <span className={style["gender-radio-text"]}>Other</span>
      </div>
    </div>
  );
}

export default GenderForm;
