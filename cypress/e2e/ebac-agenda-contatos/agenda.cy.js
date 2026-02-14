/// <reference types="cypress" />

describe('Testes para a home', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve incluir um novo contato', () => {
    cy.get('input[type="text"').type('Otávio')
    cy.get('input[type="email"').type('test@test.com')
    cy.get('input[type="tel"').type('12345678900')
    cy.get('button[type="submit"').click()
    cy.get('.contato li').last().should('have.text', 'test@test.com')
  })

  it('Deve alterar um contato', () => {
    cy.get('.edit').last().click()
    cy.get('input[value="test@test.com"]').clear().type('otavio.zerotwo@gmail.com')
    cy.get('.alterar').click()
    cy.get('.contato li').last().should('have.text', 'otavio.zerotwo@gmail.com')
  })

  it('Deve remover um contato', () => {
    cy.get('.delete').last().click()
    cy.get('.contato').should('have.length', 3)
  })
})