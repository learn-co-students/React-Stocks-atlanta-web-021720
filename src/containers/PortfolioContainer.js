import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          
            <Stock /> 
          
      </div>
    );
  }

}

export default PortfolioContainer;
