const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  // if(arrayOfString===(null || undefined)){
  //   return undefined
  // }else if(arrayOfString!==null||undefined){
  //   let count = arrayOfString.map(word => word.length)
  //   let max = Math.max(...count)
  //   return arrayOfString.filter(word => word.length===max)
  // }
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
console.log(getMaxLengthString(['hello', 'hi', 'hey']))