const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  if(arrayOfString===(null || undefined)){
    return undefined
  }else if(arrayOfString!==null||undefined){
    let count = arrayOfString.map(word => word.length)
    let max = Math.max(...count)
    return arrayOfString.filter(word => word.length===max)
  }
}
module.exports = getMaxLengthString
