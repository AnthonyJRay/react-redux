import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      health: 100,
      level: 1,
      lowLevelClass: 'danger-red'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <div className={`blue-bg ${(this.state.health < 55) ?
      this.state.lowlevelClass : ''}`}>
        <h3>Name: {this.state.name}</h3>
        <h3>Health: {this.state.health}</h3>
        <h3>Level: {this.state.level}</h3>
        <img src="/img/bape.png" alt={'girl with bape'}
        onClick={this.clickedGirl}></img>
        </div>
      </div>
    )
  }
}

var Header = function() {
  return (<header>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </header>)
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
