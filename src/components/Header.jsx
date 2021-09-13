import React from 'react';
import Search from '../search/Search';

const Header = () => {
  return (
    <header
      style={{
        height: '80px',
        border: '1px solid black',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>News Search</h1>
      <Search />
    </header>
  );
};

export default Header;
