import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card " style={{ height: "430px" }}>
            <img
              src={imageUrl}
              className="card-img-top"
              alt="..."
              style={{ height: "35%" }}
            />
            <div
              className="card-body d-flex flex-column"
              style={{ height: "65%" }}
            >
              <h5
                className="titleLine4-ellipse card-title overflow-hidden"
                style={{ height: "40%" }}
              >
                {title}{title}
              </h5>
              <p
                className="card-text overflow-hidden"
                style={{ height: "40%" }}
              >
                {description}
              </p>
              <a
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-dark"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
