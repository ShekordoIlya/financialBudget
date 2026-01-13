import { useSelector } from "react-redux";
import type { RootState } from "../../Store/store";
import style from "./Auth.module.scss";
import { useState } from "react";
import Button from "../Button/Button";

const Auth = () => {
  const { name, userName, password } = useSelector((state: RootState) => state.Ilya);
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  console.log(name, userName, password);

  const handlerLogin = () => {};

  return (
    <div className={style.formWrapper}>
      <div className={style.formContainer}>
        <form action="" className={style.form}>
          <div className={style.formData}>
            <label htmlFor="username">Введите имя пользователя</label>
            <input type="text" id="username" required />
          </div>
          <div className={style.formData}>
            <label htmlFor="password">Введите пароль</label>
            <input type="password" id="password" required />
          </div>
          <div className={style.btnWrapper}>
            <Button callBack={handlerLogin} value={"Войти"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
