import React, { Component } from 'react';
import getArticles from '../services/getArticles';
import ArticlesList from '../components/articles/ArticlesList';

export default class NewsSearch extends Component {
  state = {
    loading: true,
    articles: [],
    search: '',
  };

  componentDidMount() {
    return getArticles().then(({ articles }) =>
      this.setState({ articles, loading: false })
    );
  }

  render() {
    const { articles, loading } = this.state;
    return (
      <>{loading 
        ? <>Loading...</> 
        : <ArticlesList articles={articles} />}</>
    );
  }
}
