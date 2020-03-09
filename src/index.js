module.exports = function check(str, bracketsConfig) {
  let arrString = str.split('');
  
  for (let i=0; i<arrString.length; i++) {
    for (let j=0; j<bracketsConfig.length; j++) {
      if (arrString[i] == bracketsConfig[j][0] && arrString[i+1] == bracketsConfig[j][1] ) {
        arrString.splice(i,2);
        i = 0;
      }
    }
  }
  
  if (arrString.length ==2) {
    for (let j=0; j<bracketsConfig.length; j++) {
      if (arrString[0] == bracketsConfig[j][0] && arrString[1] == bracketsConfig[j][1] ) {
        arrString.splice(0,2);
      }
    }
  }

  if (arrString.length == 0) return true;
  
  return false
}
