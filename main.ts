DFRobotMaqueenPlus.I2CInit()
serial.redirectToUSB()
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    `)
basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L1) >= 2800 && DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R1) <= 2800) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 30)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 20)
    } else if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) <= 28 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 20)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 30)
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 30)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 30)
    }
})
