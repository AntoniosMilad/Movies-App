import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, ActivityIndicator } from 'react-native';
import LocationInfo from 'Common/DummyComponents/LocationInfo/LocationInfo'; // Import the LocationInfo component
import MovieCard from 'Common/DummyComponents/MovieCard/MovieCard'; // Import the MovieCard component
import styles from './HomeScreenStyles'; 
import useMovies from './useMovies'; // Import the custom hook

interface HomeScreenProps {
  navigation: any; 
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const { movies, loading, error } = useMovies(searchQuery, page);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1); // Reset to the first page on a new search
  };

  const renderItem = ({ item }: { item: Movie }) => (
    <MovieCard
      movie={item}
      onPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <LocationInfo />
      <TextInput
        style={styles.searchInput}
        placeholder="Search for movies..."
        value={searchQuery}
        onChangeText={handleSearch}
        onSubmitEditing={() => setPage(1)}
      />
      {loading && <ActivityIndicator size="large" testID="loading-indicator" />}
      {error && <Text>{error}</Text>}
      <View style={styles.moviesContainer}>
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} 
          onEndReached={() => setPage(prevPage => prevPage + 1)}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
          showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator
        />
      </View>
    </View>
  );
};
