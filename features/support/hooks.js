const fs = require('fs');
const createTestCafe = require('testcafe');
const testControllerHolder = require('../support/testControllerHolder');
const {AfterAll, setDefaultTimeout, Before, After, Status} = require('cucumber');
const errorHandling = require('../support/errorHandling');
const TIMEOUT = 200000;
const report = require('./report-generator.js')


let isTestCafeError = false;
let attachScreenshotToReport = false;
let cafeRunner = null;
let n = 0;


function createTestFile() {
    fs.writeFileSync('test.js',
        'import errorHandling from "./features/support/errorHandling.js";\n' +
        'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

        'fixture("fixture")\n' +

        'test\n' +
        '("test", testControllerHolder.capture)')
}
function runTest(iteration, browser) {
    createTestCafe('localhost', 1338 + iteration, 1339 + iteration)
        .then(function(tc) {
            cafeRunner = tc;
            //******to run test in live mode  */
            //const runner = tc.createLiveModeRunner();
            //*** to run test in normal mode  */
            const runner = tc.createRunner();
                    //enable for video recording 
            return runner///.video('artifacts/videos')
                .src('./test.js')
                .screenshots('reports/screenshots/', true)
                .browsers(browser)
                .run({
                    skipJsErrors: true,
                    quarantineMode: false,
                    selectorTimeout: 80000,
                    //assertionTimeout: 70000,
                    pageLoadTimeout: 90000,
                    //stopOnFirstFail: true
                    speed:0.9
                })
                 .catch(function(error) {
                    console.error(error);
                    tc.close();
                });
        })
        .then(function(report) {
        });
}


setDefaultTimeout(TIMEOUT);

Before(function() {
    runTest(n, this.setBrowser());
    createTestFile();
    n += 2;
    return this.waitForTestController.then(function(testController) {
        return testController.maximizeWindow();
    });
});

After(function() {
    fs.unlinkSync('test.js');
    testControllerHolder.free();
});

After(async function(testCase) {
    const world = this;
    if (testCase.result.status === Status.FAILED) {
        isTestCafeError = true;
        attachScreenshotToReport = world.attachScreenshotToReport;
        errorHandling.addErrorToController();
        await errorHandling.ifErrorTakeScreenshot(testController)
    }
});

AfterAll(function() {
    let intervalId = null;

    function waitForTestCafe() {
        intervalId = setInterval(checkLastResponse, 500);
    }

    function checkLastResponse() {
   if (testController.testRun.lastDriverStatusResponse === 'test-done-confirmation') {
            cafeRunner.close();
            process.exit();
            clearInterval(intervalId);
        }
    }

    waitForTestCafe();
});

const getIsTestCafeError = function() {
    return isTestCafeError;
};

const getAttachScreenshotToReport = function(path) {
    return attachScreenshotToReport(path);
};

exports.getIsTestCafeError = getIsTestCafeError;
exports.getAttachScreenshotToReport = getAttachScreenshotToReport;
