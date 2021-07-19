import React from 'react';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'tile-unclicked',
      alt: false
    };

    this.clearing = false;

    this.keypress = function (event) {

    };

    this.clickTile = this.clickTile.bind(this);

    let that = this;

    document.addEventListener("keydown", function (e) {
      if (e.altKey) {
        that.state.alt = true
      }
    });

    document.addEventListener("keyup", function(e) {
      console.log(e)
      if (e.key === "Alt") {
        console.log('keyup', e)
        that.state.alt = false;
      }
    })
  }

  clickTile(e) {
    // console.log(e)
    console.log(this.state.alt)
    let that = this;

    if (this.state.alt) {
      this.setState({
        status: 'tile-flag'
      });
    } else {
      this.setState({
        status: 'tile-clicked'
      });
    }

    this.props.updateGame(this, this.state.alt)
  }



  render() {
    let that = this;

    let content = ' ';
    if (this.props.content.bombed) {
      content = "B";
    } else if (this.props.content.explored) {
      content = "E";
    } else if (this.props.content.flagged) {
      content = "F";
    }


    return (
      <li className={this.state.status} onClick={function (e) { that.clickTile(e); }}>{content}</li>
    );
  }
}