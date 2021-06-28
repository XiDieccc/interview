## 深拷贝

方法： `JSON.parse(JSON.Stringify)` 、`端到端克隆`、''

**克隆`symbol`和【symbol独一无二的】相互矛盾???**



### 1. JSON.parse

```javascript
JSON.parse(JSON.stringify(obj))
```

**缺点：**

- 创建了可能会很大的临时字符串

- `JSON.stringify()` 的缺点：

  - 转换值有 `toJSON()` 方法，例如`Date`日期调用该方法转换为字符串`String`
  - 对于 **循环嵌套** 的对象，会抛出错误，例如：

  ```javascript
  var a = {};
  var b = {a};
  a.b = b;
  ```

  - `boolean`、`Number`、`String` 的 **包装对象** => 原始值
  - **`Symbol` 属性 => 空值**
  - **`function`、`undefined` => `undefined`**
  - **`NaN`、`Infinity`、`null`=>`null`**
  - 不可枚举的属性被忽略 `enumerable: false`

  

### 2. 端到端克隆

​	建立两个端，一个端发送消息，另一个端接收消息。

​	可利用 `Web Worker API` 中的 `MessageChannel`：

```javascript
  var a = {
    arr: [1, 2, 3],
    obj: {
      deep: [2, 4],
      [Symbol.for('111')]: 'foo'
    }
  }
  var chanel = new MessageChannel();

  function deepClone(obj) {
    return new Promise((resolve) => {
      chanel.port1.postMessage(obj);
      chanel.port2.onmessage = (e) => {
        resolve(e.data);
      }
    })
  }
  deepClone(a).then((res) => {
    console.log(res);
  })
```

- 可解决循环引用的问题
- 经过验证依然无法拷贝 `Symbol`的值
- 该方法是异步的



### 3. 工具库：`lodash`

```javascript
var lodash = require('lodash');
var resObj = lodash.cloneDeep(srcObj)
```

​	可以拷贝 `Symbol`的值



### 4. 递归封装，代码实现

​	js中遍历一个对象的属性的方法

- `Object.keys()` 仅仅返回自身的可枚举属性，不包括继承来的，更不包括Symbol属性
- `Object.getOwnPropertyNames()` 返回自身的可枚举和不可枚举属性。但是不包括Symbol属性
- `Object.getOwnPropertySymbols()` 返回自身的Symol属性
- `for...in` 可以遍历对象的自身的和继承的可枚举属性，不包含Symbol属性
- `Reflect.ownkeys() `返回对象自身的所有属性，不管是否可枚举，也不管是否是Symbol。注意不包括继承的属性





