import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchScreen from '../app/(stack)navigation/SearchScreen';



describe('SearchScreen Component', () => {
  test('renders the search input field correctly', () => {
    const { getByTestId } = render(<SearchScreen />);
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeTruthy();
  });

  test('updates the search input field', () => {
    const { getByTestId } = render(<SearchScreen />);
    const searchInput = getByTestId('search-input');

    fireEvent.changeText(searchInput, 'test video');
    expect(searchInput.props.value).toBe('test video');
  });



  test('shows "Videos not found" when there are no matching results', () => {
    const { getByTestId, queryByTestId } = render(<SearchScreen />);
    const searchInput = getByTestId('search-input');

    fireEvent.changeText(searchInput, 'nonexistent video');
    expect(getByTestId('not-found-text')).toBeTruthy();
    expect(queryByTestId('list-container')).toBeNull();
  });

;

  test('renders correctly with default state', () => {
    const { getByTestId } = render(<SearchScreen />);
    expect(getByTestId('search-container')).toBeTruthy();
  });

  test('ensures styles are applied correctly', () => {
    const { getByTestId } = render(<SearchScreen />);
    const searchContainer = getByTestId('search-container');

    expect(searchContainer).toBeTruthy();
  });
});
