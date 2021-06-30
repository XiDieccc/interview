# CommonJS

- 模块只执行一次 之后调用获取的 `module.exports` 都是缓存哪怕这个 `js` 还没执行完毕（**因为先加入缓存后执行模块**）
- 模块导出就是`return`这个变量的其实跟`a = b`**赋值**一样， **基本类型**导出的是**值**， **引用类型**导出的是**引用地址**
- `exports` 和 `module.exports` 持有相同引用，因为最后导出的是 `module.exports`， 所以对`exports`进行赋值会导致`exports`操作的不再是`module.exports`的引用

### 循环引用

```javascript
// a.js
module.exports.a = 1
var b = require('./b')
console.log(b)
module.exports.a = 2

// b.js
module.exports.b = 11
var a = require('./a')
console.log(a)
module.exports.b = 22

//main.js
var a = require('./a')
console.log(a)
```

1. `执行 node main.js -> 第一行 require(a.js)`，（`node` 执行也可以理解为调用了require方法，我们省略`require(main.js)`内容）
2. `进入 require(a)方法： 判断缓存（无） -> 初始化一个 module -> 将 module 加入缓存 -> 执行模块 a.js 内容`，（需要注意 是**先**加入**缓存**， **后执行**模块内容）
3. `a.js： 第一行导出 a = 1 -> 第二行 require(b.js)`（a 只执行了第一行）
4. `进入 require(b) 内 同 1 -> 执行模块 b.js 内容`
5. `b.js： 第一行 b = 11 -> 第二行 require(a.js)`
6. `require(a) 此时 a.js 是第二次调用 require -> 判断缓存（有）-> cachedModule.exports -> 回到 b.js`（因为`js`对象引用问题 此时的 `cachedModule.exports = { a: 1 }`）
7. `b.js：第三行 输出 { a: 1 } -> 第四行 修改 b = 22 -> 执行完毕回到 a.js`
8. `a.js：第二行 require 完毕 获取到 b -> 第三行 输出 { b: 22 } -> 第四行 导出 a = 2 -> 执行完毕回到 main.js`
9. `main.js：获取 a -> 第二行 输出 { a: 2 } -> 执行完毕`



# ES6 Module

- ES6语法是 **静态** 的

- `import` 自动 **提升到代码的顶层**

  静态的语法意味着可以在编译时确定导入和导出，更加快速的查找依赖，可以使用`lint`工具对模块依赖进行检查，可以对导入导出加上类型信息进行静态的类型检查

- 使用 `import` 被导入的模块运行在**严格模式**下
- 使用 `import` 被导入的变量是**只读**的，可以理解默认为 `const` 装饰，无法被赋值
- 使用 `import` 被导入的变量是与原变量**绑定/引用**的，可以理解为 `import` 导入的变量无论是否为基本类型都是**引用传递**





# 区别

- `CommonJs`导出的是变量的一份拷贝，`ES6 Module`导出的是变量的绑定（`export default` 是特殊的）
- `CommonJs`是单个值导出，`ES6 Module`可以导出多个
- `CommonJs`是动态语法可以写在判断里，`ES6 Module`静态语法只能写在顶层
- `CommonJs`的 `this` 是当前模块，`ES6 Module`的 `this` 是 `undefined` **严格模式**





参考文献：

- https://segmentfault.com/a/1190000017878394?utm_source=sf-similar-article
- https://segmentfault.com/a/1190000023261116