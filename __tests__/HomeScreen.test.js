// __tests__/HomeScreen.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { HomeScreen } from '../src/screens/Home/HomeScreen'; // Adjust the import path accordingly

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({ navigate: jest.fn() }),
  };
});

// Mocking the LocationInfo component using inline requires
jest.mock('Common/DummyComponents/LocationInfo/LocationInfo', () => {
  const React = require('react');
  const { View, Text } = require('react-native');
  return () => (
    <View>
      <Text>Mocked Location</Text>
    </View>
  );
});

const mock = new MockAdapter(axios);

const mockMoviesResponse = {
  results: [
    {
      id: 1,
      title: 'Movie 1',
      poster_path: '/path1.jpg',
      release_date: '2022-01-01',
      vote_average: 8.0,
    },
    {
      id: 2,
      title: 'Movie 2',
      poster_path: '/path2.jpg',
      release_date: '2022-02-02',
      vote_average: 7.5,
    },
  ],
};

describe('HomeScreen', () => {
  beforeEach(() => {
    mock.reset();
    mock.onGet('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1').reply(200, mockMoviesResponse);
  });

  it('renders movie items correctly', async () => {
    const { getByText } = render(<HomeScreen />);

    await waitFor(() => {
      expect(getByText('Movie 1 (2022)')).toBeTruthy();
      expect(getByText('Movie 2 (2022)')).toBeTruthy();
    });
  });

  it('searches for movies when a query is entered', async () => {
    const { getByPlaceholderText, getByText } = render(<HomeScreen />);
    
    mock.onGet('https://api.themoviedb.org/3/search/movie?query=test&include_adult=false&language=en-US&page=1').reply(200, {
      results: [
        {
          id: 3,
          title: 'Test Movie',
          poster_path: '/testpath.jpg',
          release_date: '2022-03-03',
          vote_average: 9.0,
        },
      ],
    });

    fireEvent.changeText(getByPlaceholderText('Search for movies...'), 'test');

    await waitFor(() => {
      expect(getByText('Test Movie (2022)')).toBeTruthy();
    });
  });

  it('shows loading indicator while fetching movies', () => {
    const { getByTestId } = render(<HomeScreen />);

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('displays an error message on network failure', async () => {
    mock.onGet('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1').networkError();

    const { getByText } = render(<HomeScreen />);

    await waitFor(() => {
      expect(getByText('An error occurred while fetching movies.')).toBeTruthy();
    });
  });
});
