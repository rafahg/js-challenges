const { TestScheduler } = require("jest");
const fillArray = require("./fillArray");

test("it return an array with 0 to N-1 elemements", () =>{
    expect(fillArray(3)).toStrictEqual([0,1,2]);
});