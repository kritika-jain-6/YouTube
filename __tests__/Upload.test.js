import React from 'react';
import { render } from '@testing-library/react-native';
import Upload from '../app/(stack)navigation/(navigation)/Upload.jsx';

describe('Upload Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Upload />);
    expect(getByTestId('UploadScreen')).toBeTruthy();
  });

  it('renders a SafeAreaView as root component', () => {
    const { getByTestId } = render(<Upload />);
    expect(getByTestId('UploadScreen').type).toBe('RCTSafeAreaView');
  });

  it('applies correct container styles', () => {
    const { getByTestId } = render(<Upload />);
    const container = getByTestId('UploadScreen');
    
    expect(container.props.style).toEqual({
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
    });
  });

  it('matches snapshot', () => {
    const { toJSON } = render(<Upload />);
    expect(toJSON()).toMatchSnapshot();
  });

 
  
});