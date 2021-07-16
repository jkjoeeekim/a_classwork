import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    
    const date = new Date()
    this.state = {
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      date: `${date.toDateString()}`
    }
    
    this.tick = this.tick.bind(this)
    let that = this
    this.timer = setInterval(function() {
      that.tick()
    }, 1000)

    // setTimeout(() => {
    //   clearInterval(this.timer)  
    // }, 3000);
  }

  tick(){
    const date = new Date()
    this.setState({
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    })
  }

  render() {
    return (
      <div className='clock-container'>
        <p>Time:</p>
        <p> {this.state.time}</p>
        <p>Date:</p>
        <p>{this.state.date}</p>
      </div>
    )
  }
}

export default Clock;