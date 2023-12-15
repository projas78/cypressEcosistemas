describe("Test con intercept", () => {
    // Antes de cada test, visitamos la página de dummyapi.io
    beforeEach(() => {
    cy.visit("https://dummyapi.io/explorer")
    })
    
    // El test verifica que la página hace una petición GET a la API y recibe una respuesta válida
    it("Verifica la petición y la respuesta de la API", () => {
        cy.intercept({path:"/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10"}).as('comments')
        cy.xpath('//*[@id="__next"]/div/div/div[3]/div/div[5]').click()
        cy.wait('@comments').then(intercept => {
            expect(intercept.response.body.limit).equal(10)
        }) 
    })
    
})