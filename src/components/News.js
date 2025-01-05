import React, { Component } from 'react';
import NewsUpdate from './NewsUpdate';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true, 
    };
  }

  componentDidMount() {
    const apiKey = "a53a2490f40e4c47ab9a2ab505c5e6e1"; 
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        this.setState({ articles: data.articles, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : this.state.articles.length > 0 ? (
          <div className="row">
            {this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsUpdate
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    );
  }
}

export default News;
