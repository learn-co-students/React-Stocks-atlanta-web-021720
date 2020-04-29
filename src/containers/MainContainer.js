import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    userStocks: [],
    filterByType: null
  }

  fetchStockData = () => {
    fetch("http://localhost:3000/stocks")
    .then(r => r.json())
    .then(stockData => {
      this.setState({
        stocks: stockData
      })
    })
  }

  componentDidMount() {
    this.fetchStockData()
  }

  handleStockToUser = (stock) => {
    let newStock = this.state.userStocks.concat(stock)
    this.setState({
      userStocks: newStock
    })
  }

  handleStockRemove = stock => {
    this.setState(prevState => ({
      userStocks: prevState.userStocks.filter(uStock => uStock !== stock)
    }))
  }

  filterStocksByType = (event) => {
    let value = event.target.value
    let filterArr = this.state.stocks.filter(uStock => uStock.type === value)

      this.setState({
        stocks: filterArr
      })
  }

  handleAplhaChange = () => {
    let sortedStocks = this.state.stocks.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
    }
    if (b.name < a.name) {
        return 1;
    }
    return 0;
    })
    console.log(sortedStocks)
    this.setState({
      stocks: sortedStocks
    })
  }

  handleNumberChange = () => {
    let sortedStocks = this.state.stocks.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
    }
    if (b.price < a.price) {
        return 1;
    }
    return 0;
    })
    console.log(sortedStocks)
    this.setState({
      stocks: sortedStocks
    })
  }

  render() {
    console.log(this.state.userStocks)
    return (
      <div>
        <SearchBar
        handleNumberChange={this.handleNumberChange}
        handleAplhaChange={this.handleAplhaChange}
        filterStocksByType={this.filterStocksByType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer 
              stocks={this.state.stocks}
              handleStockToUser={this.handleStockToUser}
              userStocks={this.state.userStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer
              stocks={this.state.stocks}
              userStocks={this.state.userStocks}
              handleStockRemove={this.handleStockRemove}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
