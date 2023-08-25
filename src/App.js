import './App.css';

//learning to work with class based components in React
//Having a good understanding of class based components is essential to fulfill developing of a react app.

import React, { useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import{BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = ()=>{
  //method creation is much better

  const [mode, setMode] = useState("light")
  const [style, setStyle] = useState({
    color: "black",
    background: "transparent"
  })
  const [style2, setStyle2] = useState({
    backgroundColor: "transparent"
  })
  
  
  
  const ChangeMode = ()=>{
    // console.log("method reached" + mode)
    
    if (mode === "light"){
      setMode("dark")
      setStyle({color:"white" , background:"transparent"})
      setStyle2({backgroundColor: "#212529f7"})
        
    }
    else{
      setMode("light")
      setStyle({color:"black" , background:"transparent"})
      setStyle2({backgroundColor: "transparent"})
    }
  }

  const [country1, setCountry1] = useState()
  const changeCountry =(cCode) =>{
    setCountry1(cCode);
    
  }
  
  let pageSize = 6;
  let apiKey = process.env.REACT_APP_NEWS_API
    return (
      <div style = {style2}>
        <Router>        
          <Navbar changeMode = {ChangeMode} mode = {mode} darkMode = {style} changeCountry = {changeCountry} />
          <Routes>
            <Route exact path ="/" element = {<News key = "general" pageSize = {pageSize} country = {country1} apiKey = {apiKey} category ="general" heading = "Home" darkMode = {style}/>}/>
            <Route exact path ="/business" element = {<News key = "business" pageSize = {pageSize} country = {country1} apiKey = {apiKey} category ="business" heading = "Business Financial World" darkMode = {style}/>}/>
            <Route exact path ="/entertainment" element = {<News key = "entertainment" pageSize = {pageSize} country = {country1} apiKey = {apiKey} category ="entertainment" heading = "Entertainment Industry" darkMode = {style}/>}/>
            <Route exact path ="/sports" element = {<News key = "sports" pageSize = {pageSize} country = {country1} apiKey = {apiKey} category ="sports" heading = "Sports and Activities" darkMode = {style}/>}/>
            <Route exact path ="/science" element = {<News key = "science" pageSize = {pageSize} country = {country1} apiKey = {apiKey} category ="science" heading = "Science" darkMode = {style}/>}/>
            <Route exact path ="/health" element = {<News key = "health " pageSize = {pageSize} country = {country1} apiKey = {apiKey} category ="health" heading = "Health and Fitness" darkMode = {style}/>}/>
            <Route exact path ="/technology" element = {<News key = "technology" pageSize = {pageSize} country = {country1} apiKey = {apiKey} category ="technology" heading = "Technological Interventions" darkMode = {style}/>}/>
          </Routes>

        </Router>
      </div>
    )
  
}

export default App;