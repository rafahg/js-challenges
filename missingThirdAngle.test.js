const { TestScheduler } = require("jest")
const missingAngles = require("./missingThirdAngle")

test("it will return rigth if the angle is equal to 90",() => {
    expect(missingAngles(45, 45)).toBe("rigth")
})

test("it will return obtuse if the angle is equal to 90",() => {
    expect(missingAngles(40, 40)).toBe("obtuse")
})

test("it will return acute if the angle is equal to 90",() => {
    expect(missingAngles(45, 46)).toBe("acute")
})





