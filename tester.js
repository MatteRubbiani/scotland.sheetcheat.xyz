const ActiveUsersManager = require("./managers/activeUsers")
const PathsManager = require("./staticGameConfiguration/paths")
const ActiveGamesManager = require("./managers/activeGames")

//let game = ActiveGamesManager.createActiveGame("lalla", "prova")
let game = ActiveGamesManager.getActiveGameById("prova")
//game.setColor("lalla", 3)
//game.saveToFile()
//game.setMisterX("lalla", "matteo")
//game.addPlayer("jacopo")
//game.startGame()
//game.saveToFile()
// "67": {"taxi": [50, 51, 66, 68, 84], "bus": [23, 52, 65, 102, 82], "underground": [13, 79, 89, 111]}
game.movePlayer("matteo", 67, 111, 2)
game.saveToFile()
console.log(game.toJson())
//console.log(game.toJson())
//game.saveToFile()

//let game1 = ActiveGamesManager.getActiveGameById("game")
//console.log(game1.toJson())
//game1.addPlayer("jacopo")
//console.log(game1.toJson())
//game1.saveToFile()

//let game2 = ActiveGamesManager.getActiveGameById("game")
//game2.addPlayer("pino")
//let a = game2.setColor("user", 2)
//game2.saveToFile()
//console.log(a)
//console.log(game2.getGame())

