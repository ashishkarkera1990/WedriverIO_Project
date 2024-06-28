class loginPage {

    get usernameTextBox() {

        return $('#username')
    }

    get passwordTextBox() {

        return $('#password')
    }

    get loginButton() {

        return $('button[type="submit"]')
    }

    get loginMessage() {
        return $('#flash')
    }


    async login(username,password) {

        await this.usernameTextBox.setValue(username)
        await this.passwordTextBox.setValue(password)
        await this.loginButton.click()

    }

    async loginMessageTitle(msg) {
        await expect(this.loginMessage).toHaveText(
            expect.stringContaining(msg))
    }

}
module.exports = new loginPage()
