const { TestScheduler } = require("jest")
const missingAngles = require("./missingThirdAngle")

test("it will return rigth if the angle is equal to 90",() => {
    expect(missingAngles(45, 45)).toBe("rigth")
})


