import React from 'react';
import App from './app';
import { Provider } from 'react-redux';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <App />
      </Provider>
    );
  }
}

export default Root;