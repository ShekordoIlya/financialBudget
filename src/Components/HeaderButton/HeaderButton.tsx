import { Link } from "react-router-dom";
import styles from "./HeaderButton.module.scss";

interface IHeaderButton {
  link: string | undefined;
  value: string | undefined;
  callBack?: () => void;
}

const HeaderButton = ({ link, value, callBack }: IHeaderButton) => {
  if (!link) {
    return <div>Что то пошло не так</div>;
  }

  return (
    <button className={styles.headerButton} onClick={callBack}>
      <Link to={link}>{value}</Link>
    </button>
  );
};

export default HeaderButton;
