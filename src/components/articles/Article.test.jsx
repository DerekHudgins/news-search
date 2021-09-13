import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article.jsx';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    const { asFragment } = render(<Article />);
    expect(asFragment()).toMatchSnapshot();
  });
});
