import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  let Wrapper

  beforeEach(() => {
      Wrapper = ({ children }) => (
          <BrowserRouter>
              {children}
          </BrowserRouter>
      );
  });

  it("passes snapshot test", () => {
    const { asFragment } = render(<App />, {wrapper: Wrapper});
    expect(asFragment()).toMatchSnapshot()
  });
});