import { useSelector } from "react-redux";
import type { RootState } from "../../Store/store";
import style from "./Auth.module.scss";
import { useState, useRef, useCallback } from "react";
import Button from "../Button/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

const Auth = () => {
  //   const container = useRef<HTMLDivElement>(null);
  //   const btnWrapperRef = useRef<HTMLDivElement>(null);
  //   const xTo = useRef<gsap.QuickToFunc | null>(null);
  //   const yTo = useRef<gsap.QuickToFunc | null>(null);

  const { name, userName, password } = useSelector((state: RootState) => state.Ilya);
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  console.log(name, userName, password);

  const handlerLogin = () => {};

  //   const { contextSafe } = useGSAP(() => {
  //     if (btnWrapperRef.current) {
  //       xTo.current = gsap.quickTo(btnWrapperRef.current, "x", {
  //         duration: 0.8,
  //         ease: "power3",
  //       });
  //       yTo.current = gsap.quickTo(btnWrapperRef.current, "y", {
  //         duration: 0.8,
  //         ease: "power3",
  //       });
  //     }
  //   });

  //   const moveShape = useCallback(
  //     contextSafe((e: React.MouseEvent) => {
  //       if (xTo.current && yTo.current) {
  //         const rect = e.currentTarget.getBoundingClientRect();
  //         const x = e.clientX - rect.left - rect.width / 2;
  //         const y = e.clientY - rect.top - rect.height / 2;

  //         xTo.current(x);
  //         yTo.current(y);
  //       }
  //     }),
  //     [contextSafe]
  //   );

  //   useGSAP(
  //     () => {
  //       if (btnWrapperRef.current) {
  //         gsap.to(btnWrapperRef.current, {
  //           rotation: 360,
  //           duration: 2,
  //           repeat: -1,
  //           yoyo: true,
  //         });
  //       }
  //     },
  //     { scope: container }
  //   );

  return (
    <div className={style.formWrapper}>
      <div className={style.formContainer}>
        <form action="" className={style.form}>
          <div className={style.formData}>
            <label htmlFor="username">Введите имя пользователя</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className={style.formData}>
            <label htmlFor="password">Введите пароль</label>
            <input type="password" id="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} required />
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
