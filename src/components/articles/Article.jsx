import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ url, title, author, description }) => {
  return (
    <>
      <a href={url}>
        {title}
      </a>
      {author && <p>Written by: {author}</p>}
      <p>{description}</p>
    </>
  );
};

Article.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default Article;
