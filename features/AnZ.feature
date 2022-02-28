
Feature: ANZ Automation

    As a user
    I Will create a customer
    and book the ticket using oxy application

  Scenario: ANZ Validate All The fields
         Given I navigate to Oxy admin test page
         When Enter Total Income before tax
         When Enter Total other Income
         When Enter Living expenses
         When Enter Homeloan Repayment
         When Enter Other loan Repayment
         When Enter CreditCard Limit
         Then Click Start Over
 
  
       












        
