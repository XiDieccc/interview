// var a = {
//   arr: [1, 2, 3],
//   obj: {
//     deep: [2, 4],
//     [Symbol.for('111')]: 'foo'
//   }
// }
// var lodash = require('lodash');
// var resObj = lodash.cloneDeep(a)
// console.log(resObj)
var set = new Set();

function deepClone(srcObj) {
  set.add(srcObj);
  var target = Array.isArray(srcObj) ? [] : {};
  if (srcObj && typeof srcObj === 'object') {
    for (key in srcObj) {
      if (srcObj.hasOwnProperty(key)) {
        if (srcObj[key] && typeof srcObj[key] === 'object') {
          // TODO: 此处添加判别 循环引用 
          if (set.has(srcObj[key])) {
            void(0);
          } else {
            target[key] = deepClone(srcObj[key]);
          }
        } else {
          target[key] = srcObj[key]
        }
      }
    }
  }

  return target;
}


// module.exports = deepClone