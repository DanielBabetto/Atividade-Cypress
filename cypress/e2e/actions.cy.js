describe('Automação de Formulário - Cypress Actions', () => {
  beforeEach(() => {
    // Visita a página indicada na especificação da atividade
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it('deve preencher o e-mail e selecionar uma caixa de opção', () => {
    const emailFicticio = 'aluno.teste@exemplo.com'

    // 1. Interage com o campo de e-mail e valida o conteúdo inserido
    cy.get('.action-email')
      .type(emailFicticio)
      .should('have.value', emailFicticio)

    // 2. Localiza a caixa de seleção da seção, marca e confirma que foi selecionada
    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .check()
      .should('be.checked')
  })
})