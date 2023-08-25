import React ,{useState} from 'react'
import {Link} from "react-router-dom"
import Flag from "react-world-flags"




const Navbar = (props)=>{

  const [selectedCountry, setSelectedCountry] = useState('in')
  const handleCountryChange = (countryCode)=>{
    setSelectedCountry(countryCode);
    props.changeCountry(countryCode);
    console.log(countryCode)
  }

    return (
      <div>
        <nav className= {`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">News App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/health">Health</Link>
                    </li>    
                    <li className="nav-item">
                    <Link className="nav-link" to="/science">Science</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/technology">Technology</Link>
                    </li>
                </ul>
                </div>
                <div className="dropdown mx-3">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style= {props.darkMode}>
                    {selectedCountry && <Flag code={selectedCountry} height = "18"/>}{' '}
                  </button>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item"  onClick={()=>handleCountryChange('ae')}><Flag code = {"ae"} height ="18"/> United Arab Emirates</button></li>
                    <li><button className="dropdown-item"  onClick={()=>handleCountryChange('us')}><Flag code = {"us"} height ="18"/> United States</button></li>
                    <li><button className="dropdown-item"  onClick={()=>handleCountryChange('gb')}><Flag code = {"gb"} height ="18"/> United Kingdom </button></li>
                    <li><button className="dropdown-item"  onClick={()=>handleCountryChange('in')}><Flag code = {"in"} height ="25"/> India </button></li>
                    
                  </ul>
                </div>
      
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick = {props.changeMode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style = {props.darkMode}>Dark Mode</label>
                </div>
            </div>
        </nav>
      </div>
    )
}
export default Navbar;