const { Given, When, Then } = require('cucumber');

const oxyadminglobalpage = require('./anzpages');
//import { ClientFunction } from 'testcafe';
const dataSet =require('./data.json')





//**************************** */Home page validation */******************************//
dataSet.forEach(data=>{
 const{url,Annualsalary,Annualotherincome,LivingExpenses,HomeLoanRepayment,OtherLoanRepayment,CClimit}=data;

 Given('I navigate to Oxy admin test page', async function () {

    await testController.navigateTo(url)
    console.log('I navigate to Oxy admin test page')
 });

 When('Enter Total Income before tax' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Annualslary(),Annualsalary)
    console.log('Total Income before tax')
 });
 When('Enter Total other Income' , async function () {
 
    
    await testController.typeText(oxyadminglobalpage.oxyadminpages.Annualotherincome(),Annualotherincome)
    console.log('Total other Income')
 });


 When('Enter Living expenses' , async function () {
 
    
      await testController.typeText(oxyadminglobalpage.oxyadminpages.LivingExpenses(),LivingExpenses)
      console.log('I enter user name')
   });

 When('Enter Homeloan Repayment' , async function () {
   
      
      await testController.typeText(oxyadminglobalpage.oxyadminpages.HomeLoanRepayment(),HomeLoanRepayment)
      console.log('Homeloan Repayment')
   });
   
   When('Enter Other loan Repayment' , async function () {
   
      
      await testController.typeText(oxyadminglobalpage.oxyadminpages.OtherLoanRepayment(),OtherLoanRepayment)
      console.log('Other loan Repayment')
   });
   When('Enter Other Commitment' , async function () {
   
      
      await testController.typeText(oxyadminglobalpage.oxyadminpages.OtherLoanRepayment(),OtherLoanRepayment)
      console.log('Enter Other Commitment')
   });
   When('Enter CreditCard Limit' , async function () {
   
      
      await testController.typeText(oxyadminglobalpage.oxyadminpages.CClimit(),CClimit)
      console.log('Enter CreditCard Limit')
   });
   Then('Click Start Over' , async function () {
   
      
      await testController.click(oxyadminglobalpage.oxyadminpages.StartOver())
      console.log('Click Start Over')

   });
   Then('Work out how much I could borrow returns' , async function () {
   
      
      await testController.click(oxyadminglobalpage.oxyadminpages.calculate())
      console.log('Work out how much I could borrow returns')

   });
 
 
 

});
   
