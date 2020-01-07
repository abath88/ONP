let parser = require("./ONParser").ONParser
let ONP = require("./ONParser").ONP

console.log("2 / 2*2+2 - ONP = ", parser("2 / 2*2+2"))
console.log("2 / 2*2+2 =", ONP ( parser("2 / 2*2+2") ))