import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import NotificationsScreen from '../app/(stack)navigation/NotificationScreen';
import { useRouter } from 'expo-router';

// Mock expo-router
jest.mock('expo-router', () => ({
  useRouter: jest.fn(() => ({
    back: jest.fn(),
  })),
}));

// Mock expo-font to prevent font loading errors
jest.mock('expo-font', () => ({
  loadAsync: jest.fn(() => Promise.resolve()),
  isLoaded: jest.fn(() => true),
}));

// Mock Ionicons properly
jest.mock('@expo/vector-icons/Ionicons', () => {
  const { View } = require('react-native');
  return {
    Ionicons: ({ name, size, color, testID }) => (
      <View testID={testID} name={name} size={size} color={color} />
    ),
  };
});

// Import the NotificationItem component if it's exported
// Or define it here if it's not exported from your main file
const NotificationItem = ({ notification }) => (
  <View testID={`notification-item-${notification.id}`}>
    <Image 
      testID="notification-image"
      source={{ uri: notification.thumbnail }} 
      style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
    />
    <View>
      <Text>{notification.userName}</Text>
      <Text>{notification.title}</Text>
      <Text>{notification.createdTime}</Text>
    </View>
  </View>
);

describe('NotificationsScreen', () => {
  const mockRouter = {
    back: jest.fn(),
  };

  beforeEach(() => {
    useRouter.mockImplementation(() => mockRouter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(
      <NavigationContainer>
        <NotificationsScreen />
      </NavigationContainer>
    );
    expect(screen.getByText('Notifications')).toBeTruthy();
  });

  it('renders the header with back button and title', () => {
    render(
      <NavigationContainer>
        <NotificationsScreen />
      </NavigationContainer>
    );
    expect(screen.getByTestId('back-button')).toBeTruthy();
    expect(screen.getByText('Notifications')).toBeTruthy();
  });

  it('calls router.back() when back button is pressed', () => {
    render(
      <NavigationContainer>
        <NotificationsScreen />
      </NavigationContainer>
    );
    fireEvent.press(screen.getByTestId('back-button'));
    expect(mockRouter.back).toHaveBeenCalled();
  });

  it('renders notification items correctly', () => {
    render(
      <NavigationContainer>
        <NotificationsScreen />
      </NavigationContainer>
    );
    const notificationItems = screen.getAllByTestId(/notification-item-/);
    expect(notificationItems.length).toBeGreaterThan(0);
  });

  // Add more tests as needed...
});

