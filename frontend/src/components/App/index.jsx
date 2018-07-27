import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Welcome from '../Welcome/Welcome'
import Home from '../Home/Home'
import Events from '../Events/Events'
import Photos from '../Photo/Photos'
import Videos from '../Video/Videos'
import Shop from '../Shop/Shop'
import Donate from '../Donate/Donate'
import Upload from '../Upload/Upload'

class App extends Component {
    render() {
      return (
        <div>
          <Switch>
            <Route path='/' exact render={() => { return <Welcome /> }} />
            <Route path='/upload' component={Upload} />
            <Route path='/home' component={Home} />
            <Route path='/gallery/photos' component={Photos} />
            <Route path='/gallery/videos' component={Videos} />
            <Route path='/events' component={Events} />
            <Route path='/shop' component={Shop} />
            <Route path='/donate' component={Donate} />
          </Switch>
        </div>
      )
    }
  }

  export default App;