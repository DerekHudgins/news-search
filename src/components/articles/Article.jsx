import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ url, title, author, description }) => {
  return (
    <>
      <a href={url}>
        {title}
      </a>
      {author && <p>Written by: {author}</p>}
      <p>Summary: {description}</p>
    </>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default Article;
