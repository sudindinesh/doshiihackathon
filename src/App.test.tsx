import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

let mockLocation = '/1';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: mockLocation
  })
}));

describe('When loading app', () => {
  it('should contain the app container div', () => {
    render(<App />);
    const appContainer = screen.getByTestId('app-container');
    expect(appContainer).toBeInTheDocument();
  });

  // Temporary tests to be deleted when integration happens
  it('should contain the app container div when id is 2', () => {
    mockLocation = '/2';
    render(<App />);
    const appContainer = screen.getByTestId('app-container');
    expect(appContainer).toBeInTheDocument();
  });

  it('should contain the app container div when id is 3', () => {
    mockLocation = '/3';
    render(<App />);
    const appContainer = screen.getByTestId('app-container');
    expect(appContainer).toBeInTheDocument();
  });

  it('should contain the app container div when id is 4 and defaults', () => {
    mockLocation = '/4';
    render(<App />);
    const appContainer = screen.getByTestId('app-container');
    expect(appContainer).toBeInTheDocument();
  });
});
