import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  
  renderStocks()
  {
    // return <Stock stocks={this.props.stocks}/>
    return ( this.props.stocks.map( stock => {
        return ( <Stock key = {stock.id} stock={stock} tradeStock={this.props.buyStock}/> )
        }
      )
    )
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
