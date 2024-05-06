describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://dev.profteam.su/login')
    })
    it('None-existent password test', () => {
        //Тест-кейс для проверки некорректного пароля
        cy.fixture('cypressTests').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод существующего логина')
            cy.get('.form-input--text')
                .type(data.login)

            cy.log('Ввод несуществующего пароля')
            cy.get('.form-input--password')
                .type(data.none_existent_passwd)
    

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()
            
            
            cy.get('.form-error')
                .should('exist')

            cy.wait(5000)

            //Тест-кейс для проверки заполнения полей
            cy.log('Очистка поля "Логин"')
            cy.get('.form-input--text')
                .clear()

            cy.log('Очистка поля "Пароль"')
            cy.get('.form-input--password')
                .clear()
            cy.get(':nth-child(1) > .form-error > span')
                .should('exist')

            cy.wait(5000)

        //Тест-кейс для проверки некорректного логина
            cy.log('Ввод несуществующего логина')
            cy.get('.form-input--text')
                .type(data.none_existent_login)

            cy.log('Ввод существующего пароля')
            cy.get('.form-input--password')
                .type(data.existent_passwd)
    

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()
            
            cy.get('.form-error')
                .should('exist')

        })
    } )
   
  })