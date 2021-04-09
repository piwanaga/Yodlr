import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  let Wrapper

  beforeEach(() => {
      Wrapper = ({ children }) => (
          <BrowserRouter>
              {children}
          </BrowserRouter>
      );
  });

  it("passes snapshot test", () => {
    const { asFragment } = render(<Home />, {wrapper: Wrapper});
    expect(asFragment()).toMatchSnapshot()
  });
});