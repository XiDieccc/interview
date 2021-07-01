flexbox 是一种一维的布局，是因为一个 flexbox 一次只能处理一个维度上的元素布局，一行或者一列。作为对比的是另外一个二维布局 [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)，可以同时处理行和列上的布局。

## flex布局的两根轴线

### 主轴 `flex-direction`

- row
- row-reverse
- column
- column-reverse

### 交叉轴

### 起始线和终止线

不再是固定的 从左到右 和 从上到下（不同语言的书写模式）

而是 从  **起始线 ---> 终止线**



## flex容器

文档中采用了 flexbox 的区域就叫做 flex 容器。为了创建 flex 容器， 我们把一个容器的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 属性值改为 `flex` 或者 `inline-flex`。 完成这一步之后，容器中的直系子元素就会变为 **flex 元素**。所有CSS属性都会有一个初始值，所以 flex 容器中的所有 flex 元素都会有下列行为：

- 元素排列为一行 (`flex-direction` 属性的初始值是 `row`)。
- 元素从主轴的起始线开始。
- 元素不会在主维度方向拉伸，但是可以缩小。
- 元素被拉伸来填充交叉轴大小。
- [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis) 属性为 `auto`。
- [`flex-wrap`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap) 属性为 `nowrap`。

这会让你的元素呈线形排列，并且把自己的大小作为主轴上的大小。如果有太多元素超出容器，它们会溢出而不会换行。如果一些元素比其他元素高，那么元素会沿交叉轴被拉伸来填满它的大小。



## 用flex-wrap实现多行Flex容器

```css
.box {
   display: flex;
   flex-wrap: nowrap;
}
```
## 简写属性 flex-flow

```css
.box {
   display: flex;
   flex-flow: row nowrap;
}
```





## 可用空间控制属性

- flex-grow
- flex-shrink
- flex-basis

### [Flex 元素属性：`flex-basis` ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#flex_元素属性：flex-basis)

 `flex-basis` 定义了该元素的**空间大小（**the size of that item in terms of the space**）**，flex容器里除了元素所占的空间以外的富余空间就是**可用空间** available space。 该属性的默认值是 `auto` 。此时，浏览器会检测这个元素是否具有确定的尺寸。 在上面的例子中, 所有元素都设定了宽度（width）为100px，所以 `flex-basis` 的值为100px。

如果没有给元素设定尺寸，`flex-basis` 的值采用元素内容的尺寸。这就解释了：我们给只要给Flex元素的父元素声明 `display: flex` ，所有子元素就会排成一行，且自动分配小大以充分展示元素的内容。



### [Flex 元素属性：`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#flex_元素属性：flex-grow)

`flex-grow` 若被赋值为一个正整数， flex 元素会以 `flex-basis` 为基础，沿主轴方向增长尺寸。这会使该元素延展，并占据此方向轴上的可用空间（available space）。如果有其他元素也被允许延展，那么他们会各自占据可用空间的一部分。

如果我们给上例中的所有元素设定 `flex-grow` 值为1， 容器中的可用空间会被这些元素平分。它们会延展以填满容器主轴方向上的空间。

flex-grow 属性可以按比例分配空间。如果第一个元素 `flex-grow` 值为2， 其他元素值为1，则第一个元素将占有2/4（上例中，即为 200px 中的 100px）, 另外两个元素各占有1/4（各50px）。



## flex属性简写



- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`



## 元素间的对齐空间分配



### align-items（交叉轴方向）

- 默认 stretch
- felx-start 主轴起始线
- flex-end 主轴终止线
- center



### justify-content （主轴方向）

- `stretch` 默认
- `flex-start`
- `flex-end`
- `center`
- `space-around`
- `space-between`