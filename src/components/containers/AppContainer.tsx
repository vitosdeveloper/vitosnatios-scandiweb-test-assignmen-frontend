import styles from './AppConainer.module.sass';

type Props = { children: React.ReactNode };

const AppContainer = ({ children }: Props) => {
  return <div className={styles.app}>{children}</div>;
};

export default AppContainer;
