import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Index from '../app/(stack)navigation/(navigation)/index.jsx';
import Header from '../app/components/Header.jsx';
import SubHeader from '../app/components/SubHeader.jsx';
import Card from '../app/components/Card.jsx';
import videos from '../app/dummy/videos.json';

// Mock child components to isolate tests
jest.mock('../app/components/Header.jsx', () => () => <></>);
jest.mock('../app/components/SubHeader.jsx', () => () => <></>);
jest.mock('../app/components/Card.jsx', () => ({ video }) => (
  <></>
));

describe('Index Component', () => {
  it('renders without crashing', () => {
    render(<Index />);
    expect(screen.getByTestId('home-screen')).toBeTruthy();
  });

  it('renders SafeAreaView with correct styles', () => {
    render(<Index />);
    const safeArea = screen.getByTestId('home-screen');
    expect(safeArea.props.style).toMatchObject({
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
    });
  });

 

  it('renders Header and SubHeader components', () => {
    render(<Index />);
    expect(screen.UNSAFE_getAllByType(Header).length).toBe(1);
    expect(screen.UNSAFE_getAllByType(SubHeader).length).toBe(1);
  });

  it('renders correct number of Card components', () => {
    render(<Index />);
    expect(screen.UNSAFE_getAllByType(Card).length).toBe(videos.length);
  });

  it('passes correct video data to each Card', () => {
    render(<Index />);
    const cards = screen.UNSAFE_getAllByType(Card);
    cards.forEach((card, index) => {
      expect(card.props.video).toEqual(videos[index]);
    });
  });
});