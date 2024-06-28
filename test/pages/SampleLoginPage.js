class SampleLoginPage{

get textboxUsername()
{
    return $('#username')
}

get textboxPassword()
{
    return $('#password')
}

get SubmitClick()
{
    return $('#submit')
}

get welcomeText()
{

    return $('h1[class="post-title"]')
}

async login(user,pass)
{
   await (this.textboxUsername).setValue(user)
   await (this.textboxPassword).setValue(pass)
   await (this.SubmitClick).click()
  

}
async welcomeTextmsg(msg)
{
    await expect(this.welcomeText).toHaveText(
        expect.stringContaining(msg))
}


}
module.exports = new SampleLoginPage()