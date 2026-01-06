import { Link } from "react-router-dom";
import styles from "./HeaderButton.module.scss";

const HeaderButton = ({ link, value }: any) => {
  return (
    <button className={styles.headerButton}>
      <Link to={link}>{value}</Link>
    </button>
  );
};

export default HeaderButton;
