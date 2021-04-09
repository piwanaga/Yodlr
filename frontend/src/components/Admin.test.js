import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Admin from './Admin';


describe('Admin page showing all users', () => {
  let Wrapper

  beforeEach(() => {
    Wrapper = ({ children }) => (
      <BrowserRouter>
        {children}
      </BrowserRouter>
    );
  });

  it("passes snapshot test", () => {
    const { asFragment } = render(<Admin />, {wrapper: Wrapper});
    expect(asFragment()).toMatchSnapshot()
  });
});
