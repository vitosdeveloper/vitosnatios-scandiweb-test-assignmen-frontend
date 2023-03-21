import styles from './Footer.module.sass';

const Footer = () => {
  return (
    <>
      <hr className={styles.hr} />
      <footer className={styles.footer}>
        <p>Scandiweb Test Assignment</p>
      </footer>
    </>
  );
};

export default Footer;
