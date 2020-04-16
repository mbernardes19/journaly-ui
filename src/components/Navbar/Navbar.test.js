import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

test('should display header', () => {
  const app = render(<Navbar/>);
  const navbarElement = app.getByText(/Journaly/i);
  expect(app.baseElement).toContainElement(navbarElement);
  expect(navbarElement).toBeInTheDocument();
});
