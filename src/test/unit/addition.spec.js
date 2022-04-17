// let addition = require('./addition')
import addition from './addition.js'
it('addition',()=>{
    expect(addition(1,2)).toBe(3)
})