import React, {Component} from 'react';

export default class Home extends Component {
  constructor(){
    super();

    // this.state= {
    //
    // picpic: "/images/port_image-22765.jpg"
    // }
  }
  render() {

    let someText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
      <div className="home_box">
        <div className="home_text">
              <div className="home_header">
              <h1 >This is my home page</h1>
              <img className="picture" src={require("../images/port_image-22765.jpg")}/>

              </div>
            <hr/>
            <h4 style={{fontSize: "14pt"}}>{someText}</h4>

        </div>
      </div>
    )
  }
}
