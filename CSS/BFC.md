## BFC概念



## 触发BFC

只要元素满足下面任一条件即可触发 BFC 特性：

- body 根元素
- 浮动元素：**float 除 none 以外的值**
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- **overflow 除了 visible 以外的值 (hidden、auto、scroll)**



## BFC特性

- 同一个BFC内 会使 margin 重叠
- 父级BFC会包括住子级的BFC
- BFC可阻止元素被浮动元素覆盖，相当于两个BFC盒子排开了，可实现 `两列自适应布局`

参考：

- https://zhuanlan.zhihu.com/p/25321647