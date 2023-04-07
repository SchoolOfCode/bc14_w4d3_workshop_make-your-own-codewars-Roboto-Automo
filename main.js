/* 
April has sprung and it's time to do your taxes UK dwellers!  We can't be bothered to do all the calculations each year so it's time to write a function that does it all for us.

Using the tax bandings below, write a function that takes in a gross total taxable income as an argument and returns the net income after deducting tax owed as a whole number in a string with the £ symbol.

Personal Allowance	Up to £12,570	you pay 0% tax 
Basic rate	£12,571 to £50,270	    you pay 20% tax
Higher rate	£50,271 to £125,140	    you pay 40% tax
Additional rate	over £125,140	    you pay 45% tax

As an example, if the gross total of 11000 is passed in as an argument, the function should return "£11000" since there is no tax to be paid on this amount.

If the gross total was 60000, the function should return "£48568", because the tax to pay between £0 and £12570 is £0, the tax to pay between £12571 and £50,270 is £7540 and the tax to pay between £50,271 and £60000 is £3892.

Also, if the gross income includes decimal numbers to represent pence, then the net income should be rounded UP to the nearest pound. For example, a net income of "£30646.23" should be returned as "£30647".

*/

//👉 Write the function your CodeWarriors will start with below here:

export function calculateUKIncomeAfterTax(taxableIncome) {
  let tax = 0;

  if (taxableIncome <= 12570) {
  
    tax = 0;
  } else if (taxableIncome <= 50270) {
  
    tax = (taxableIncome - 12570) * 0.20;
  } else if (taxableIncome <= 125140) {
   
    tax = (50270 - 12570) * 0.20 + (taxableIncome - 50270) * 0.40;
  } else {
   
    tax = (50270 - 12570) * 0.20 + (125140 - 50270) * 0.40 + (taxableIncome - 125140) * 0.45;
  }

  const incomeAfterTax = `£${Math.ceil(taxableIncome - tax)}`;
  return incomeAfterTax;
}