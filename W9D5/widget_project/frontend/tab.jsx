import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section>
        <section class="tab-bar">
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </section>
        <section class="first">
          <p>I am the first</p>
        </section>
        <section class="second">
          <p>I am the second</p>
        </section>
        <section class="third">
          <p>I am the third</p>
        </section>
      </section>
    )
  }
}

export default Tab