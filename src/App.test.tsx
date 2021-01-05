import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component: any) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => "TEXT" };
    return Component;
  },
}));

test('has... some content 🤷', () => {

  render(<App />);
  const linkElement = screen.getByText(/TEXT/i);
  expect(linkElement).toBeInTheDocument();
});
