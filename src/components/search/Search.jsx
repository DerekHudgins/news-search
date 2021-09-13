import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  render() {
    return (
      <form>
        <input
          onChange={this.props.handleSearch}
          placeholder="Search for articles..."
        />
      </form>
    );
  }
}
Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
