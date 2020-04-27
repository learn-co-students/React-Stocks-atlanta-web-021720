import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const portfolioStocks = this.props.portfolioStocks
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          portfolioStocks.map(stock => {
            return <Stock stock={stock} key={`portfolio${stock.id}`} handleClick={() => this.props.handleClick("portfolio", stock)} />
          })
        }
      </div>
    );
  }

}

export default PortfolioContainer;
