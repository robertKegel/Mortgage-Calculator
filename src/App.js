import React, { useState } from 'react';
import Header from './components/Header/header';
import { Form } from './components/Form/form';
import { Result } from './components/Result/result';
import { Container } from '@material-ui/core';
import { maxLoanAmount, maxPayment } from './util/mortgageCalculator';

export function App () {

  const [figures, setFigures] = useState({
    income: 50000,
    downPayment: 40000,
    propertyTax: 2000,
    homeownersInsurance: 1500,
    monthlyHOA: 50,
    otherMonthlyDebt: 500,
    interestRate: 2.95,
    debtToIncomeRatio: 36,
    term: '30'
  })

  let payment = Math.round(maxPayment(figures.income, figures.otherMonthlyDebt, figures.propertyTax, figures.homeownersInsurance, figures.monthlyHOA, figures.debtToIncomeRatio));
  let loanAmount = Math.round(maxLoanAmount(figures.interestRate, parseInt(figures.term), payment));


  return (
    <div>
      <Container maxWidth='xs'>
        <Header />
        <Form 
          figures={figures}
          setFigures={setFigures}
        />
      </Container>
      <Result 
          maxPayment={Math.round(payment + parseFloat(figures.propertyTax / 12) + parseFloat(figures.homeownersInsurance / 12) + parseInt(figures.monthlyHOA))} 
          maxPurchasePrice={loanAmount + parseInt(figures.downPayment)}
      />
    </div>
  )
}