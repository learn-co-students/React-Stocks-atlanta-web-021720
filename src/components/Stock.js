import React from 'react'

const Stock = (props) => {
console.log(props.stock)

return(
  <div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
            {props.stock? props.stock.name : "loading"}
          </h5>
        <p className="card-text">{
            //ticker: stock price
          }</p>
      </div>
    </div>


  </div>
)
};
        

export default Stock
