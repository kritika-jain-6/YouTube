import React from 'react';
import { render } from '@testing-library/react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { withNavigationHOC } from '../app/withNavigationHOC';

// Mock the react-navigation hooks
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

describe('withNavigationHOC', () => {
  const mockNavigation = {
    navigate: jest.fn(),
    goBack: jest.fn(),
  };
  
  const mockRoute = {
    params: { id: '123' },
  };

  beforeEach(() => {
    useNavigation.mockReturnValue(mockNavigation);
    useRoute.mockReturnValue(mockRoute);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('provides the actual navigation object to the wrapped component', () => {
    const TestComponent = ({ navigation }) => {
      navigation.navigate('TestScreen');
      return null;
    };

    const WrappedComponent = withNavigationHOC(TestComponent);
    render(<WrappedComponent />);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('TestScreen');
  });

  

});