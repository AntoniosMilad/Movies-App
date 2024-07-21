import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'; // Import the styles

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
}

interface MovieCardProps {
  movie: Movie;
  onPress: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.movieItem} onPress={onPress}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.poster} />
      <View style={styles.movieInfo}>
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {movie.title} ({new Date(movie.release_date).getFullYear()})</Text>
        <Text style={styles.rating}>Rating: {movie.vote_average}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
