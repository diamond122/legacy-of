import React, { Component } from 'react'
import axios from 'axios'
// import './upload.css'

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: []
    }
  }

  submit = e => {
    e.preventDefault()
    console.log(e)
    axios
      .post('http:localhost:5050/upload', e)
      .then(response => {
        let newInfo = {
          first: response.data
        }
        let tempInfo = this.state.info
        tempInfo.push(newInfo)
        console.log(newInfo)
        this.setState({
          info: tempInfo
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            Please provide a brief description of the recently departed...
            Once completed, the information you have provided will be sent to a developer who will create a draft site for you. They will be in contact with you in less than 72 hours.
        </div>
        </div>

        <div className="row">
          <form onSubmit={() => { this.submit(this.refs.text.value) }} className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input ref='text' name='text' id="first_name" type="text" className="validate" />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className='row'>
              <div className='col s6'>
                <input id='birth_date' type="text" className="datepicker" />
                <label htmlFor="birth_date">Date of Birth</label>
              </div>
              <div className='col s6'>
                <input id='death_date' type="text" className="datepicker" />
                <label htmlFor="death_date">Date of Passing</label>
              </div>
            </div>
            <div className="row">
              <div className='col s1 m3'>
                <input id='funeral_date' type="text" className="datepicker" />
                <label htmlFor="funeral_date">Funeral Date</label>
              </div>
              <div className="input-field col s11 m9">
                <input id="location" type="text" className="validate" />
                <label htmlFor="location">Funeral Address</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="reason" type='text' className="validate" />
                <label htmlFor="reason">Cause of Death</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <textarea id="biography" className="materialize-textarea"></textarea>
                <label htmlFor="biography">Biography</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </form>

        </div>

      </div>
    )
  }
}

export default Upload;