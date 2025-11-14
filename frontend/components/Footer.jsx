import styles from '@/styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.text}>
            Desenvolvido por <strong>Mauricio R. Veiga</strong>
          </p>
          <p className={styles.subtext}>
            FATEC · Desenvolvimento Web III · {currentYear}
          </p>
        </div>
        
        <div className={styles.tech}>
          <span className={styles.badge}>React</span>
          <span className={styles.badge}>Next.js</span>
          <span className={styles.badge}>Node.js</span>
          <span className={styles.badge}>MongoDB</span>
        </div>
      </div>
    </footer>
  );
}