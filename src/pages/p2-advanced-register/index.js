import style from './style.module.css';

import RegisterForm from './components/RegisterForm';


function AdvancedRegister() {
  return (
    <div className={style["advanced-register"]}>
      <RegisterForm />
    </div>
  );
}

export default AdvancedRegister;
