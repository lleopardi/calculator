import { render, screen } from '@testing-library/react';
import App from './App';

test("check the calculator's name", () => {
  render(<App />);
  const linkElement = screen.getByText(/Calculator Innocv/i);
  expect(linkElement).toBeInTheDocument();
});
