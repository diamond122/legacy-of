import React, { Component } from 'react'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import './event.css'
import Map from '../Map/Map'

class Events extends Component {

  showEvent = address => {
    geocodeByAddress(address)
      .then(results => console.log( getLatLng(results[0]) ))
      .then((lat, lng) => {
        this.setState({ address: { lat, lng } })
        console.log(this.state.address)
        return <Map center={this.state.address} />
      })
      .catch(error => console.log('Error', error))
  }

  render() {
    return (

      <div>
        <Nav />

        <div id='chart' className='collection container'>
          <a onClick={() => { }} className='collection-item cyan-text darken-1'>
            CANDLELIGHT VIGIL
            <span className='date right'>DEC 9, 2017</span>
          </a>
          <a href='#!' className='collection-item cyan-text darken-1'>
            OPEN CASKET VIEWING
            <span className='date right'>DEC 18 & 19, 2017</span>
          </a>
          <a href='#!' className='collection-item cyan-text darken-1'>
            FUNERAL
            <span className='date right'>DEC 20, 2017</span>
          </a>
          <a href='#!' className='collection-item cyan-text darken-1'>
            SENIOR BOYS HOME OPENER - TRIBUTE NIGHT
            <span className='date right'>JAN 5, 2018</span>
          </a>
          <a href='#!' className='collection-item cyan-text darken-1'>
            SURREY RCMP BASKETBALL CLASSIC
            <span className='date right'>JAN 9, 2018</span>
          </a>
          <a href='#!' className='collection-item cyan-text darken-1'>
            VANCOUVER DRAGONS VS SEATTLE ADMIRALS
            <span className='date right'>APR 9, 2017</span>
          </a>
          <a href='#!' className='collection-item cyan-text darken-1'>
            PR ALUMNI TOURNAMENT
            <span className='date right'>MAY 5, 2017</span>
          </a>
        </div>

        <br />
        <br />

        <Map />

        <Footer />

      </div>
    )
  }
}

export default Events;