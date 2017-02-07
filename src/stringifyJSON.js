var stringifyJSON = function(obj) {
  var result = '';

  if(typeof obj === 'string'){
    return result + '"' + obj + '"';
  }
  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return result + obj;
  }
  if (typeof obj === 'undefined') {
    return result + null;
  }


  if(Array.isArray(obj)){
      if(obj.length === 0) {
        return "[]";
      } else {
        result =  "[";
        for (var i = 0; i < obj.length; i++) {
          result += stringifyJSON(obj[i]);
          if (i < obj.length - 1) {
            result += ",";
          }
        }
        result += "]";
      }
    }

    if (Object.prototype.toString.call(obj).slice(8, -1) === 'Object') {
  // if(typeof obj === 'object'){
    result += '{';
    for (var key in obj){
      if(typeof obj[key] !== 'function' || typeof obj[key] !== 'undefined'){
        result += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
      }
    }
    if(result.length > 1){
      result = result.slice(0, -1) + '}';
    } else {
      return result + '}';
    }
  }
  return result;
};


// var stringifyJSON = function(obj) {
//   var result = '';
//   if (typeof obj === 'string') {
//     return result + '"' + obj + '"';
//   }
//   if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
//     return result += obj;
//   }
//   if (typeof obj === 'undefined') {
//     return result + null;
//   }
//
//   if (Array.isArray(obj)) {
//     result += '[';
//     for (var i = 0; i < obj.length; i++) {
//       result += stringifyJSON(obj[i]) + ',';
//     }
//     result = result.length > 1 ? result.slice(0, -1) + ']' : result + ']';
//   }
//
//   if (Object.prototype.toString.call(obj).slice(8, -1) === 'Object') {
//     result += '{';
//     for (var key in obj) {
//       if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
//         // do nothing
//       } else {
//         result += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
//       }
//     }
//     result = result.length > 1 ? result.slice(0, -1) + '}' : result + '}';
//   }
//   return result;
// };
