import React from 'react';
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, TextField } from '@material-ui/core';
import './form.css';

export function Form(props) {

    const handleChange = (e) => {
        switch (e.target.id){
            case 'income':
                props.setFigures((prev) =>{ return {...prev, ...{ income: e.target.value } }});
                break;
            case 'downPayment':
                props.setFigures((prev) =>{ return {...prev, ...{ downPayment: e.target.value } }});
                break;
            case 'propertyTax':
                props.setFigures((prev) =>{ return {...prev, ...{ propertyTax: e.target.value } }});
                break;
            case 'homeownersInsurance':
                props.setFigures((prev) =>{ return {...prev, ...{ homeownersInsurance: e.target.value } }});
                break;
            case 'monthlyHOA':
                props.setFigures((prev) =>{ return {...prev, ...{ monthlyHOA: e.target.value } }});
                break;
            case 'otherMonthlyDebt':
                props.setFigures((prev) =>{ return {...prev, ...{ otherMonthlyDebt: e.target.value } }});
                break;
            case 'interestRate':
                props.setFigures((prev) =>{ return {...prev, ...{ interestRate: e.target.value } }});
                break;
            case 'debtToIncomeRatio':
                props.setFigures((prev) =>{ return {...prev, ...{ debtToIncomeRatio: e.target.value } }});
                break;
            default:
                if (e.target.name === "term"){
                    props.setFigures((prev) =>{ return {...prev, ...{ term: e.target.value } }});
                };
        }
    }

    let textFieldProps = [
        {
            id: 'income',
            label: 'Annual Income',
            type: 'number',
            step: 1000,
            value: props.figures.income,
            formHelperText: 'Combined gross annual income of all borrowers'
        },{
            id: 'downPayment',
            label: 'Down Payment Amount',
            type: 'number',
            step: 1000,
            value: props.figures.downPayment,
            formHelperText: 'Down Payment on the purchase of the home, typically at least 20% of purchase price'
        },{
            id: 'propertyTax',
            label: 'Annual Property Taxes',
            type: 'number',
            step: 100,
            value: props.figures.propertyTax,
            formHelperText: 'Annual property taxes levied by the local government'
        },{
            id: 'homeownersInsurance',
            label: 'Annual Homeowner\'s Insurance',
            type: 'number',
            step: 100,
            value: props.figures.homeownersInsurance,
            formHelperText: 'Annual premium for homeowners insurance'
        },{
            id: 'monthlyHOA',
            label: 'Monthly HOA Fee',
            type: 'number',
            step: 10,
            value: props.figures.monthlyHOA,
            formHelperText: 'Monthly homeowners association fees, if any'
        },{
            id: 'otherMonthlyDebt',
            label: 'Other Monthly Debt Payments',
            type: 'number',
            step: 100,
            value: props.figures.otherMonthlyDebt,
            formHelperText: 'Combined monthly payments of other debts (eg. car loan, credit card, student loan, etc)'
        },{
            id: 'interestRate',
            label: 'Interest Rate',
            type: 'number',
            step: .05,
            value: props.figures.interestRate,
            formHelperText: 'Annual percentage rate (APR)'
        },{
            id: 'debtToIncomeRatio',
            label: 'Debt To Income Ratio',
            type: 'number',
            step: 1,
            value: props.figures.debtToIncomeRatio,
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
                            onChange={handleChange}
                        />
                    </div>
                )})
            }
            
            <div id='loanTermInput'>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Loan Term</FormLabel>
                    <RadioGroup id='term' aria-label="term" name="term" value={props.figures.term} onChange={handleChange}>
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