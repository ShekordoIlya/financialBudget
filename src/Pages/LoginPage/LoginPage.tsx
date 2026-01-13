import Auth from "../../Components/Auth/Auth";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.loginPageContainer}>
      <Auth />
    </div>
  );
};

export default LoginPage;
