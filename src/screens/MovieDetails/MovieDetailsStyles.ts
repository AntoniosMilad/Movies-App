// styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding:15,
  },
  scrollView: {
    padding: 10,
    marginBottom:5,

  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  overview: {
    fontSize: 16,
    marginVertical: 10,
  },
  details: {
    fontSize: 14,
    marginVertical: 5,
  },
});

export default styles;
