function countLetters(string){
var uniqueChar = {};
  for(var i = 0; i < string.length; i++){
    var character = string[i];
    if (character === " "){
      continue;
    }
    if( uniqueChar[character] === undefined) {
      uniqueChar[character] = []
    }
    uniqueChar[character].push(i);
  }
  return uniqueChar
}
console.log(countLetters(" :) this is getting pretty complicated :("))