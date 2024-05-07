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

            cy.log('Клик по кнопке "Потребности"')
            cy.get(':nth-child(1) > .header__nav > [href="/needs"]')
                .click()

            cy.wait(3000)

            cy.log('Клик по кнопке "Подробнее"')
            cy.get(':nth-child(1) > .need-item__info-wrapper > .need-item__footer-wrapper > .need-footer > .need-footer__button-wrapper > .button')
                .click()
        })
    } )
})