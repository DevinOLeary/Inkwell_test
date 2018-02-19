import React from 'react';
import MediaQuery from 'react-responsive';
import {Link} from 'react-scroll';
import {Link as GatsbyLink} from 'gatsby-link';

import Logo from '../components/Logo';

const logoDesktop = {
  height: "70px",
  width: "70px",
  margin: "20px"
}

const logoMobile = {
  height: "50px",
  width: "50px",
  margin: "10px"
}

const titleText = {
  position: 'absolute',
  top: '0px',
  textAlign: 'center',
  width: '100%',
  zIndex: '0',
  fontFamily: 'Yesteryear'
}
const NavItems = () =>(
  <ul className="container row nav-menu">
    <Link to="menuBlock" smooth={true} offset={-70}><li>menu</li></Link>
    <Link to="about" smooth={true} offset={-210}><li>about</li></Link>
    <Link to="merchBlock" smooth={true} offset={-120}><li>merch</li></Link>
    <Link to="blogBlock" smooth={true} offset={-200}><li>blog</li></Link>
    <Link to="contact" smooth={true} offset={-120}><li>contact</li></Link>
  </ul>
)

const DesktopHeader = (props) => (
  <header className="nav-bar">
    {
      props.location.pathname !== '/home/' ?
        (<div>
          <div className="container row spread">
            <Logo style={logoDesktop}/>
          </div>
          <h3 style={titleText}>{props.data.site.siteMetadata.title}</h3>
        </div>)
      :
      (
        <div>
          <MediaQuery minWidth={850}>
            <div>
              <div className="container row spread">
                <Logo style={logoDesktop}/>
                <NavItems/>
              </div>
              <h3 style={titleText}>{props.data.site.siteMetadata.title}</h3>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={849}>
            <div className="container row">
              <Logo style={logoMobile}/>
              <NavItems/>
            </div>
          </MediaQuery>
        </div>
      )
    }
  </header>
)

export default DesktopHeader;
