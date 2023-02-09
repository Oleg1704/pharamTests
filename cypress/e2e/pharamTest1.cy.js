describe('Test1', () => {


  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get(':nth-child(3) > nb-card-body > .theme-preview').click();
            cy.get('a.ng-tns-c141-19').click();
            cy.get('.menu-item.ng-tns-c141-23').click();
            cy.get('.theme-select > .select-button').click();
            cy.get('#nb-option-23')
            cy.get('.eva-menu-outline').click()
  })

    
    const paramTest = ({title, content, time, position, color}) =>
  
          function () {

            const colors = {
              primary: 'rgb(233, 29, 99)',
              success: 'rgb(96, 175, 32)',
              info: 'rgb(4, 149, 238)',
              warning: 'rgb(255, 159, 5)'
            }

            cy.get('.content .row .col-md-6:first-of-type  .select-button').click();
            
            cy.get(`nb-option[ng-reflect-value="${position}"]`).click()

            cy.get('input[ng-reflect-name="title"]').clear().type(`${title}`)
            .should('have.attr', 'ng-reflect-model');
            cy.get('input[ng-reflect-name="content"]').clear().type(`${content}`)
            .should('have.attr','ng-reflect-model');
  
  
            cy.get('input[ng-reflect-name="timeout"]').clear().type(`${time}`)
            .should('have.attr','ng-reflect-model')
  
            cy.get('.content .row .col-md-6:last-of-type  .select-button').click();
            cy.get(`nb-option[ng-reflect-value="${color}"]`).click();
  
            cy.get('nb-card-footer button:first-of-type').click();
  
            cy.get('nb-toastr-container.ng-tns-c209-54 > .ng-tns-c209-54')
            .should('have.class', `status-${color}`)

            switch (position) {
              case 'top-right':
                cy.get('.cdk-overlay-container .toastr-overlay-container')
                .should('have.css', 'justify-content', 'flex-end')
                .should('have.css', 'align-items', 'flex-start');
                break;

              case 'top-left':
                  cy.get('.cdk-overlay-container .toastr-overlay-container')
                  .should('have.css', 'justify-content', 'flex-start')
                  .should('have.css', 'align-items', 'flex-start');
                  break;

              case 'top-left':
                cy.get('.cdk-overlay-container .toastr-overlay-container')
                 .should('have.css', 'justify-content', 'flex-start')
                 .should('have.css', 'align-items', 'flex-end');
                  break;

              case 'top-left':
                cy.get('.cdk-overlay-container .toastr-overlay-container')
                  .should('have.css', 'justify-content', 'flex-end')
                  .should('have.css', 'align-items', 'flex-end');
                   break;
            }

            cy.get('nb-toastr-container.ng-tns-c209-54 > nb-toast')
            .should('have.css', 'background-color', colors[color])
  
            cy.get('nb-toastr-container.ng-tns-c209-54 > .ng-tns-c209-54 span')
            .should('contain', title)
  
            cy.get('nb-toastr-container.ng-tns-c209-54 > .ng-tns-c209-54 div')
            .should('contain', content)

          }
    
    it('input title, content, time, check the color and toast postiton', paramTest({
    title: 'Hello world',
    content: 'I am the best Qa',
    time: '10000',
    position: 'top-right',
    color: 'primary'
  }));

  it('input title, content, time, check the color and toast postiton', paramTest({
    title: 'My name', 
    content: 'I am glad to see you',
    time: '5000',
    position: 'top-left',
    color: 'success'
  }));

  it('input title, content, time, check the color and toast postiton', paramTest({
    title: 'Some name', 
    content: 'I do not know',
    time: '9000',
    position: 'bottom-left',
    color: 'info'
  }));

  it('input title, content, time, check the color and toast postiton', paramTest({
    title: 'Winner', 
    content: 'Ukraine',
    time: '9000',
    position: 'bottom-right',
    color: 'warning'
  }));
        
});