import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  country: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    fontSize: 16,
    color: 'red',
  },
});

export default styles;
