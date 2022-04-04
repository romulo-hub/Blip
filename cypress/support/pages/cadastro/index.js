

const el = require('./elements').ELEMENTS



class cadastro{
site(){

    cy.visit(el.visit)
    cy.get(el.senha).type(el.senha1)
    cy.get(el.email).type(el.nome)
    cy.get(el.botao).click()
 
 
 
   



}



}

export default new cadastro()