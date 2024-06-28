
describe('Demo tests', function () {

    it('First test', () => {

        browser.url('https://google.com')

        $('[id="input"]').setValue('WebDriverIO')
        browser.pause(5000)
        $('[name="btnK"]').click()

        //browser.keys('Enter')


        browser.pause(5000)


    })

})