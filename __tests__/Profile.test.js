import React from 'react';
import { render } from '@testing-library/react-native';
import Profile from '../app/(stack)navigation/(navigation)/Profile';

// Mock the Header component
jest.mock('../app/components/Header.jsx', () => 'MockedHeader');

describe('Profile Screen', () => {
  test('renders the Profile screen correctly', () => {
    const { getByTestId } = render(<Profile />);
    expect(getByTestId('profile-screen')).toBeTruthy();
  });


  test('applies correct styles to the Profile container', () => {
    const { getByTestId } = render(<Profile />);
    const profileScreen = getByTestId('profile-screen');

    expect(profileScreen.props.style).toEqual(
      expect.objectContaining({
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
      })
    );
  });
});
