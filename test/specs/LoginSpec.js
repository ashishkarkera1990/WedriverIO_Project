const LoginPage = require('../pages/LoginPage')

describe('Login Tests', () => {

    it('Login Page', async () => {

        browser.url('https://the-internet.herokuapp.com/login')
        browser.maximizeWindow()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await LoginPage.loginMessageTitle('You logged into a secure area!')

    })

})