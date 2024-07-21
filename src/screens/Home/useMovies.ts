// useMovies.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
}

const useMovies = (searchQuery: string, page: number) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = searchQuery
          ? `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}`
          : `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;

        const response = await axios.get(url, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjIzNTUwY2FkNTRkNDFhMzU1MDJmMTcwZGQwZTE3MiIsIm5iZiI6MTcyMTQ0NjAxOC4yMTQyMzQsInN1YiI6IjY2OWIyZGRmZmIyNjNiYTc2ODhiOTVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i2f0YBQPdDXXlyNmzBBKHDlIC60PBQXwqI-FyLGpMd8',
          },
        });

        setMovies(prevMovies => searchQuery ? response.data.results : [...prevMovies, ...response.data.results]);
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching movies.');
      }
      setLoading(false);
    };

    fetchMovies();
  }, [page, searchQuery]);

  return { movies, loading, error };
};

export default useMovies;
