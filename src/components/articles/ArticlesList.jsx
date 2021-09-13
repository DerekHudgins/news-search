import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticlesList = ({ articles }) => {
  const articlesList = articles.map((article, index) => {
    return (
      <li key={index}>
        <Article {...article} />
      </li>
    );
  });

  return <ul>{articlesList}</ul>;
};

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      description: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ArticlesList;
