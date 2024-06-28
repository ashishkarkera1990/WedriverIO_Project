
const SampleLoginPage = require('../pages/SampleLoginPage')

describe('Sample Application',() => {


    it('Login Test1', async () => {

        await browser.url('https://practicetestautomation.com/practice-test-login/')
        await browser.maximizeWindow()
        await SampleLoginPage.login('student','Password123') 
        await browser.pause(5000)
        await SampleLoginPage.welcomeTextmsg('Logged In Successfully')

    })

})