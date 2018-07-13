import React from 'react'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <ul className="icons">
      <li>
        <a href="#" className="icon fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="#" className="icon fa-facebook">
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a href="#" className="icon fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
    </ul>
    <p className="copyright">
      &copy; Ryan Rossiter - A{' '}
      <a href="https://lankybastard.com">Lanky Bastard</a> Creation
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: React.PropTypes.bool,
}

export default Footer
