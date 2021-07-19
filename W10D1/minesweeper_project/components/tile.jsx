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
        that.setState({alt: true})

        if (!that.clearing) {
          that.clearing = true;
          setTimeout(function () {
            that.state.alt = false;
            that.clearing = false;
          }, 100);
        }
      }
    });

    // document.addEventListener("keyup", function(e) {
    //   if (e.altKey) {
    //     console.log('keyup', e)
    //     that.state.alt = false;
    //   }
    // })
  }

  clickTile() {
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
  }

  // keypress(e) {
  //   console.log(e)
  // }

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
      <li className={this.state.status} onKeyPress={that.keypress} onClick={function () { that.clickTile(); }}>{content}</li>
    );
  }
}