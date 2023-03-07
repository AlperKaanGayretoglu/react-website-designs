import PaymentPlan from "./common/components/PaymentPlan";
import style from "./style.module.css";

function Pricing() {
  return (
    <div className={style["pricing"]}>
      <div>
        <header className={style["pricing-header"]}>
          <h1 className={style["pricing-title"]}>Pricing</h1>
          <div className={style["pricing-messages"]}>
            <span className={style["pricing-save"]}>SAVE 20%</span>
            <span className={style["pricing-choices"]}>
              <span className="active">Yearly</span> / <span>Monthly</span>
            </span>
          </div>
        </header>

        <div className={style["payment-plans"]}>
          <PaymentPlan
            name="Starter"
            price="9"
            formCount="1"
            submissionCount="1,000"
          />
          <PaymentPlan
            isBestPlan={true}
            name="Developer"
            price="19"
            formCount="5"
            submissionCount="10,000"
          />
          <PaymentPlan
            name="Agency"
            price="149"
            formCount="100"
            submissionCount="100,000"
          />
        </div>
      </div>

      <div className={style["free-plan"]}>
        <div className={style["title-wrapper"]}>
          <svg
            width="36"
            height="32"
            viewBox="0 0 36 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 29.5C2.25 30.7445 3.25547 31.75 4.5 31.75H15.75V20.5H2.25V29.5ZM20.25 31.75H31.5C32.7445 31.75 33.75 30.7445 33.75 29.5V20.5H20.25V31.75ZM33.75 9.25H30.7898C31.2258 8.39922 31.5 7.45703 31.5 6.4375C31.5 3.02734 28.7227 0.25 25.3125 0.25C22.3875 0.25 20.4961 1.74766 18.0703 5.05234C15.6445 1.74766 13.7531 0.25 10.8281 0.25C7.41797 0.25 4.64062 3.02734 4.64062 6.4375C4.64062 7.45703 4.90781 8.39922 5.35078 9.25H2.25C1.00547 9.25 0 10.2555 0 11.5V17.125C0 17.7437 0.50625 18.25 1.125 18.25H34.875C35.4938 18.25 36 17.7437 36 17.125V11.5C36 10.2555 34.9945 9.25 33.75 9.25ZM10.8211 9.25C9.26719 9.25 8.00859 7.99141 8.00859 6.4375C8.00859 4.88359 9.26719 3.625 10.8211 3.625C12.2203 3.625 13.2539 3.85703 16.875 9.25H10.8211ZM25.3125 9.25H19.2586C22.8727 3.87109 23.8781 3.625 25.3125 3.625C26.8664 3.625 28.125 4.88359 28.125 6.4375C28.125 7.99141 26.8664 9.25 25.3125 9.25Z"
              fill="black"
            />
          </svg>
          <strong>Need a Free plan?</strong>
        </div>
        <div>
          You can always receive up to <strong>100</strong> submissions per
          month for free.
        </div>
      </div>

      <div className={style["faq"]}>
        <h1 className={style["faq-title"]}>FAQ</h1>
        <div className={style["faq-element"]}>
          <span className={style["faq-question"]}>What methods of payment are supported?</span>
          <span className={style["faq-answer"]}>
            You can pay with any valid credit or debit card including Visa,
            Mastercard, American Express, and Discover. The system automatically
            converts your card's currency to Euros, if required.
          </span>
        </div>
        <div className={style["faq-element"]}>
          <span className={style["faq-question"]}>Can I cancel or change my plan?</span>
          <span className={style["faq-answer"]}>Yes, you can cancel or upgrade/downgrade your plan at anytime.</span>
        </div>
        <div className={style["faq-element"]}>
          <span className={style["faq-question"]}>How do you process payments?</span>
          <span className={style["faq-answer"]}>
            We use <a href="/pricing">Stripe</a> to process payments. It's the same payment provider
            used by Twitter, Pinterest, and Lyft. We do not handle your credit
            card information directly.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
