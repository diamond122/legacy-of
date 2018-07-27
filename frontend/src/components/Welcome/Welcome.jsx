import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Typist from 'react-typist'
import Footer from '../Footer/Footer'
import axios from 'axios'
import './welcome.css'

class Welcome extends Component {
  constructor() {
    super()
    this.state = {
      detail: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5050/details')
    .then(response => {
      this.setState({
        detail: response.data
      })
    })
  }

  render() {
    let appDetail = this.state.detail.map(info => {
      return (
        <div className='col s12 m6 l4'>
          <div className='card horizontal  cyan darken-1 white-text'>
            <div className='card-img avatar'>
              <i className='medium material-icons'>{info.icon}</i>
            </div>
            <div className='card-stacked'>
              <div className='card-content'>
                <span className='title'>{info.title}</span>
                  <p className='text'>{info.description}</p>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        <header>
          <Typist className='center'>
            <h4 id='site' className='white-text'>
            Let the Legacy of your <br /> dearly departed loved ones live on</h4>
          </Typist>
          <Link to='/home' id='demo' className='btn-large waves-effect waves-light white cyan-text text-darken-1'>
            DEMO
          </Link>
          <Link to='/upload' id='create' className='btn-large waves-effect waves-light white cyan-text text-darken-1'>
            GET STARTED
          </Link>
          <img className='responsive-img' src='/img/cloud.jpg' alt='clouds' />
        </header>

        <main>
          <div id='blurb' className='container center'>
            <h5>Legacy Of helps users commemorate their loved ones and ease the process of coping with their absence. It is an interactive social platform where family and friends provide and receive support from one another, share memories through a gallery, and organize around events, causes and fundraising in memorial of their loved ones.</h5>
          </div>
          <div id='cardBlock' className='container row'>
            {appDetail}
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}

export default Welcome;
