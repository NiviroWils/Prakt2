describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su/registration')
    })
    it('None-existent password test', () => {
        cy.fixture('cypressTests').then(data => {
            cy.log('Положительный тест-кейс регистрации')
            cy.visit('https://dev.profteam.su/registration')
            //Тест-кейс для проверки регистрации (положительный)
            cy.log('Ввод некорректного логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.incorrect_login)

            cy.log('Ввод  email')
            cy.get('.form-input--email')
                .type(data.example_email)

            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
                .type(data.test_passwd)

            cy.log('Ввод повторный ввод пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
                .type(data.test_passwd)



        })
    })
})