import React from 'react'

const Stock = (props) => {
  
  let {stock, buyStock} = props;
  
 const handlerClick = (stock) =>
  {
    buyStock(stock);
  }

  return(
  <div onClick = {()=>{handlerClick(stock)}}>

    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            `${stock.ticker} : ${stock.price}`
            // props.ticker + ' : ' + props.price
          }</p>
      </div>
    </div>


  </div>
)}

export default Stock
