import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor() {
    super();
    this.state = {
      allStocks: ["Loading..."],
      portfolioStocks: [],
      filterType: null,
      filterOn: false,
      sortType: null
    }
  }

  //Fetch all stocks and set them to the allStocks state
  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(stocks => {
        this.setState({ allStocks: stocks })
      })
  }

  //Handle stock click to add stock to portfolio and Remove stocks from portfolio
  handleClick = (eventName, stock) => {

    eventName === "stocks" ?
      this.setState({ portfolioStocks: [...this.state.portfolioStocks, stock] })
      :
      this.handleRemovePortfolioStock(eventName, stock)

  }

  //Sells all Multiples of Stock right now...not ideal
  handleRemovePortfolioStock = (eventName, stock) => {
    let updatedStocks = this.state.portfolioStocks.filter(portfolioStock => portfolioStock.name !== stock.name)
    console.log("filtered Stocks: ", updatedStocks)
    this.setState({ portfolioStocks: updatedStocks })
  }

  //Handle filter change and set state of current filter type
  handleFilterChange = (event) => {
    const filterType = event.target.value
    this.setState({ filterType: filterType })
    this.setState({ filterOn: true })
  }

  //Handle sort change and set state of current sort state
  handleSort = (event) => {
    this.setState({ sortType: event.target.value })
  }


  render() {
    return (
      <div>
        <SearchBar
          handleFilterChange={this.handleFilterChange}
          handleSort={this.handleSort}
        />

        <div className="row">
          <div className="col-8">

            <StockContainer
              allStocks={this.state.allStocks}
              handleClick={this.handleClick}
              filterType={this.state.filterType}
              filterOn={this.state.filterOn}
              sortType={this.state.sortType}

            />

          </div>
          <div className="col-4">

            <PortfolioContainer
              portfolioStocks={this.state.portfolioStocks}
              handleClick={this.handleClick}
            />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
