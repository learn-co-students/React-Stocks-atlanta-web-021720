import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  //Sort function to compare Names 
  compareName = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  //Sort function to compare Prices
  comparePrice = (a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }



  render() {
    console.log("Stock Container: ", this.props.sortType)
    let stocks = this.props.allStocks
    let filterType = this.props.filterType
    this.props.filterOn ? stocks = stocks.filter(stock => stock.type === filterType) : stocks
    let finalStocks = [...stocks]
    let sortType = this.props.sortType
    sortType === "Price" && finalStocks.sort(this.comparePrice)
    sortType === "Alphabetically" && finalStocks.sort(this.compareName)


    console.log("final stocks:", finalStocks)
    return (
      <div>
        <h2>Stocks</h2>
        {
          finalStocks.map(stock => {
            return <Stock stock={stock} key={`stock${stock.id}`} handleClick={() => this.props.handleClick("stocks", stock)} />
          })
        }
      </div>
    );
  }

}

export default StockContainer;
