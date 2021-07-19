import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    }
  }

  selectTab(idx) {
    console.log(idx)
    this.state.selected = idx
  }

  render() {
    const tabBar = this.props.tabs.map((tab, idx) => {
      return (
        <li key={idx} className={tab.title} onClick={() => {this.selectTab(idx)}}>{tab.title}</li>
      )
    });

    const tabSections = this.props.tabs.map((tab, idx) => {
      return (
        <section key={idx} className={tab.title + "-section"}>
          <p>{tab.content}</p>
        </section>
      )
    })

    return(
      <section className="tabs-container">
        <section className="title-container">
          <p>Tabs</p>
        </section>

        <section className="tabs-content-container">
          <section className="tabs-bar">
            <ul>
              {tabBar}
            </ul>
          </section>
          {tabSections}
        </section>
      </section>
    )
  }
}

export default Tab