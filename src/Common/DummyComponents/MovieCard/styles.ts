// MovieCardStyles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  movieItem: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 15,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 2,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  movieInfo: {
    marginLeft: 10,
    justifyContent: 'flex-start',
  },
  title: {
    width:'80%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 14,
    color: '#777',
  },
});

export default styles;
