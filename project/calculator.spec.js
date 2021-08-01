describe('calculator.js', function() {
  it('should add numbers to total', function () {
    const calculator = new Calculator()
    calculator.add(5)

    expect(calculator.total).toBe(5)
    
  })

  it('should subtract numbers from total', function () {
    const calculator = new Calculator()
    calculator.total = 30
    calculator.subtract(5)
    
    expect(calculator.total).toBe(25)
  })

  it('should multiply numbers to total', function () {
    const calculator = new Calculator()
    calculator.total = 20
    calculator.multiply(5)

    expect(calculator.total).toBe(100)
  })

  it('should divide numbers from total', function () {
    const calculator = new Calculator()
    calculator.total = 100
    calculator.divide(5)

    expect(calculator.total).toBe(20)
  })

  it('should throw an error if total is not a number', function () {
    const calculator = new Calculator()

    expect(calculator.total).toBe(0)
    expect(calculator.total).toBeFalsy()
  })
  it('has constructor', function () {
    const calculator = new Calculator()
    const calculator2 = new Calculator()

    expect(calculator).toEqual(calculator2)
  })
  it('has instantiated', function () {
    const calculator = new Calculator()
    const calculator2 = new Calculator()

    expect(calculator).toBeTruthy()
    expect(calculator2).toBeTruthy()
    expect(calculator).toEqual(calculator2)
    
  })
  it('has instantiated unique object', function () {
    const calculator = new Calculator()
    const calculator2 = new Calculator()

    expect(calculator).not.toBe(calculator2)
  })
  it('has common operations', function () {
    const calculator = new Calculator()

    expect(calculator.add).not.toBeUndefined()
    expect(calculator.subtract).not.toBeUndefined()
    expect(calculator.multiply).not.toBeUndefined()
    expect(calculator.divide).not.toBeUndefined()
  })

  it('overwrite value', function () {
    const calculator = new Calculator()
    calculator.total = null

    expect(calculator.total).toBeNull()
  })
})