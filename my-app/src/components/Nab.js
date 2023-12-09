import React  from 'react'
import {Link} from 'react-router-dom';

const Nab=(props) =>{
 
    // deletes entities
    return (
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link  className="navbar-brand" href="/">Top Latest Headlines</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link  className="nav-link " aria-current="page" href="/">Home</Link>
                  </li>
                  {/* <li className="nav-item"><Link  className="nav-link" to="/">Link</Link></li> */}
                  <li className="nav-item"><Link  className="nav-link" to="/business"> business</Link></li>
                  <li className="nav-item"><Link  className="nav-link" to="/entertainment">entertainment</Link></li>
                  <li className="nav-item"><Link  className="nav-link" to="/general"> general</Link></li>
                  <li className="nav-item"><Link  className="nav-link" to="/health"> health</Link></li>
                  <li className="nav-item"><Link  className="nav-link" to="/science"> science</Link></li>
                  <li className="nav-item"><Link  className="nav-link" to="/sports"> sports</Link></li>
                  <li className="nav-item"><Link  className="nav-link" to="/technology"> technology</Link></li>
                  
                  <li className="nav-item dropdown">
                    <Link  className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="ondropdownbyweater">
                      <li><Link  className="dropdown-item ondropdownbyweater" href="/">Delhi</Link></li>
                      <li><Link  className="dropdown-item ondropdownbyweater" href="/">Settle</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link  className="dropdown-item ondropdownbyweater"  href="/">Bangalore</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link  className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <input id ="city" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit" id="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>

    )
}
export default Nab;
