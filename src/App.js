import React from 'react';
import Header from './components/Header/header';
import Form from './components/Form/form';
import Result from './components/Result/result';
import { Container } from '@material-ui/core';
import { maxLoanAmount, maxPayment } from './util/mortgageCalculator';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      income: 50000,
      downPayment: 40000,
      propertyTax: 2000,
      homeownersInsurance: 1500,
      monthlyHOA: 50,
      otherMonthlyDebt: 500,
      interestRate: 2.95,
      debtToIncomeRatio: 36,
      term: '30'
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (e) => {
    switch (e.target.id){
      case 'income':
        console.log(e.target.value);
        this.setState({ income: e.target.value });
        break;
      case 'downPayment':
        this.setState({ downPayment: e.target.value });
        break;
      case 'propertyTax':
        this.setState({ propertyTax: e.target.value });
        break;
      case 'homeownersInsurance':
        this.setState({ homeownersInsurance: e.target.value });
        break;
      case 'monthlyHOA':
        this.setState({ monthlyHOA: e.target.value });
        break;
      case 'otherMonthlyDebt':
        this.setState({ otherMonthlyDebt: e.target.value });
        break;
      case 'interestRate':
        this.setState({ interestRate: e.target.value });
        break;
      case 'debtToIncomeRatio':
        this.setState({ debtToIncomeRatio: e.target.value });
        break;
      default:
        if (e.target.name === "term"){
          this.setState({ term: e.target.value });
        };
    }
  }


  render() {
    let payment = Math.round(maxPayment(this.state.income, this.state.otherMonthlyDebt, this.state.propertyTax, this.state.homeownersInsurance, this.state.monthlyHOA, this.state.debtToIncomeRatio));
    let loanAmount = Math.round(maxLoanAmount(this.state.interestRate, parseInt(this.state.term), payment));

    return (
      <div>
        <Container maxWidth='xs'>
          <Header />
          <Form 
            handleChange={this.handleChange} 
            income={this.state.income} 
            downPayment={this.state.downPayment}
            propertyTax={this.state.propertyTax}
            homeownersInsurance={this.state.homeownersInsurance}
            monthlyHOA={this.state.monthlyHOA}
            otherMonthlyDebt={this.state.otherMonthlyDebt}
            interestRate={this.state.interestRate}
            debtToIncomeRatio={this.state.debtToIncomeRatio}
            term={this.state.term}
          />
      </Container>
      <Result 
          maxPayment={Math.round(payment + parseFloat(this.state.propertyTax / 12) + parseFloat(this.state.homeownersInsurance / 12) + parseInt(this.state.monthlyHOA))} 
          maxPurchasePrice={loanAmount + parseInt(this.state.downPayment)}

        />
      </div>
      
    );
  }
  
}

export default App;
