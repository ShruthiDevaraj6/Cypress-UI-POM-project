import Login from "../PageObjects/LoginPage.js"
describe('POM', () =>   
{
    it('Login Test without POM', () => {
      
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get("input[placeholder='Username']").type("Admin")
      cy.get("input[placeholder='Password']").type("admin123")
      cy.get("button[type='submit']").click()
      cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', 'Dashboard')

    })

    it.only('Login Test using POM', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln = new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin()
  
      })

      it.only('Login Test using POM and Fixtures', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln = new Login();
        cy.fixture('orangehrm.json').then((data)=>{
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickSubmit()
        ln.verifyLogin()
        })
      })
})