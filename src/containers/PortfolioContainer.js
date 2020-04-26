import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks()
  {
    // return <Stock stocks={this.props.stocks}/>
    return ( this.props.portfolios.map( stock => {
        return ( <Stock key = {stock.id} stock={stock} sellStock={this.props.sellStock}/> )
        }
      )
    )
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.renderStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
