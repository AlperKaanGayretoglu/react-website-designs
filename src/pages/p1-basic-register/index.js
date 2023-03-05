import style from './style.module.css';

import RegisterForm from './components/RegisterForm';

function BasicRegister() {
  return (
    <div className={style["basic-register"]}>
      <RegisterForm />
    </div>
  );
}

export default BasicRegister;
