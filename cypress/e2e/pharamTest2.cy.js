describe('Test1', () => {
    
    const paramTest = ({testData, testData1, time}) =>
    
          function () {
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
            cy.get(':nth-child(3) > nb-card-body > .theme-preview').click();
            cy.get('a.ng-tns-c141-19').click();
            cy.get('.menu-item.ng-tns-c141-23').click();
            cy.get('.theme-select > .select-button').click();
            cy.get('#nb-option-23')
            cy.get('.eva-menu-outline').click()
            
  
            cy.get('.content .row .col-md-6:first-of-type  .select-button').click();
            cy.get('#nb-option-25')
            .should('have.attr','ng-reflect-value');
            cy.get('#nb-option-25').click()
  
            cy.get('input[ng-reflect-name="title"]').clear().type(`${testData}`)
            .should('have.attr', 'ng-reflect-model');
            cy.get('input[ng-reflect-name="content"]').clear().type(`${testData1}`)
            .should('have.attr','ng-reflect-model');
  
  
            cy.get('input[ng-reflect-name="timeout"]').clear().type(`${time}`)
            .should('have.attr','ng-reflect-model')
  
            cy.get('.content .row .col-md-6:last-of-type  .select-button').click();
            cy.get('#nb-option-33').click();
  
            cy.get('nb-card-footer button:first-of-type').click();
  
            cy.get('nb-toastr-container.ng-tns-c209-54 > .ng-tns-c209-54')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(96, 175, 32)')
  
            cy.get('nb-toastr-container.ng-tns-c209-54 > .ng-tns-c209-54 span')
            .should('have.class', 'title')
  
            cy.get('nb-toastr-container.ng-tns-c209-54 > .ng-tns-c209-54 div')
            .should('have.class', 'message')
            
          }
    
    it('input title and content', paramTest({testData: 'Hello world',testData1: 'I am the best Qa', time: '10000'}));
        
    });