import React, { Component } from 'react'
import './cart.css'

class Cart extends Component {
  render() {

    let index = 0
    let cartJSX = this.props.cart.map(merch => {
      index++
      return (
        <div key={index} className='col s6 m2'>
          <img id='cart' src={merch.src} alt='shop' />
        </div>
      )
    })

    let acc = document.getElementsByClassName('accordion')
    let i

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active')
        let panel = this.nextElementSibling
        if (panel.style.display === 'block') {
          panel.style.display = 'none'
        } else {
          panel.style.display = 'block'
        }
      })
    }

    return (
      <div className='center'>
        <a id='button' className='accordion btn waves-effect waves-light cyan darken-1'>
          <i className='material-icons'>shopping_cart</i>
        </a>
        <div className='row'>{cartJSX}</div>
      </div>
    )
  }
}

export default Cart;