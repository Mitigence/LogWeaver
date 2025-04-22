import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders LogWeaver heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/LogWeaver: AI-Powered Log Parser/i);
  expect(linkElement).toBeInTheDocument();
});
