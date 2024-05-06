describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://dev.profteam.su/login')
    })
    it('None-existent password test', () => {
        //Тест-кейс для проверки некорректного пароля

            cy.log('Ввод несуществующего логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.test_login)

            cy.log('Ввод email')
            cy.get('.form-input--email')
                .type(data.example_email)

            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
                .type(data.test_passwd)

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
  })