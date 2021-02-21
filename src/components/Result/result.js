import React from 'react';
import './result.css';

export function Result(props) {
    return (
        <div id='results'>
            <div class='resultsRow'> 
                <h4>Max Purchase Price:</h4>
                <h4 id='maxPurchasePrice'>${props.maxPurchasePrice}</h4>
            </div>
            <div class='resultsRow'>
                <h4>Monthly Payment:</h4>
                <h4 id='monthlyPayment'>${props.maxPayment}</h4>
            </div>               
        </div>
    )
}