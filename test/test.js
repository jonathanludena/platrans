
const expect = require('chai').expect
const platrans = require('..').default

describe('#platrans', function () {

  it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function () {
    const translation = platrans("Programar")
    expect(translation).to.equal("Program")
  })

  it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
    const translation = platrans("Zorro")
    const translation2 = platrans("Zarpar")

    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })

  it('Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio', function () {
    const translation = platrans("abecedario")
    expect(translation).to.equal("abece-dario")
  })

  it('Si la palabra original es un palíndromo,', function () {
    const translation = platrans("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })

})
