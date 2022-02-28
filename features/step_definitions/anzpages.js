const {Selector} = require('testcafe');
//report = require('../report-generator')

//Changing dom  to X-path locator
const elementByXPath = Selector(xpath => {
    const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null )
    const items = [];

    let item = iterator.iterateNext();

    while (item) {
        items.push(item);
        item = iterator.iterateNext();
    }

    return items;
});  



//page object for Create New Customer

    const Annualslary = Selector(elementByXPath('//*[@id="main-container"]/div[1]/div/div/div[2]/div/div/div/div/div[1]/div[1]/div[2]/div/div[2]/div/div[1]/div/input'))
    const Annualotherincome = Selector(elementByXPath('//*[@id="main-container"]/div[1]/div/div/div[2]/div/div/div/div/div[1]/div[1]/div[2]/div/div[2]/div/div[2]/div/input'))
    const LivingExpenses = Selector(elementByXPath('//*[@id="expenses"]'))
    const HomeLoanRepayment = Selector(elementByXPath('//*[@id="homeloans"]'))
    const OtherLoanRepayment = Selector(elementByXPath('//*[@id="otherloans"]'))
    const CClimit = Selector(elementByXPath('//*[@id="credit"]'))
    const StartOver = Selector(elementByXPath('//*[@id="main-container"]/div[1]/div/div/div[2]/div/div/div/div/div[1]/div[2]/div[1]/div/div[1]/div/button'))
    const calculate = Selector(elementByXPath('//*[@id="btnBorrowCalculater"]'))
    

 exports.oxyadminpages = {
    
    Annualslary: function() {

        return Annualslary.with({ boundTestRun: testController });
    },
    Annualotherincome: function() {

        return Annualotherincome.with({ boundTestRun: testController });
    },
    LivingExpenses: function() {

        return LivingExpenses.with({ boundTestRun: testController });
    },
    HomeLoanRepayment: function() {

        return HomeLoanRepayment.with({ boundTestRun: testController });
    },
    OtherLoanRepayment: function() {

        return OtherLoanRepayment.with({ boundTestRun: testController });
    },
    CClimit: function() {

        return CClimit.with({ boundTestRun: testController });
    },
    StartOver: function() {

        return StartOver.with({ boundTestRun: testController });
    },
    calculate: function() {

        return calculate.with({ boundTestRun: testController });
    },


};
