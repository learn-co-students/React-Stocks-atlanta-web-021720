import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    profileStocks: [],
    sortAlphabetical: false,
    sortPrice: false,
    filter: ""
  }

  componentDidMount() {
    fetch(`http://localhost:3000/stocks`)
    .then(r => r.json())
    .then(stocks => this.setState({ stocks: stocks }))
  }

  addStock = e => {
    let stockID = e.target.closest('.card').id
    let added = this.state.stocks.find(stock => stock.id.toString() === stockID)
    this.setState({profileStocks: [...this.state.profileStocks, added]})
  }

  removeStock = e => {
    let stockID = e.target.closest('.card').id
    let toRemove = this.state.stocks.find(stock => stock.id.toString() === stockID)
    let newProf = this.state.profileStocks.filter(stock => stock !== toRemove)
    this.setState({profileStocks: newProf})
    e.target.closest('.card').remove()
  }

  handleSortA = () => {
      this.setState({ 
        sortPrice: false, 
        sortAlphabetical: !this.state.sortAlphabetical 
      })
  }

  handleSortP = () => {
    this.setState({ 
      sortAlphabetical: false, 
      sortPrice: !this.state.sortPrice 
    })
  }

  handleFilter = e => {
    this.setState({filter: e.target.value})
  }

  getStocks = () => {
    let stocks = this.filterStocks();
    return this.sortStocks(stocks);
  }

  filterStocks = () => {
    const stocks = [...this.state.stocks]
    if (this.state.filter) {
      return stocks.filter( stock => stock.type === this.state.filter)
    }
    return stocks
  }

  sortStocks = stocks => {
    let returnVal;
    if (this.state.sortAlphabetical) {
      returnVal = stocks.sort((a, b) => a.name.localeCompare(b.name))
    } else if (this.state.sortPrice) {
      returnVal = stocks.sort((a, b) => a.price - b.price )
    } else {
      returnVal = stocks
    }
    return returnVal
  }


  render() {
    return (
      <div>
        <SearchBar
          sortAlphabetical={this.state.sortAlphabetical}
          sortPrice={this.state.sortPrice}
          handleSortA={this.handleSortA}
          handleSortP={this.handleSortP}
          handleFilter={this.handleFilter}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.getStocks()} handleClick={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer profileStocks={this.state.profileStocks} handleClick={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
