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
            cy.get('#nb-option-26')
            .should('have.attr','ng-reflect-value');
            cy.get('#nb-option-26').click()
  
            cy.get('input[ng-reflect-name="title"]').clear().type(`${testData}`)
            .should('have.attr', 'ng-reflect-model');
            cy.get('input[ng-reflect-name="content"]').clear().type(`${testData1}`)
            .should('have.attr','ng-reflect-model');
  
  
            cy.get('input[ng-reflect-name="timeout"]').clear().type(`${time}`)
            .should('have.attr','ng-reflect-model')
  
            cy.get('.content .row .col-md-6:last-of-type  .select-button').click();
            cy.get('#nb-option-34').click();
  
            cy.get('nb-card-footer button:first-of-type').click();
  
            cy.get('nb-toastr-container.ng-tns-c209-54 > .ng-tns-c209-54')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(4, 149, 238)')

            cy.get('.cdk-overlay-container .toastr-overlay-container')
            .should('have.css', 'justify-content', 'flex-start')
            .should('have.css', 'align-items', 'flex-end')
  
            cy.get('nb-toastr-container.ng-tns-c209-54 > .ng-tns-c209-54 span')
            .should('contain', 'Hello world')
  
            cy.get('nb-toastr-container.ng-tns-c209-54 > .ng-tns-c209-54 div')
            .should('contain', 'I am the best Qa')
            
          }
    
    it('input title and content', paramTest({testData: 'Hello world',testData1: 'I am the best Qa', time: '10000'}));
        
    });