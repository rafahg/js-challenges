const { TestScheduler } = require("jest")
const missingAngles = require("./missingThirdAngle")

test("it will return the kind of angle",() => {
    expect(missingAngles).toBe("whatever")
})