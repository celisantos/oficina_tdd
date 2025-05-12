const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
    expect(queue.size()).toBe (0)

    queue.add(1);
    expect(queue.size()).toBe(1);
    
    queue.add(2);
    expect(queue.size()).toBe(2);

  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();
    expect(queue.peek()).toBeUndefined();
    
    queue.add(1);
    queue.add(2);
    expect(queue.peek()).toBe(1);
    expect(queue.size()).toBe(2);
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
    expect(queue.peek()).toBeUndefined();
    
    queue.add(1);
    queue.add(2);
    expect(queue.peek()).toBe(1);
    expect(queue.size()).toBe(2)
  })

  it('Deve remover o primeiro item da fila', () => {
        const queue = new Queue();
    expect(queue.remove()).toBeUndefined();
    
    queue.add(1);
    queue.add(2);
    queue.add(3);
    
    expect(queue.remove()).toBe(1);
    expect(queue.elements).toEqual([2, 3]);
    expect(queue.size()).toBe(2);
  })
})