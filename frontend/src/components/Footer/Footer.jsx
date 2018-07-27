import React from 'react'
import './footer.css'

const Footer = () => {
  return (

    <footer className='page-footer grey lighten-3'>
      <div className='container'>
        <div className='row'>

          <div className='col l6 s12'>
            <h4 className='cyan-text text-darken-2'>
              In Loving Memory of
            </h4>
            <p className='cyan-text text-darken-1'>
              RAPHAEL ALCOREZA
              <br/>
              August 24, 2000 - December 7, 2017
            </p>
          </div>

        </div>
      </div>

      <div className='footer-copyright cyan-text text-darken-1'>
        <div className='container'>
          © 2018 Copyright Text
          <a className='cyan-text text-darken-1 right' target='blank' href='https://www.linkedin.com/in/azuno/'>AMZ</a>
        </div>
      </div>
    
    </footer>

    )
  }

export default Footer;

