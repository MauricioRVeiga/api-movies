'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import MovieList from '@/components/MovieList';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:4000/movies');
      
      if (!response.ok) {
        throw new Error('Erro ao buscar filmes');
      }
      
      const data = await response.json();
      setMovies(data.movies || []);
      setError(null);
    } catch (err) {
      setError('Não foi possível carregar os filmes. Verifique se a API está rodando.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>Catálogo de Filmes</h1>
          <p>Encontre e explore sua próxima sessão de cinema</p>
        </div>

        {loading && (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Carregando filmes...</p>
          </div>
        )}

        {error && (
          <div className={styles.error}>
            <p>⚠️ {error}</p>
            <button onClick={fetchMovies} className={styles.retryButton}>
              Tentar Novamente
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className={styles.stats}>
              <p>Total de filmes cadastrados: <strong>{movies.length}</strong></p>
            </div>
            <MovieList movies={movies} />
          </>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className={styles.empty}>
            <p>Nenhum filme cadastrado ainda.</p>
            <p>Adicione filmes usando a API para começar!</p>
          </div>
        )}
      </main>
    </div>
  );
}