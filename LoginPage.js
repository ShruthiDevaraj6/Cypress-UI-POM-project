class Login
{
    txtusername="input[placeholder='Username']"
    txtpassword="input[placeholder='Password']"
    btnSubmit="button[type='submit']"
    labelMsg=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"

    setUserName(username)
    {
        cy.get(this.txtusername).type(username)
    }
    setPassword(password)
    {
        cy.get(this.txtpassword).type(password)
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click()
    }

    verifyLogin()
    {
        cy.get(this.labelMsg).should('have.text', 'Dashboard')

    }

}

export default Login;