let item = false
basic.showLeds(`
    # . . . #
    # # . # #
    . . # . .
    . # . # .
    # . . . #
    `)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    if (maqueen.sensor(PingUnit.Centimeters) < 35 && maqueen.sensor(PingUnit.Centimeters) != 0) {
        item = Math.randomBoolean()
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        for (let index = 0; index < 2; index++) {
            basic.pause(1300)
            music.playMelody("C5 - A - C5 - - A ", 200)
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(100)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            basic.pause(100)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(100)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        }
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 100)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 100)
        basic.pause(3000)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
        basic.pause(1000)
        if (item == true) {
        	
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
