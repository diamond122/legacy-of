import React, { Component } from "react";
import axios from "axios";
import './photo.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

class Photos extends Component {
  constructor() {
    super();

    this.state = {
      photo: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5050/gallery/photos").then(response => {
      this.setState({
        photo: response.data
      });
    });
  }

  render() {
    const { photo } = this.state;
    if (photo.length <= 0) {
      return <h2> Loading....</h2>
    }
    return (
      <div>
        <Nav />
        <div className='center'>
          <img id='grid' src={photo.src} alt='grid' />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Photos;
