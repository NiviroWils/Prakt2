describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su/registration')
    })
    it('None-existent password test', () => {
        cy.fixture('cypressTests').then(data => {
            cy.log('Положительный тест-кейс регистрации')
            cy.visit('https://dev.profteam.su/registration')
            //Тест-кейс для проверки регистрации (положительный)
            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.test_login2)

            cy.log('Ввод  email')
            cy.get('.form-input--email')
                .type(data.example_email2)

            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
                .type(data.test_passwd)

            cy.log('Повторный ввод пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
                .type(data.test_passwd)

            cy.log('Клик по кнопке "Далее"')
            cy.get(':nth-child(4) > .button')
                .click()

            cy.wait(3000)

            cy.log('Ввод фамилии')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.test_surname)

            cy.log('Ввод невалидного имени')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
                .type(data.incorrect_name)

            cy.log('Ввод отчества')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text')
                .type(data.test_patronymic)

            cy.wait(3000)

        })
    })
})