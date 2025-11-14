import styles from '@/styles/MovieCard.module.css';

export default function MovieCard({ movie }) {
  const { title, director, year, genre, rating } = movie;

  const getRatingClass = (rating) => {
    if (rating >= 8) return styles.ratingHigh;
    if (rating >= 6) return styles.ratingMedium;
    return styles.ratingLow;
  };
  
  const getDecade = (year) => {
    const decade = Math.floor(year / 10) * 10;
    return `Anos ${decade}`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.titleSection}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.decade}>{getDecade(year)}</span>
        </div>
        <span className={`${styles.rating} ${getRatingClass(rating)}`}>
          {rating?.toFixed(1) || 'N/A'}
        </span>
      </div>
      
      <div className={styles.cardBody}>
        <div className={styles.info}>
          <span className={styles.label}>Diretor</span>
          <span className={styles.value}>{director}</span>
        </div>
        
        <div className={styles.info}>
          <span className={styles.label}>Ano</span>
          <span className={styles.value}>{year}</span>
        </div>
        
        <div className={styles.info}>
          <span className={styles.label}>Gênero</span>
          <span className={styles.genre}>{genre}</span>
        </div>
      </div>
    </div>
  );
}