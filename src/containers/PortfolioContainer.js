import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  state = {
    showUserStock: true
  }

  handleClick = stock => {
    this.props.handleStockRemove(stock)
  }

  renderUserStocks = () => {
    return this.props.userStocks.map(stock => 
    <Stock key={stock.id} stocks={stock} handleUserClick={() => this.handleClick(stock)} userStock={true} showUserStock={this.state.showUserStock}/>
    )
  }

  render() {
    console.log("user stocks", this.props.userStocks)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.renderUserStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
