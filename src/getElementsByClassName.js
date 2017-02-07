// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, current, results) {
  current = current || document.body;
  results = results || [];
  if (current.classList !== undefined){
      if (current.classList.contains(className)){
      results.push(current);
    }
  }
  current.childNodes.forEach((element) => {
    return getElementsByClassName(className, element, results)
  });
  return results;
};
