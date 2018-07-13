import React from 'react'
import RR from '../images/rr.png'
import vid from '../videos/ry-highlight.mp4'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div class="fullscreen-video-wrap">
      <video muted autoPlay loop id="bg">
        <source src={vid} autoPlay loop autoPlay />
      </video>
    </div>

    <div className="logo">
      <img src={RR} alt="" className="logo-img" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Ryan Rossiter</h1>
        <p>
          Hey! Im Ryan, a professional basketball player currently living in
          Japan.
          <a href="https://ryross.com"> Find out</a> more info <br />
          about me below
          <a href="https://ryross.com"> or contact on social</a>.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Career
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Partners
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Header
