// LocationInfo.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // or any other icon set
import styles from './styles'; // Import the styles
import { getCurrentLocation, reverseGeocode } from '../../../Utilts/locationService';

const LocationInfo: React.FC = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const location = await getCurrentLocation();
      const { latitude, longitude } = location;
      setLocation({ latitude, longitude });

      const country = await reverseGeocode(latitude, longitude);
      setCountry(country);
    } catch (err) {
      console.warn(err.message);
      setError('Failed to get location or country name.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.container} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      {country && (
        <View style={styles.countryContainer}>
          <Icon name="location-sharp" size={24} color="black" style={styles.icon} />
          <Text style={styles.country}>
            {country}
          </Text>
        </View>
      )}
    </View>
  );
};

export default LocationInfo;
