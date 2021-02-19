import React from 'react';
import './result.css';

class Result extends React.Component {
    render() {
        return (
            <div id='results'>
                <div class='resultsRow'> 
                    <h4>Max Purchase Price:</h4>
                    <h4 id='maxPurchasePrice'>${this.props.maxPurchasePrice}</h4>
                </div>
                <div class='resultsRow'>
                    <h4>Monthly Payment:</h4>
                    <h4 id='monthlyPayment'>${this.props.maxPayment}</h4>
                </div>               
            </div>
        )
    }
}

export default Result;