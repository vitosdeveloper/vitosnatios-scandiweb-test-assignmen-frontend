import Button from '../form/Button';
import Title from '../text/Title';
import styles from './Header.module.sass';

type Props = {
  title: string;
  btn1name: string;
  btn2name: string;
  btn1func: () => void;
  btn2func: () => void;
  disableBtn1?: boolean;
  disableBtn2?: boolean;
};

const Header = ({
  title,
  btn1name,
  btn2name,
  btn1func,
  btn2func,
  disableBtn1,
  disableBtn2,
}: Props) => {
  return (
    <>
      <header className={styles.header}>
        <Title>{title}</Title>
        <div className={styles.buttonsContainer}>
          <Button disabled={disableBtn1} onClick={btn1func}>
            {btn1name}
          </Button>
          <Button disabled={disableBtn2} onClick={btn2func}>
            {btn2name}
          </Button>
        </div>
      </header>
      <hr className={styles.hr} />
    </>
  );
};

export default Header;
