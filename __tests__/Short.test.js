import React from 'react';
import { render } from '@testing-library/react-native';
import Shorts from '../app/(stack)navigation/(navigation)/Shorts.jsx';

describe('Shorts Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Shorts />);
    expect(getByTestId('shorts-screen')).toBeTruthy();
  });

  it('renders a SafeAreaView', () => {
    const { getByTestId } = render(<Shorts />);
    const safeArea = getByTestId('shorts-screen');
    expect(safeArea.type).toBe('RCTSafeAreaView');
  });

  it('applies correct styles to container', () => {
    const { getByTestId } = render(<Shorts />);
    const container = getByTestId('shorts-screen');
    
    expect(container.props.style).toEqual({
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
    });
  });

  it('matches snapshot', () => {
    const { toJSON } = render(<Shorts />);
    expect(toJSON()).toMatchSnapshot();
  });
});