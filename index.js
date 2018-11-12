function theBeatlesPlay(musicians, instruments){
  let arr = [];
  for(let i = 0; i < musicians.length; i++){
    const str = musicians[i] + "plays" + instruments[i];
    arr.push(str);

  }
  return arr;
}

function johnLennonFacts(facts) {
    var b = 0
    var array = []
    while (facts.length > b) {
    array.push(facts[b] + "!!!");
    b=b++
}
return array;
}
