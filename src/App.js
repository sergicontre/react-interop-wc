import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'my-credit-card'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: 'LitElement Bank',
      info: ''
    };
    // This binding is necessary to make `this` work in the callback
    this.sendInfo = this.sendInfo.bind(this);
  }
  
  componentDidMount() {
    document.getElementById('card').addEventListener('credit-card-details', this.sendInfo)
  }

  componentDidUnmount() {
    document.getElementById('card').removeEventListener('resize', this.sendInfo)
  }
  
  sendInfo(event) {
    console.log('===>', event);
    this.setState(state => ({
      info: JSON.stringify(event.detail)
    }));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          React App with Web Components
        </header>
        <div className="App-wc">
          <my-credit-card id="card" title={this.state.title}></my-credit-card>
        </div>
        <h4>(*) Fill data and click over VISA icon and see how React listen credit card info event from Web Component</h4>
        <h5><strong>Credit card info:</strong></h5>
        <p>{ this.state.info }</p>
      </div>
    );
  }
  
  
}

export default App;
