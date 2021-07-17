import React from 'react';
import Clock from './clock';
import Tab from './tab'

class Page extends React.Component {

  render() {
    return (
      <section>
        <Clock/>
        <Tab/>
      </section>
    )
  }
}

export default Page;