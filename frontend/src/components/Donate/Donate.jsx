import React from 'react'
import { Link } from 'react-router-dom'

const Donate = () => {
    return (
      <div>
        <div className='container center'>
          <p>THANK YOU FOR YOUR SUPPORT</p>
            <Link to='/home' className='btn waves-effect waves-light blue darken-1'>
              HOME
            </Link>
        </div>
      </div>
    )
  }

export default Donate;
