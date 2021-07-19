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
    this.timer = null;

    // setTimeout(() => {
    //   clearInterval(this.timer)  
    // }, 3000);
  }

  tick(){
    const date = new Date()
    const hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    if (minute < 10) {
      minute = `0${minute}`
    }
    if (second < 10) {
      second = `0${second}`
    }
    this.setState({
      time: `${hour}:${minute}:${second}`
    })
  }

  render() {
    return (
      <section className='clock-container'>
        <section className="title-container">
          <p id="">Clock</p>
        </section>
        <section id="clock-content-container">
          <section id="clock-left-side">
            <p id="time">Time:</p>
            <p id="date">Date:</p>
          </section>
          <section id="clock-right-side">
            <p id="time-value">{this.state.time}</p>
            <p id="date-value">{this.state.date}</p>
          </section>
        </section>
      </section>
    )
  }

  componentDidMount() {
    let that = this;
    this.timer = setInterval(function() {
      that.tick()
    }, 1000)
  }

  componentWillUnmount() {
    let that = this;
    clearInterval(that.timer);
  }
}

export default Clock;