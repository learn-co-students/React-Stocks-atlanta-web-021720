import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  handleStockClick = (stock) => {
    this.props.handleStockToUser(stock)
  }

  renderStocks = () => {
    return this.props.stocks.map(stock => 
      <Stock key={stock.id} stocks={stock} handleStockClick={() => this.handleStockClick(stock)} />
    )
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
