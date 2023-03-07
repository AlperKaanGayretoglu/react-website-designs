import style from "./style.module.css";

function PaymentPlan({ isBestPlan, name, price, formCount, submissionCount }) {
  return (
    <div className={style["payment-plan"] + (isBestPlan ? " "+style["best-plan"] : "")}>
      <div className={style["payment-name-wrapper"]}>
        <h1 className={style["payment-name"]}>{name}</h1>
        {isBestPlan && <span className={style["best-plan-icon"]}>Best Plan</span>}
      </div>
      <div>
        <div className={style["payment-price"]}>
          <span className={style["dollar-sign"]}>$</span>
          <span className={style["price"]}>{price}</span>
        </div>
        <div className={style["payment-message"]}>per month / billed yearly</div>
      </div>
      <div>
        <button className={style["payment-button"]}>Upgrade</button>
      </div>
      <div>
        <ul className={style["payment-list"]}>
          <li>{formCount} form</li>
          <li>{submissionCount} submission per month</li>
        </ul>
      </div>
    </div>
  );
}

PaymentPlan.defaultProps = {
  isBestPlan: false,
};

export default PaymentPlan;
