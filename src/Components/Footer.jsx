import React from 'react';

// This component is for your footer, which sits at the bottom of the browser. It usually contains contact info and links.
const Footer = () => {
  return <footer className="App-footer-area">
    <a href="https://www.linkedin.com/in/kay-vose-codefox/" target="_blank" rel="noopener noreferrer">
      <img className="footer-img" src={require("../images/linkedin-logo.png")} alt="linkedin icon" />
    </a>
    <a href="https://codeandstuff-manchester.github.io/" target="_blank" rel="noopener noreferrer">
      <img className="footer-img code-and-stuff-img" src="https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsIjIwMTkvMDYvMTgvMTAvMDUvMTAvODYzL2NvZGUuUE5HIl0sWyJwIiwidGh1bWIiLCI2MDB4NDUwXHUwMDNlIl1d" alt="code and stuff icon" />
    </a>
    <a href="https://github.com/theCodeFox" target="_blank" rel="noopener noreferrer">
      <img className="footer-img" src={require("../images/github-logo.png")} alt="github icon" />
    </a>
  </footer>
}

export default Footer;