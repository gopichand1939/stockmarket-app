import { render, screen } from '@testing-library/react';
import App from './App';

test('renders stock market app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Stock Market App/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders stocks and holdings sections', () => {
  render(<App />);
  const stocksElement = screen.getByText(/Stocks/i);
  const holdingsElement = screen.getByText(/Holdings/i);
  expect(stocksElement).toBeInTheDocument();
  expect(holdingsElement).toBeInTheDocument();
});
