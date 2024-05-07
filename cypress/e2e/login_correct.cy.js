describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://dev.profteam.su/login')
    })
    //Тест-кейс для корректных данных входа
    it('Existent login test', () => {
        cy.fixture('cypressTests').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод существующего логина')
            cy.get('.form-input--text')
                .type(data.login)

            cy.log('Ввод существующего пароля')
            cy.get('.form-input--password')
                .type(data.existent_passwd)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()
            cy.wait(5000)

            cy.log('Клик по кнопке "Выйти"')
            cy.get('[data-v-7ff322b7=""][data-v-f5840952=""] > .button')
                .click()
            
        })
    } )
  })