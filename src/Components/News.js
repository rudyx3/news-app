import React from 'react'
import { useEffect , useState } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



const News = (props)=> {


    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - Latest News`

    const updateNews = async ()=>{
      
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=739e85bc180b48479bfa0443d77c0fc8&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);

        let parsedData = await data.json();
  
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }
    
    useEffect(() => {
      updateNews();
      setArticles([])
    }, [props.country])
    

    //this is a module which runs after render
    // async componentDidMount(){
    //     this.updateNews();
    // }

    //functions for the next and the previous clicks
    const fetchMoreData = async () => {
      
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=739e85bc180b48479bfa0443d77c0fc8&page=${page + 1}&pageSize=${props.pageSize}`;
      setPage(page+1)  
      let data = await fetch(url);
        let parsedData = await data.json();
        
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
      
    };
    return (
        <>
         
            <br/>
            <div className="container mt-5" style = {props.darkMode}>
              <h2> News App - Top Headlines {props.heading}</h2> 
            </div>
            
            <br/> 
            {loading && <Spinner/>}
            <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader= {<Spinner/>} style= {{overflow: 'hidden'}}
              >
                <div className="container">
                    <div className="row">
                    {/* This was used previously before using the Previous and Next buttons */}
                    {/* {!this.state.loading && this.state.articles.map((element)=>{ 
                        return <div className="col-md-4 my-1" key = {element.url}>
                            <NewsItem title = {element.title?element.title.slice(0,45) :""} description = {element.description?element.description.slice(0,88):""} 
                            imgUrl = {element.urlToImage?element.urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/luna-25-112016-16x9_0.jpg?VersionId=X06_2C1VLAB8zPdwhwVsNJHQyapbSgmx"} 
                            dateP= {element.publishedAt} newsUrl = {element.url} Author = {element.author} sourceArt = {element.source.name}/>
                        </div> */}
                        
                        {articles.map((element)=>{ 
                          return <div className="col-md-4 my-1" key = {element.url}>
                              <NewsItem title = {element.title?element.title.slice(0,45) :""} description = {element.description?element.description.slice(0,88):""} 
                              imgUrl = {element.urlToImage?element.urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/luna-25-112016-16x9_0.jpg?VersionId=X06_2C1VLAB8zPdwhwVsNJHQyapbSgmx"} 
                              dateP= {element.publishedAt} newsUrl = {element.url} Author = {element.author} sourceArt = {element.source.name}/>
                          </div>

                          })}
                      </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between my-3">
              <button disabled = {this.state.page <=1}className="btn btn-dark" type="button" onClick = {this.handlePreviousClick}> &larr; Previous </button>
              <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)}className="btn btn-dark" type="button" onClick = {this.handleNextClick}>Next &rarr;</button>
          </div> */}
        </>
    )
};

News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
  heading: "Home"
};

News.propTypes = {
  country:  PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  heading: PropTypes.string
}

export default News