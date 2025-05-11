const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    const calculadora = new Calculadora()

    expect(calculadora.soma(5,3)).toBe(8)
  })

  it('Deverá retornar a subtração de dois números', () => {
     const calculadora = new Calculadora()

    expect(calculadora.subtracao(6,2)).toBe(4)
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
     const calculadora = new Calculadora()

    expect(calculadora.multiplicacao(3,3)).toBe(9)
  })

  it('Deverá retornar a divisao entre dois números', () => {
     const calculadora = new Calculadora()

    expect(calculadora.divisao(10,5)).toBe(2)
  })
})