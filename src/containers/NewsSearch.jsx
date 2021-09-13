import React, { Component } from 'react';
import getArticles from '../services/getArticles';
import ArticlesList from '../components/articles/ArticlesList';
import Header from '../components/search/Search';

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
      <>
        <Header />

        {loading ? <>Loading...</> : <ArticlesList articles={articles} />}
      </>
    );
  }
}
