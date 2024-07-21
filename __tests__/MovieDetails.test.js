// __tests__/MovieDetails.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useNavigation } from '@react-navigation/native';
import MovieDetails from '../src/screens/MovieDetails/MovieDetails'; // Adjust the import path accordingly

const mock = new MockAdapter(axios);

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

const mockMovie = {
  id: 1,
  title: 'Test Movie',
  poster_path: '/testpath.jpg',
  overview: 'This is a test movie overview.',
  genres: [{ name: 'Action' }, { name: 'Drama' }],
  runtime: 120,
  release_date: '2024-07-21',
};

const renderComponent = (props = {}) => {
  const defaultProps = {
    route: { params: { movieId: 1 } },
  };

  return render(<MovieDetails {...defaultProps} {...props} />);
};

describe('MovieDetails', () => {
  afterEach(() => {
    mock.reset();
  });

  it('displays loading indicator while fetching movie details', () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('displays movie details after fetching data', async () => {
    mock.onGet('https://api.themoviedb.org/3/movie/1?language=en-US').reply(200, mockMovie);

    const { getByText, getByTestId } = renderComponent();

    await waitFor(() => expect(getByText('Test Movie')).toBeTruthy());
  });

  it('displays error message when movie details fetch fails', async () => {
    mock.onGet('https://api.themoviedb.org/3/movie/1?language=en-US').reply(500);

    const { getByText } = renderComponent();

    await waitFor(() => expect(getByText('Movie not found')).toBeTruthy());
  });
});
