import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.icon}>🎥</span>
          <h1>API Movies</h1>
        </div>
        
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>Início</a>
          <a href="http://localhost:4000/movies" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
            API Docs
          </a>
        </nav>
      </div>
    </header>
  );
}