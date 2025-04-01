import React from 'react';
import { render } from '@testing-library/react-native';
import Subscription from '../app/(stack)navigation/(navigation)/Subscription.jsx';
import Header from '../app/components/Header';

// Mock the Header component to isolate tests
jest.mock('../app/components/Header', () => () => <></>);

describe('Subscription Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Subscription />);
    expect(getByTestId('subscription-screen')).toBeTruthy();
  });

  it('renders a SafeAreaView as the root element', () => {
    const { getByTestId } = render(<Subscription />);
    expect(getByTestId('subscription-screen').type).toBe('RCTSafeAreaView');
  });

  it('applies correct styles to container', () => {
    const { getByTestId } = render(<Subscription />);
    const container = getByTestId('subscription-screen');
    
    expect(container.props.style).toEqual({
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
    });
  });

  it('renders the Header component', () => {
    const { UNSAFE_getAllByType } = render(<Subscription />);
    expect(UNSAFE_getAllByType(Header).length).toBe(1);
  });

  it('matches snapshot', () => {
    const { toJSON } = render(<Subscription />);
    expect(toJSON()).toMatchSnapshot();
  });

  
});