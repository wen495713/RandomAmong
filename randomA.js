function RanAmong(weights) {
  var luckNo = parseInt(Math.random() * 100000000000000);
  var total = 0;
  for (var i in weights) {
    total += weights[i];
  }
  var index = luckNo % total + 1;
  total = 0;
  for (var i in weights) {
    total += weights[i];
    if (index <= total)
      return i;
  }
  return -1;
} 

function RanAmong(weights,cbZero){
  var total = 0;
  for (var idx in weights){
    total+=weights[idx];
  }
  var rate = 1;
  var currect = true;
  while(total>1 && currect){
    if (total%10 == 0) {
      total = total/10;
      rate = rate*10;
    }else{
      currect = false;
    }
  }
  if (!currect) {cbZero(-1);return;};
  var rand = Math.random()*rate;
  var result;
  for (var idx in weights){
    rand = rand - weights[idx];
    if (rand<0) {
      result = idx;
      break;
    };
  }
  cbZero(idx);
}