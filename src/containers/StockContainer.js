import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

loadStocks = () => {
  console.log(this.props.stocks)
  return this.props.stocks.map(stock => {
    
    return <Stock stock = {stock} />
    
  })
}

  render() {
    console.log(this.props.stocks)
    return (
      <div>
        <h2>Stocks</h2>
        {this.loadStocks()}

        {this.props.stocks.map(stock => stock.name)}
      </div>
    );
  }

}

export default StockContainer;
