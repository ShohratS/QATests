describe('Amazon Sign Up page', () => {
   beforeEach(() => {
    //Amazon Sign Up page url
      //cy.visit('https://www.amazon.com/ap/register?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.mode=checkid_setup&openid.ns=http://specs.openid.net/auth/2.0&openid.ns.pape=http://specs.openid.net/extensions/pape/1.0&openid.pape.max_auth_age=0&openid.return_to=https://www.amazon.com/gp/yourstore/home?ie%3DUTF8%26ref_%3Dnav_newcust/')
    })
  
    /*it('Should display the sign up form', () => {
      cy.get('#ap_customer_name').should('be.visible')
      cy.get('#ap_customer_name').click()
      cy.get('#ap_customer_name').type('Admin');//.type('{enter}');

      cy.get('#ap_email').should('be.visible')
      cy.get('#ap_email').click()
      cy.get('#ap_email').type('testtestyes01@gmail.com');//.type('{enter}');

      
      cy.get('#ap_password').should('be.visible')
      cy.get('#ap_password').click()
      cy.get('#ap_password').type('Admin1234');//.type('{enter}');

      cy.get('#ap_password_check').should('be.visible')
      cy.get('#ap_password_check').click()
      cy.get('#ap_password_check').type('Admin1234').type('{enter}')
    })
      */



      //Invalid mail and less password

      it('Should display the sign up form', () => {
        cy.get('#ap_customer_name').should('be.visible')
        cy.get('#ap_customer_name').click()
        cy.get('#ap_customer_name').type('Admin');//.type('{enter}');
  
        cy.get('#ap_email').should('be.visible')
        cy.get('#ap_email').click()
        cy.get('#ap_email').type('testtestyes');//.type('{enter}');
  
        
        cy.get('#ap_password').should('be.visible')
        cy.get('#ap_password').click()
        cy.get('#ap_password').type('Admin');//.type('{enter}');
  
        cy.get('#ap_password_check').should('be.visible')
        cy.get('#ap_password_check').click()
        cy.get('#ap_password_check').type('Admin').type('{enter}');
      

    })
    

  })