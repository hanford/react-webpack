import React from 'react'
import style from './style.css'
console.log(style)

export default class Header extends React.Component {
  render() {
    return (
      <h2 className={ style.footer }>Footer</h2>
    )
  }
}
