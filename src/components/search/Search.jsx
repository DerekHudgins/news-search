import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  render() {
    const { handleSearch } = this.props;
    return (
      <form>
        <input
          onChange={handleSearch}
          placeholder="Search for articles..."
        />
      </form>
    );
  }
}
Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
