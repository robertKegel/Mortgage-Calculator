import React from 'react';
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, TextField } from '@material-ui/core';
import './form.css';

class Form extends React.Component {
    render() {

        let textFieldProps = [
            {
                id: 'income',
                label: 'Annual Income',
                type: 'number',
                step: 1000,
                value: this.props.income,
                formHelperText: 'Combined gross annual income of all borrowers'
            },{
                id: 'downPayment',
                label: 'Down Payment Amount',
                type: 'number',
                step: 1000,
                value: this.props.downPayment,
                formHelperText: 'Down Payment on the purchase of the home, typically at least 20% of purchase price'
            },{
                id: 'propertyTax',
                label: 'Annual Property Taxes',
                type: 'number',
                step: 100,
                value: this.props.propertyTax,
                formHelperText: 'Annual property taxes levied by the local government'
            },{
                id: 'homeownersInsurance',
                label: 'Annual Homeowner\'s Insurance',
                type: 'number',
                step: 100,
                value: this.props.homeownersInsurance,
                formHelperText: 'Annual premium for homeowners insurance'
            },{
                id: 'monthlyHOA',
                label: 'Monthly HOA Fee',
                type: 'number',
                step: 10,
                value: this.props.monthlyHOA,
                formHelperText: 'Monthly homeowners association fees, if any'
            },{
                id: 'otherMonthlyDebt',
                label: 'Other Monthly Debt Payments',
                type: 'number',
                step: 100,
                value: this.props.otherMonthlyDebt,
                formHelperText: 'Combined monthly payments of other debts (eg. car loan, credit card, student loan, etc)'
            },{
                id: 'interestRate',
                label: 'Interest Rate',
                type: 'number',
                step: .05,
                value: this.props.interestRate,
                formHelperText: 'Annual percentage rate (APR)'
            },{
                id: 'debtToIncomeRatio',
                label: 'Debt To Income Ratio',
                type: 'number',
                step: 1,
                value: this.props.debtToIncomeRatio,
                formHelperText: 'Ratio of total debt payments to income, lower=better chance of approval'
            }
        ]
        
        return(
            <form>
                {textFieldProps.map((textField) => {
                    return (
                        <div>
                            <TextField 
                                id={textField.id}
                                label={textField.label}
                                type={textField.type}
                                margin='normal'
                                size='medium'
                                fullWidth='true'
                                inputProps={{step: textField.step}}
                                value={textField.value}
                                helperText={textField.formHelperText}
                                onChange={this.props.handleChange}
                            />
                        </div>
                    )})
                }
                
                <div id='loanTermInput'>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Loan Term</FormLabel>
                        <RadioGroup id='term' aria-label="term" name="term" value={this.props.term} onChange={this.props.handleChange}>
                            <FormControlLabel value="10" control={<Radio />} label="10 Years" />
                            <FormControlLabel value="15" control={<Radio />} label="15 Years" />
                            <FormControlLabel value="20" control={<Radio />} label="20 Years" />
                            <FormControlLabel value="30" control={<Radio />} label="30 Years" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </form>
        )
    }
}

export default Form;