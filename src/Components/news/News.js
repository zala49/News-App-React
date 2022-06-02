import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  constructor() {
    super();
    console.log("Hello I.m constructor calling form News.js ");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2022-05-25&to=2022-05-25&sortBy=popularity&apiKey=87e97c6268d3430fa215a9518b0e89a8&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }

  handleNextClick = async () => {
    console.log("next Clicked");

    let url = `https://newsapi.org/v2/everything?q=apple&from=2022-05-25&to=2022-05-25&sortBy=popularity&apiKey=87e97c6268d3430fa215a9518b0e89a8&page=${
      this.state.page + 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });

    this.setState({
      page: this.state.page + 1,
    });
  };

  handlePreviousClick = async () => {
    console.log("Previous Clicked");
    let url = `https://newsapi.org/v2/everything?q=apple&from=2022-05-25&to=2022-05-25&sortBy=popularity&apiKey=87e97c6268d3430fa215a9518b0e89a8&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });

    this.setState({
      page: this.state.page - 1,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>News - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage ? element.urlToImage : ""}
                    newsUrl={element.url ? element.url : ""}
                  />
                </div>
              );
            })}
            <div className="container d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                type="button"
                onClick={this.handlePreviousClick}
                className="btn btn-dark mx-2"
              >
                &larr; Pervious
              </button>
              <button
                type="button"
                onClick={this.handleNextClick}
                className="btn btn-dark mx-1"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
