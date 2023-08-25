import React from 'react'

const NewsItem = (props)=> {
    
    let {title, description ,imgUrl , dateP , newsUrl , Author , sourceArt} = props
    return (
      <div className="my-1">
        
        <div className="card" style={{backgroundColor: "#e3e5e3"}}>
        <div>
          <span className="badge rounded-pill bg-danger" style ={{display: "flex" , justifyContent : "flex-end", position: 'absolute' , right: "0" }} >
                    {sourceArt} </span>
        </div>
        
        <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title} 
                </h5>
                <p className="card-text">{description}...</p>
                <a href= {newsUrl} rel="noreferrer" target = "_blank" className="btn btn-sn btn-success">Read More</a>
                <br/><p className='card-text my-2' >Pulished On: <b>{new Date(dateP).toUTCString()} </b></p>
                <p className='card-text my-2'> By {Author?Author : "Unknown"} </p>
            </div>
        </div>
      </div>
    )
}

export default NewsItem;