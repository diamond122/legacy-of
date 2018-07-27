import React, { Component } from 'react'

class Upload extends Component {

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
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="last_name">First Name</label>
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
          </form>

          <form action="#">
            <div className="file-field input-field">
              <div className="btn">
                <span>File</span>
                <input type="file" multiple />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" placeholder="Upload one or more files" />
              </div>
            </div>
          </form>

          <div className='row'>
            <form className='col s4' action="#">
              <p>How may we contact you?</p>
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>Phone</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" />
                  <span>Email</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" />
                  <span>Both</span>
                </label>
              </p>
            </form>
            <form className='input-field col s8'>
            <input id="phone" type="text" className="validate" />
                <label htmlFor="phone">Phone Number</label>
                <br />
                <br />
            <input id="email" type="email" className="validate" />
                <label htmlFor="email"><br/><br/>Email Address</label>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Upload;