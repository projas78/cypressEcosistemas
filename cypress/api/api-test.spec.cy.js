describe('API test', () => {
  it('should get a random user from the API', () => {
  // Hacer una petición GET a la URL de la API
  cy.request('https://randomuser.me/api')
  .then((response) => {
  // Asegurar que la respuesta tiene el código 200
  expect(response.status).to.eq(200)
  // Asegurar que la respuesta tiene la propiedad 'results' con un array de un elemento
  expect(response.body.results).to.be.an('array').with.lengthOf(1)
  // Asegurar que el elemento del array tiene la propiedad 'name' con un objeto
  expect(response.body.results[0].name).to.be.an('object')
  })
  })
  
  // Añadir otro test para obtener dos usuarios aleatorios de la API
  it('should get two random users from the API', () => {
  // Hacer una petición GET a la URL de la API con el parámetro results=2
    cy.request('https://randomuser.me/api?results=2')
    .then((response) => {
    // Asegurar que la respuesta tiene el código 200
    expect(response.status).to.eq(200)
    // Asegurar que la respuesta tiene la propiedad 'results' con un array de dos elementos
    expect(response.body.results).to.be.an('array').with.lengthOf(2)
    // Asegurar que los elementos del array tienen la propiedad 'name' con un objeto
    expect(response.body.results[0].name).to.be.an('object')
    expect(response.body.results[1].name).to.be.an('object')
    })
  })
  
  // Añadir otro test para obtener un usuario aleatorio de la API con el género femenino
  it('should get a random female user from the API', () => {
  // Hacer una petición GET a la URL de la API con el parámetro gender=female
  cy.request('https://randomuser.me/api?gender=female')
  .then((response) => {
  // Asegurar que la respuesta tiene el código 200
  expect(response.status).to.eq(200)
  // Asegurar que la respuesta tiene la propiedad 'results' con un array de un elemento
  expect(response.body.results).to.be.an('array').with.lengthOf(1)
  // Asegurar que el elemento del array tiene la propiedad 'gender' con el valor 'female'
  expect(response.body.results[0].gender).to.eq('female')
  })
  })
  })