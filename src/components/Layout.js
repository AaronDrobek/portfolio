import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default class BaseLayout extends Component{
render(){
console.log(this.props.text);
  let navTitle = {
    "fontFamily": "Arizonia",
    "fontSize": "180%"
  }
  return(
  <div>
    <div className="container_fluid">
      <div className="navbar-header">
        <h2>
          <NavLink activeClassName="selected" to='/home'>Home</NavLink>
          </h2>
          <h2>
            <NavLink activeClassName="selected" to='/about'>About</NavLink>
          </h2>
        <h2>
          <NavLink activeClassName="selected" to='/portfolio'>Portfolio</NavLink>
        </h2>
        <h2>
          <NavLink activeClassName="selected" to='/contacts'>Contacts</NavLink>
        </h2>
        <h2>
          <NavLink activeClassName="selected" to='/references'>References</NavLink>
        </h2>
        <a className="email" href="mailto:adrobek09@gmail.com">Email Me</a>
        </div>
    </div>
    {this.props.children}
  </div>

  )
}

}
