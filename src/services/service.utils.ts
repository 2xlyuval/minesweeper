export const utileService = {
  getRandomBetweenInclusive,
  makeId,
}

function getRandomBetweenInclusive(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//up to 5 letters
function makeId(length = 5) {
  var txt = ""
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}
