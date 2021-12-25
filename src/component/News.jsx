import React,{useState, useEffect} from "react";
import NewsItem from "./NewsItem";
import Spineer from "./Spineer"
import {Fade} from 'react-reveal'
const News =(props)=> {
   

  const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
  


  useEffect(() => {
    async function fetchMyAPI() {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.categories}&apiKey=902683534c954a9abe5a576426986dfd&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);}
    fetchMyAPI();
  }, [])



  const handlePrevBtn = async () => {
    if ( page - 1 < Math.ceil( totalResults / props.pageSize )) {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.categories}&apiKey=902683534c954a9abe5a576426986dfd&page=${
         page - 1
      }&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setPage(page-1);
      setLoading(false);
    } else {
    }
  };

 const  handleNextBtn = async () => {
    if ( page + 1 < Math.ceil(totalResults / props.pageSize)) {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.categories}&apiKey=902683534c954a9abe5a576426986dfd&page=${
         page + 1
      }&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setPage(page+1);
      setLoading(false);
    } else {
    }
  };

 
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center">NewsMoney - Top Headlines</h2>
          { loading &&<Spineer/>}
          <div className="row my-2">
            {! loading &&  articles.map((value) => {
              return (
                <div className="col-md-4" key={value.url}>
                  <NewsItem
                    title={value.title ? value.title.substring(0, 50) : ""}
                    description={
                      value.description
                        ? value.description.substring(0, 80)
                        : ""
                    }
                    urlToImage={
                      value.urlToImage
                        ? value.urlToImage
                        : "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/9/2021_9$largeimg_966987644.jpg"
                    }
                    url={value.url}
                    lastUpdated = {value.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between">
          <Fade bottom>
            <button
              type="button"
              className="btn btn-dark"
              disabled ={ page <= 1 ? "disabled" : ""}
              onClick={handlePrevBtn}
            >
              &laquo; Prev
            </button>
            </Fade>
            <button
              type="button"
              className="btn btn-dark"
              disabled ={ page + 1 > Math.ceil( articles.totalResults / props.pageSize)}
              onClick={handleNextBtn}
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    );
}

News.defaultProps = {
  categories :"science" ,
  country : "in",
  pageSize : 5
}

export default News;
