
/** 
* Calculates the maximum monthly p&i payment for a loan based on
* a given debt-to-income ratio limiter
*
* @param{number}income - Annual income of the borrower
* @param{number}otherDebt - Existing credit accounts combined monthly payments
* @param{number}propertyTax - Annual property taxes
* @param{number}homeOwnersIns - Annual insurance premiums 
* @param{number}homeOwnersAssoc - Monthly HOA fees
* @param{number}debtToIncomeRatio - Based on lenders guidlines. (Typically, 36 - 42 )
* @return{number}The calculated maximum payment
*/

export function maxPayment (income, otherDebt, propertyTax, homeownersIns, homeOwnersAssoc, debtToIncomeRatio ) {
    const debtPaymentMax = (income/12) * (debtToIncomeRatio/100);
    return debtPaymentMax - otherDebt - (propertyTax/12) - homeOwnersAssoc - (homeownersIns/12);
}

/** 
* Calculates the Net Present Value of a given initial investment 
* cost and an array of cash flow values with the specified discount rate 
* 
* @param{number}rate - The discount rate percentage 
* @param{number}initialCost - The initial investment 
* @param{array}cashFlows - An array of future payment amounts 
* @return{number}The calculated Net Present Value 
*/
function getNPV(rate, initialCost, cashFlows){
    return cashFlows.reduce((accumulator, currentValue, index) =>accumulator + currentValue / Math.pow(rate / 100 + 1, index + 1),initialCost )}

/** 
* Calculates the maximum loan amount based on the payment 
* 
* @param{number}rate - The discount rate percentage 
* @param{number}term - The term of the loan in years
* @param{number}payment - The monthly payment 
* @return{number}Maximum loan amount
*/

export function maxLoanAmount (rate, term, payment) {
    rate /= 12;
    const initialCost = 0;
    const cashFlows = [];
    for (let i=0; i < term * 12; i++) {
        cashFlows.push(payment);
    }
    return getNPV(rate, initialCost, cashFlows)
}