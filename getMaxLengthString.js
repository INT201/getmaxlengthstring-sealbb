const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
<<<<<<< HEAD
  // if(arrayOfString===(null || undefined)){
  //   return undefined
  // }else if(arrayOfString!==null||undefined){
  //   let count = arrayOfString.map(word => word.length)
  //   let max = Math.max(...count)
  //   return arrayOfString.filter(word => word.length===max)
  // }
=======
>>>>>>> 9f0ff9a1ce9488831ebe6e7c5b01ab52f5e6c56b
  if(!arrayOfString){
     return undefined
  }
  let maxL=0
  for(let i=0;i<arrayOfString.length;i++){
    if(arrayOfString[i].length>maxL){
      maxL=arrayOfString[i].length
    }
  }
  return arrayOfString.filter(word => word.length===maxL)
}
module.exports = getMaxLengthString
<<<<<<< HEAD
console.log(getMaxLengthString(['hello', 'hi', 'hey']))
=======
>>>>>>> 9f0ff9a1ce9488831ebe6e7c5b01ab52f5e6c56b