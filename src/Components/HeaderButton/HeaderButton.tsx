import { Link } from "react-router-dom";
import styles from "./HeaderButton.module.scss";

interface IHeaderButton {
  link: string | undefined;
  value: string | undefined;
}

const HeaderButton = ({ link, value }: IHeaderButton) => {
  if (!link) {
    return <div>Что то пошло не так</div>;
  }

  return (
    <button className={styles.headerButton}>
      <Link to={link}>{value}</Link>
    </button>
  );
};

export default HeaderButton;
