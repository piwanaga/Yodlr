import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

describe('Routes', () => {
  let Wrapper

  beforeEach(() => {
      Wrapper = ({ children }) => (
          <BrowserRouter>
              {children}
          </BrowserRouter>
      );
  });

  it("passes snapshot test", () => {
    const { asFragment } = render(<Routes />, {wrapper: Wrapper});
    expect(asFragment()).toMatchSnapshot()
  });
});