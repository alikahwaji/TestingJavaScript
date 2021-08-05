const customMatchers = {
  toBeCalculator: function () {
    return {
      compare: function (actual) {
        const result = {
          pass: actual instanceof Calculator,
          message: ''
        }

        if (result.pass) {
          //TODO
        } else {
          result.message = 'Expected ' + actual + ' to be a calculator'
        }
        return result
      }
    }
  }
}