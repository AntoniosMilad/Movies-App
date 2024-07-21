// MovieDetails.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import styles from './MovieDetailsStyles';
import { Movie, MovieDetailsProps } from './MovieDetailsTypes';
import BackButtonHeader from 'Common/DummyComponents/BackButtonHeader/BackButtonHeader';

export const MovieDetails: React.FC<MovieDetailsProps> = ({ route }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get<Movie>(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjIzNTUwY2FkNTRkNDFhMzU1MDJmMTcwZGQwZTE3MiIsIm5iZiI6MTcyMTQ0NjAxOC4yMTQyMzQsInN1YiI6IjY2OWIyZGRmZmIyNjNiYTc2ODhiOTVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i2f0YBQPdDXXlyNmzBBKHDlIC60PBQXwqI-FyLGpMd8',
        },
      });
      setMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error.message);
      // console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <ActivityIndicator testID="loading-indicator" size="large" style={styles.loading} />;

  if (!movie) return <Text style={styles.details}>Movie not found</Text>;

  return (
    <ScrollView style={styles.container}>
      <BackButtonHeader />
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.poster} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
      <Text style={styles.details}>Genres: {movie.genres.map(genre => genre.name).join(', ')}</Text>
      <Text style={styles.details}>Runtime: {movie.runtime} minutes</Text>
      <Text style={styles.details}>Release Date: {new Date(movie.release_date).toLocaleDateString()}</Text>
    </ScrollView>
  );
};

export default MovieDetails;
