import React, { Component } from 'react'
import axios from 'axios'
import Cart from '../Cart/Cart'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import './shop.css'

class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shop: [],
      cart: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5050/shop')
    .then(response => {
      this.setState({
        shop: response.data
      })
    })
  }

  addMerch = merch => {
    axios
      .post('http://localhost:5050/cart', merch)
      .then(response => {
        console.log(response.data)
        this.setState({
          cart: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { shop } = this.state
    if (shop.length <= 0) {
      return <h2> Loading... </h2>
    }

    let shopObject = this.state.shop.map(merch => {
      return (
        <div className='col s12 m6 l4' key={merch._id}>
          <div className='card'>
            <div className='card-image'>
              <img src={merch.src} alt={merch.title} />
              <a className='btn-floating halfway-fab waves-effect waves-light cyan darken-1'>
                <i onClick={() => { this.addMerch(merch) }}
                className='material-icons' >
                  add_shopping_cart
                </i>
              </a>
            </div>
            <div className='card-content'>
              <p className='center-align'>
                {merch.title.toUpperCase()}
                <br />
                ${merch.price}
              </p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        <Nav />

        <div id='shop'>
          <div className='row container'>
            {shopObject}
          </div>
        </div>

        <Cart cart={this.state.cart} />
        <Footer />

      </div>
    )
  }
}

export default Shop;
