import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  
state = {
stocks: [],
filter: "none"
  }

  componentDidMount(){

    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({stocks: data})
    })
  }

renderStocks = () => {

  if(this.state.filter === "none"){
    console.log(this.state)
    return this.state.stocks
  }else {
    return "happy"
  }
}




  render() {
    if (this.state.stocks === []){
      return "loading"
    }
    return (
      <div>
        <Header/>
        <MainContainer  stocks = {this.renderStocks()}/>
      </div>
    );
  }
}

export default App;
