// locationService.ts
import GetLocation from 'react-native-get-location';
import axios from 'axios';
import { Platform } from 'react-native';
import { GOOGLE_MAPS_API_KEYS } from 'Constants/constant';

const googleMapsApiKey = Platform.select(GOOGLE_MAPS_API_KEYS);

interface Location {
  latitude: number;
  longitude: number;
}

const getCurrentLocation = (): Promise<Location> => {
  return GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 60000,
  });
};

const reverseGeocode = async (latitude: number, longitude: number): Promise<string> => {
  if (!googleMapsApiKey) {
    throw new Error('Google Maps API key is not defined.');
  }

  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsApiKey}`
  );
  
  const results = response.data.results;
  if (results.length > 0) {
    const addressComponents = results[0].address_components;
    const countryComponent = addressComponents.find((component: any) => component.types.includes('country'));
    if (countryComponent) {
      return countryComponent.long_name;
    }
  }

  throw new Error('Failed to get country name.');
};

export { getCurrentLocation, reverseGeocode };
