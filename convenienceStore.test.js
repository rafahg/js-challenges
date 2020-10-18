const Store = require('./convenienceStore')
/* const totalToPounds = require('./convenienceStore') */



test('it will return the total amount in the pockets!, in pennies',() =>{
    let store = new Store(); 
    expect(store.changeEnough(3, [1,0,0,0])).toBe(25) 
    expect(store.changeEnough(3, [1,1,0,0])).toBe(35)
    expect(store.changeEnough(3, [1,1,1,0])).toBe(40)
    expect(store.changeEnough(3, [1,1,1,1])).toBe(41)
    expect(store.changeEnough(3, [2,3,2,8])).toBe(98)
    expect(store.changeEnough(3, [4,2,8,120])).toBe(280)
})

/* test('it will convert the amount in the pockets to pounds!',() =>{
    expect(totalToPounds(280)).toBe(2.80)
})
 */