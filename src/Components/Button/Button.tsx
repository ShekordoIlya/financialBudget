import styles from "./Button.module.scss";

interface IButton {
  value: string;
  callBack?: () => void;
}

const Button = ({ callBack, value }: IButton) => {
  return (
    <button className={styles.headerButton} onClick={callBack}>
      {value}
    </button>
  );
};

export default Button;
