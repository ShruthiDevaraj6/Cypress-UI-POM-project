const data = require ('C:/Users/dshru/Cypress Automation/cypress/fixtures/cura.json')
let userdata=data;
class LoginAppointment
{
    loginDropdown=".fa.fa-bars"
    loginbtn="a[href='profile.php#login']"
    loginLabel="div[class='col-sm-12 text-center'] h2"
    txtusername="#txt-username"
    txtpassword="#txt-password"
    btnSubmit="#btn-login"
    labelMsg="div[class='text-vertical-center'] h1"
    makeAppointmentbtn = "#btn-make-appointment"
    facilityDropdown="#combo_facility"
    checkbox="#chk_hospotal_readmission"
    radioBtn="#radio_program_medicare"
    dateInput="#txt_visit_date"
    comment="#txt_comment"
    bookAppointment ="#btn-book-appointment"
    appointmentconf ="h2"
    logoutDropdown ="#menu-toggle > .fa"
    logoutBtn = "a[href='authenticate.php?logout']"



    clickLoginDropdown()
    {
        cy.get(this.loginDropdown).click()
        cy.get(this.loginbtn).click()

    }
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
    verifyLoginLabel()
    {
        cy.get(this.loginLabel).should('have.text', 'Login')

    }

    verifyLogin()
    {
        cy.get(this.labelMsg).should('have.text', userdata.expected)

    }
    makeAppointment()
    {
        cy.get(this.makeAppointmentbtn).click()
        cy.get(this.facilityDropdown).select("Seoul CURA Healthcare Center").should('have.value',userdata.expectedDropdown)
        cy.get(this.checkbox).check().should('be.checked')
        cy.get(this.radioBtn).check().should('be.checked')
        cy.get(this.dateInput).type(userdata.date)
        cy.get(this.comment).click({force:true})
        cy.get(this.comment).type("Testing123")
        cy.get(this.bookAppointment).click()
        cy.get(this.appointmentconf).contains(userdata.appointmentsuccess)
    }

    verifyLogout(){
        cy.get(this.logoutDropdown).click()
        cy.get(this.logoutBtn).click()
        cy.get(this.labelMsg).should('have.text', userdata.expected)

    }

}

export default LoginAppointment;