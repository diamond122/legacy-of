import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import './video.css'

class Videos extends Component {
  constructor() {
    super()
    this.state = {
      video: [],
      id: 0
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5050/gallery/videos')
    .then(response => {
      this.setState({
        video: response.data
      })
    })
  }

  onChange = index => {
    this.setState({ id: index })
  }

  render() {
    const { video, id } = this.state
    if (video.length <= 0) {
      return <h2> Loading...</h2>
    }

    let vidGallery = video.map(vid => {
      return (
        <li key={vid._id} className='collection-item'>
          <div>
            {vid.title}
            <a className='secondary-content'>
              <i id='videoPlay' className='material-icons' onClick={() => { this.onChange(video.indexOf(vid)) }} >live_tv</i>
            </a>
          </div>
        </li>
      )
    })

    return (
      <div>
        <Nav />
        <div id='vidPlayer' className='row container'>

          <iframe className='responsive-video col s8 m8' ref={element => (this.player = element)} src={video[id].src} >
          </iframe>

          <ul className='collection with-header col s4 m4'>
            <li className='collection-header'>
              <h6 className='center'>VIDEOS</h6>
            </li>
            {vidGallery}
          </ul>
          
        </div>
        <Footer />
      </div>
    )
  }
}

export default Videos;
