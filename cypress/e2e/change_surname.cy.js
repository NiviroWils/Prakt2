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
                .type(data.login_student)

            cy.log('Ввод существующего пароля')
            cy.get('.form-input--password')
                .type(data.existent_passwd)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()

            cy.wait(3000)

          cy.log('Переход в раздел "Профиль"')
          cy.get(':nth-child(2) > .menu-item__item-name')
              .click()

            cy.wait(3000)

            cy.log('Очистка поля')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--max > .form-input--text')
                .clear()

            cy.wait(3000)
            
          cy.log('Ввод новой фамилии')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--max > .form-input--text')
                .type(data.new_surname)

            cy.wait(3000)

            cy.log('Клик по кнопке "Сохранить"')
            cy.get('.form__buttons > .button')
                .click()

            cy.wait(3000)

        })
    } )
})