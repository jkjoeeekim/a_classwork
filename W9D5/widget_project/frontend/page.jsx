import React from 'react';
import Clock from './clock';
import Tab from './tab'

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <Clock/>
        <Tab tabs={this.props.tabs}/>
      </section>
    )
  }
}

export default Page;