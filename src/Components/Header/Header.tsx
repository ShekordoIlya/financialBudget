import styles from "./Header.module.scss";
import HeaderButton from "../HeaderButton/HeaderButton";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerWrapper}>
        <ul className={styles.headerLeft}>
          <li>LOGO</li>

          <li>
            <HeaderButton link="/" value="На главную" />
          </li>
          <li>
            <HeaderButton link="transaction-history" value="История транзакций" />
          </li>
        </ul>
        <ul className={styles.headerRight}>
          <li>
            <HeaderButton link="balance" value="Посмотреть баланс" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
