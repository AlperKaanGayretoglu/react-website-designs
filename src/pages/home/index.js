import { Link } from "react-router-dom";

import style from "./style.module.css";

function Home() {
  return (
    <div className={style["home"]}>
      <h1>Links</h1>
      <nav>
        <Link to="/basic-register">Basic Register</Link>
        <Link to="/advanced-register">Advanced Register</Link>
      </nav>
    </div>
  );
}

export default Home;
