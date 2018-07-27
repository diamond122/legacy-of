import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { provider, auth } from '../../firebase.js'
import firebase from 'firebase'
import './nav.css'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      isLoading: false
    }
  }

  login = () => {
    let provider = new firebase.auth.FacebookAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        let token = result.credential.accessToken;
        let userName = result.user.displayName;
        console.log(userName)
        this.setState({ user: userName, isLoading: true })
      })
      .catch(function (error) {
        console.log(error)
      })
    console.log(this.state.user + 'logged in')
  }

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log(this.state.user)
        this.setState({
          isLoading: false,
          user: null
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    console.log(this.state.user + 'logged out')
  }

  render() {
    return (
      <div>
        <nav id='bar' className=' cyan darken-1'>
          <div className='nav-wrapper'>
          
            <Link to='/home'>
              <span id='logo' className='brand-logo center'>
                LEGACY OF RAPHAEL
              </span>
            </Link>

            <span className='left navText'>
              <Link to='/gallery/photos'> PHOTOS &nbsp;</Link>
              <Link to='/gallery/videos'> VIDEOS &nbsp;</Link>
              <Link to='/events'> EVENTS &nbsp;</Link>
              <Link to='/shop'> SHOP </Link>
            </span>

            <span className='right navText'>
              <a onClick={() => { this.login() }}>
                LOGIN  &nbsp; &nbsp;
              </a>
              <a onClick={() => { this.logout() }}>
                LOG OUT
              </a>
            </span>

          </div>
        </nav>

        {/* To output user's name on the site to show they are logged in
        <div className=' center'>
          Welcome {this.state.isLoading ? this.state.user : 'Guest'}
        </div> */}

      </div>
    )
  }
}

export default Nav;
