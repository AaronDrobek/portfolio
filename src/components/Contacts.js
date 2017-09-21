import React, {Component} from 'react';

export default class Contacts extends Component{
  render(){
    let linkStyle ={
      textDecoration: "none",
      color: "rgb(229,229,229)",

    }
    return(
      <div className="contacts_box">
        <div className="contact_info">
          <div className="contact_header">
            <h2>Get In Touch </h2>
          </div>
          <div className="contact_content">
            <h4>Aaron Drobek</h4>
            <h4>Phone: (586) 801-3585</h4>
            <a style={linkStyle} href="https://linkedin.com/in/aarondrobek"><h4>LinkedIn:  www.linkedin.com/in/aarondrobek</h4>
            </a>
            <a style={linkStyle} href="https://github.com/AaronDrobek"><h4>Git Hub: www.github.com/AaronDrobek</h4>
            </a>
            <a style={linkStyle} href="mailto:adrobek09@gmail.com"><h4>Email: adrobek09@gmail.com</h4>
            </a>
            <a style={linkStyle} href="facetime:5868013585"><h4>{'Click ==> Face Time    <== Click'} </h4>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
