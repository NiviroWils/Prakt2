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
                .type(data.login_employer)

            cy.log('Ввод существующего пароля')
            cy.get('.form-input--password')
                .type(data.existent_passwd)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()

            cy.wait(2000)

            cy.log('Клик по кнопке "Вакансии"')
            cy.get(':nth-child(7) > .menu-item__item-name')
                .click()

            cy.wait(2000)

            cy.log('Клик по кнопке "Создать вакансию"')
            cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
                .click()

            cy.wait(2000)

            cy.log('Ввод названия вакансии')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
                .type(data.vacancy_name)

            cy.wait(2000)

            cy.log('Выбор типа заработной платы')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .formlabels > .labels > :nth-child(2) > .salary-field > .salary-fieldwrapper--bottom > .radio-list > :nth-child(3) > .radio-component__input')
                .click()

            cy.wait(2000)

            cy.log('Ввод размера заработной платы')
            cy.get('.form-input--number')
                .type(data.vacancy_salary)

            cy.wait(2000)

            cy.log('Выбор типа занятости')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .formlabels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-selectselected')
                .click()

            cy.wait(2000)

            cy.get('.form-select__items > :nth-child(1)')
                .click()

            cy.wait(2000)

            cy.log('Выбор графика работы')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .formlabels > .labels > :nth-child(4) > [data-v-af677f15=""] > :nth-child(1) > .radio-list > :nth-child(1) > .radio-componentinput')
                .click()

            cy.wait(2000)

            cy.log('Ввод требований')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
                .type(data.vacancy_requirements)

            cy.wait(2000)

            cy.log('Ввод обязанностей')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
                .type(data.vacancy_duties)

            cy.wait(2000)

            cy.log('Клик по кнопке "Обновить вакансию"')
            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons')
                .click()

            cy.wait(2000)



        })
    } )
})