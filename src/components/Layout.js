import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default class BaseLayout extends Component{
render(){

  let navTitle = {
    "fontFamily": "Arizonia",
    "fontSize": "180%"
  }
  return(
  <div>
    <div className="container_fluid">
      <div className="navbar-header">
        <h2>
          <NavLink to='/home'>Home</NavLink>
          </h2>
          <h2>
            <NavLink to='/'>About</NavLink>
          </h2>
        <h2>
          <NavLink to='/'>Portfolio</NavLink>
        </h2>
      </div>
    </div>

    {this.props.children}
    </div>

  )
}

}
