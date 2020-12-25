let item = false
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
for (let index = 0; index < 4; index++) {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(200)
}
basic.pause(100)
for (let index = 0; index < 4; index++) {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(100)
}
maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 250)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 250)
basic.pause(5000)
basic.forever(function () {
    for (let index = 0; index < 100000000; index++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(100)
    }
    if (maqueen.sensor(PingUnit.Centimeters) < 35 && maqueen.sensor(PingUnit.Centimeters) != 0) {
        item = Math.randomBoolean()
        if (item == true) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
            basic.pause(1300)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 100)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 100)
            basic.pause(1300)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
        }
        if (item == false) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
            basic.pause(1000)
        }
    } else {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
    }
})
