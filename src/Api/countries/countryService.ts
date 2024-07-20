import axios from 'axios';

class CounrtyService {
  public async getCountries() {
    return axios.get('https://rest.waseet.net/v1/countries', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Language': 'en',
        country: 'KW',
      },
    });
  }
}

export default new CounrtyService();
