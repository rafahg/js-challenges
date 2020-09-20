const { TestScheduler } = require("jest");
const fillArray = require("./fillArray");

test("it return an array with 0 to N-1 elemements", () =>{
    expect(fillArray(0)).toBe([])
});