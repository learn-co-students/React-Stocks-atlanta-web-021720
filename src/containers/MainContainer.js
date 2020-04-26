import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolios: [],
    filter: 'All',
    sorts: []
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
    // console.log('sellStock stock', stock)
    let index = this.state.portfolios.indexOf(stock)
    // console.log('sellStock index', index)
    this.setState({portfolios: this.state.portfolios.filter((item, idx) => idx !== index)})    
  }
  
  cbSortHandler = (event) =>
  {
    //debugger
    console.log('sh',event.target.checked)
    console.log('sh',event.target.value)
    // if(!this.state.sorts.find((sort)=>{sort===event.target.value}))
    //   this.setState({sorts : [...this.state.sorts, event.target.value]})
    if(this.state.sorts.indexOf(event.target.value)===-1)
      this.setState({sorts : [...this.state.sorts, event.target.value]})
  }

  cbFilterHandler = (event) =>
  {
    console.log('fh',event.target)
    this.setState({filter: event.target.value})
  }

  getStocks()
  {
    let retVal = [...this.state.stocks];
    
    if(this.state.filter !== 'All')
    {
      retVal = retVal.filter(
        (stock)=>{return stock.type === this.state.filter}
      )
    }

    
    if(this.state.sorts.indexOf('Alphabetically')!==-1)
    {
      // debugger
      retVal.sort((a,b)=>{return (a.name<b.name? -1:1)})
    }

    if(this.state.sorts.indexOf('Price')!==-1)
    {
      // debugger
      retVal.sort((a,b)=>{return (a.price>b.price? -1:1)}) 
    }

    return retVal;
  }

  render() {
    return (
      <div>
        <SearchBar cbSortHandler={this.cbSortHandler} cbFilterHandler={this.cbFilterHandler}/>

          <div className="row">
            <div className="col-8">

              {/* <StockContainer {...this.state} buyStock={this.buyStock}/> */}
              <StockContainer stocks={this.getStocks()} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer {...this.state} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
