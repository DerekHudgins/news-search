import React, { Component } from 'react';
import getArticles from '../services/getArticles';
import ArticlesList from '../components/articles/ArticlesList';
import Header from '../components/search/Search';
import searchArticle from '../services/searchArticles';

export default class NewsSearch extends Component {
  state = {
    loading: true,
    articles: [],
    search: [],
  };

  handleSearch = ({ target }) => {
    if(target.value) {
      return searchArticle(target.value).then(({ articles }) => {
        this.setState({ articles });
      });
    }
  };

  componentDidMount() {
    return getArticles().then(({ articles }) =>
      this.setState({ articles, loading: false })
    );
  }

  render() {
    const { articles, loading } = this.state;
    const { handleSearch } = this;
    return (
      <>
        <Header handleSearch={handleSearch} />

        {loading ? <>Loading...</> : <ArticlesList articles={articles} />}
      </>
    );
  }
}
