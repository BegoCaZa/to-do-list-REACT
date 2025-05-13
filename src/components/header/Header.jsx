import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerBar}>
        <h1 className={styles.headerTitle}>TO DO LIST</h1>
      </div>
    </div>
  );
};

export default Header;
