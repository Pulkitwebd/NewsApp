import React from "react";

const NewsItem = (props) => {
  
    let {title, description, urlToImage, url , lastUpdated} = props;
    return (
      <div>
        <div className="card my-4" style={{width: "18rem"}}>
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
            <p class="card-text"><small class="text-muted">Updated {new Date(lastUpdated).toGMTString()}</small></p>
            <a href={url} target="_blank" className="btn  btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div> 
      </div>
    );
  
}

export default NewsItem;
