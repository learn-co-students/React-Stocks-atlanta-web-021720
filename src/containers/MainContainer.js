import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolios: [],
    filter: false
  }

  componentDidMount()
  {
    fetch('http://localhost:3000/stocks')
    .then(res=>res.json())
    .then(data=>{
      this.setState({stocks: data})
      }
    )
  }

  buyStock = (stock) =>
  {
    //console.log('buyStock', stock)
    this.setState({portfolios: [...this.state.portfolios, stock]})
  }

  sellStock = (stock) =>
  {
    //console.log('buyStock', stock)
    this.setState({portfolios: [...this.state.portfolios, stock]})
  }
 
  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer {...this.state} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer {...this.state} buyStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
