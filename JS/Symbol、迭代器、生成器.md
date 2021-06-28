## Symbol

### 描述

创建方式： 其参数为 `String`，作为描述，而非标识

```javascript
var symbol1 = Symbol('1');
var symbol2 = Symbol('2');
symbol1 === symbol2;	// false
```

- 不能通过 `new Symbol()`来创建一个Symbol类的对象，

  而因为一些遗留问题，` new String()`,`new Number()`,`new Boolean()`可以创建 **原始包装器对象**

  可通过以下方式创建Symbol包装器对象：

  ```javascript
  var sym = Symbol('1');
  var symObj = Object(sym);
  typeof symObj;		// Object
  ```

### 全局共享的Symbol

​	`Symbol.for()` 、`Symbol.keyFor()`

```javascript
var globalSym = Symbol.for('foo');
Symbol.keyFor(globalSym);		// 'foo'
// 若空，为undefined
```



### 迭代Symbol

- `Symbol.iterator`

  要成为**可迭代**对象， 一个对象必须实现 `@@iterator` 方法。`for... of` 依赖迭代器

**object 没有实现该迭代器，是不可用`for...of`迭代的**，可用 `for...in` 来获取对象object的键名。

**Symbols 在 `for...in`迭代中不可枚举**。另外，`Object.getOwnPropertyNames()` 不会返回 symbol 对象的属性，但是你能使**`Object.getOwnPropertySymbols()`**得到它们。



## 生成器

生成器用于返回一个迭代器：

```javascript
var arr = [1,2,3];
function *generator( arr ) {
	for(let v of arr){
        yield v
    }
}
const itreator = generator(arr);
console.log(iterator.next());		// {value:1,done:false}
```

### 实现生成器：

返回迭代器对象 包括 `next() `方法，next()返回对象包括属性 `value` 和 `done`

```javascript
function generator( arr ){
    // 返回迭代器对象
    var curIndex = 0;
    return{
        next: function(){
            return{
                value: arr[curIndex++],
                done:curIndex <= arr.length
            		?true
                	:false
            }
        }
    }
}
const iterator = generator(arr);
// console.log(iterator)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
```



### 实现迭代器：

```javascript
// 迭代器 Symbol.iterator
  Object.prototype[Symbol.iterator] = function() {
    var _this = this;
    var curIndex = 0;
    return {
      next() {
        return {
          value: _this[curIndex++],
          done: curIndex <= _this.length ?
            false : true
        }
      }
    }
  }

  var obj = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
  }
  for (var v of obj) {
    console.log(v)
  }
```







