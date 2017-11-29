function countLetters(string){
var uniqueChar = {};
  for(var i = 0; i < string.length; i++){
    var character = string[i]
    if (character === " "){
      continue;
    }
    if( uniqueChar[character] === undefined) {
      uniqueChar[character] = 0
    }
    uniqueChar[character] += 1;
  }
  return uniqueChar
}