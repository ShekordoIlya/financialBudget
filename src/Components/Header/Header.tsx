import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerWrapper}>
        <ul className={styles.headerLeft}>
          <li>LOGO</li>

          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/transaction-history">История транзакций</Link>
          </li>
        </ul>
        <ul className={styles.headerRight}>
          <li>
            <Link to="/balance">Посмотреть баланс</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
