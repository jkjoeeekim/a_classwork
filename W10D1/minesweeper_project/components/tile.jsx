import React from 'react';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'tile-unclicked',
      alt: false
    };

    this.keypress = function (event) {
    };

    this.clickTile = this.clickTile.bind(this);

    let that = this;
    document.addEventListener("keydown", function (e) {
      if (e.altKey) {
        // that.setState({ alt: true })
        that.state.alt = true;
      }
    });

    document.addEventListener("keyup", function (e) {
      if (e.key === "Alt") {
        // that.setState({ alt: false })
        that.state.alt = false;
      }
    })
  }

  clickTile(e) {
    console.log(this.state.alt)
    let that = this;
    if (this.props.tile.flagged || this.props.tile.explored ) return;

    if (this.state.alt) {
      this.props.tile.toggleFlag();
      // console.log(this.props.tile)
      this.setState({
        status: 'tile-flag'
      });
    } else {
      this.props.tile.explore();
      // console.log(this.props.tile);
      this.setState({
        status: 'tile-clicked'
      });
    }

    this.props.updateGame()
  }



  render() {
    let that = this;

    let tile = ' ';
    if (this.props.tile.bombed) {
      tile = "B";
    } else if (this.props.tile.explored) {
      tile = "E";
    } else if (this.props.tile.flagged) {
      tile = "F";
    }


    return (
      <li className={this.state.status} onClick={function (e) { that.clickTile(e); }}>{tile}</li>
    );
  }
}