import React from 'react';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content = '_';
    if (this.props.content.bombed) {
      content = "B" 
    } else if (this.props.content.explored) {
      content = "E"
    } else if (this.props.content.flagged) {
      content = "F"
    } 

    return (
      <li>{content}</li>
    )
  }
}