import React, { Component } from 'react';
import Form from './Form'
import Confirmation from './Confirmation';
import './scss/main.scss'

class App extends Component {
  state = {
    placement: {}
  };

  handleSubmit = (placement) => {
    this.setState({ placement });
  }

  render () {
    return (
      <div className="app">
        <header className="app-header">
        </header>
        {Object.keys(this.state.placement).length > 0 ?
        <Confirmation placement={this.state.placement} /> :
        <Form handleSubmit={this.handleSubmit} />
        }
      </div>
    );
  }
}

export default App;
