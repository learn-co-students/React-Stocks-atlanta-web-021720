import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" onClick={props.userStock ? props.handleUserClick : props.handleStockClick}>
      <div className="card-body">
        <h5 className="card-title">{
            props.stocks.name
          }</h5>
        <p className="card-text">{
            props.stocks.ticker
          }</p>
      </div>
    </div>


  </div>
  
);

export default Stock
