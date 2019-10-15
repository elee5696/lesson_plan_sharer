import React from 'react';

export default class Header extends React.Component {
 render () {
   return (
     <div className="header-container">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand" href="#">Prov</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
           <ul className="navbar-nav ml-auto mt-2 mr-4 mt-lg-0">
             <li className="nav-item active">
               <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">Provs</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">Discuss</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">Ideas</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">User</a>
             </li>
           </ul>
           <form className="form-inline my-2 my-lg-0">
             <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
               <button className="btn btn-outline-success mr-2 my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
     </div>
   )
 }
}
