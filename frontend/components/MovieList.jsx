import MovieCard from './MovieCard';
import styles from '@/styles/MovieList.module.css';

export default function MovieList({ movies }) {
  return (
    <div className={styles.movieGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
}