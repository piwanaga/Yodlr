import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RegisterForm from './RegisterForm';

describe('RegisterForm', () => {
  let Wrapper

  beforeEach(() => {
      Wrapper = ({ children }) => (
          <BrowserRouter>
              {children}
          </BrowserRouter>
      );
  });

  it("passes snapshot test", () => {
    const { asFragment } = render(<RegisterForm />, {wrapper: Wrapper});
    expect(asFragment()).toMatchSnapshot()
  });
});