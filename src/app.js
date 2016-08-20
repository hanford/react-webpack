import React, { Component } from 'react'
import style from './app.css'

class App extends Component {
  render () {
    return (
      <div className={style.app}>
        <div className={style.header}>
          <h2>react-webpack</h2>
        </div>
      </div>
    )
  }
}

export default App
