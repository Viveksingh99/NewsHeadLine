import React, { useEffect, useState } from "react";
import axios from "axios";

function FechNews() {
  const [news, setNews] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://newsapi.org/v2/top-headlines?country=in&apiKey=b516d18d23654923920146909469e683"
  //     )
  //     .then((response) => {
  //       setNews(response.data.articles);
  //     });
  // }, []);
  const FechNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=b516d18d23654923920146909469e683"
      )
      .then((response) => {
        setNews(response.data.articles);
      });
  };

  return (
    <>
      <div
        className="border-bottom"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "5px",
        }}
      >
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => FechNews()}
        >
          HeadLines
        </button>
      </div>
      <div className="Container">
        {news &&
          news.map((value) => {
            return (
              <>
                {!!(value && value.title && value.description) && (
                  <div class="card" style={{ width: "100%" }}>
                    <img
                      className="card-img-top"
                      src={value.urlToImage}
                      alt="Img is not avalele."
                      height={300}
                      width={100}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href="#" class="btn btn-primary">
                        {value && value.url.length > 100
                          ? value.url.substr(0, 100) + "..."
                          : value.url}
                      </a>
                    </div>
                  </div>
                )}
              </>
            );
          })}
      </div>
    </>
  );
}
export default FechNews;
