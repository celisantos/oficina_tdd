const soma = require('./soma')

describe('Soma', () => {
  it('deverá somar dois números inteiros', () => {
    expect(soma(3,3)).toBe(6)
  })
})