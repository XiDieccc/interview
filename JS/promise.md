一个 Promise 的当前状态必须为以下三种状态中的一种：等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）。



`同步`：构造函数 -> 执行外部代码-> 触发resolve/reject -> 改变 状态并且赋值-> 根据状态来执行then()内部的处理函数

`异步`：构造函数 -> 执行外部代码 -> then() -> （触发resolve/reject：**在setTimeout或者一些异步触发时，状态还是 pending，就无法根据状态来执行 then() 内部的处理函数了** ）

​	异步解决方案：

- 在 then() 函数内部添加 If(pending)  状态判断 并等待 异步resoleve 执行结果
- **`发布订阅模式`** ： 在pending状态时，将 回调处理函数 **存储在数组中**（多次then回调），在resolve/reject 状态改变时 来执行该数组中的方法。