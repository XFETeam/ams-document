---
title: style 和 className
---

## style 和 className

对于不熟悉 `React` 但对 `Html`, `Css`, `Javascript` 有一定了解的开发者需要对 `AMS` 中的 `style` 和 `className` 重新认识!

## style

style 属性接受具有驼峰命名属性的 JavaScript 对象，而不是 CSS 字符串。 这与 JavaScript DOM 的 style 属性一致，但是更高效，并且防止XSS安全漏洞。 例如:

```Javascript
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```

请注意，样式不自动进行兼容。 要支持旧版本的浏览器，您需要提供相应的样式属性：

```Javascript
const divStyle = {
  WebkitTransition: 'all', // 注意这里的大写首字母 'W'
  msTransition: 'all' // 'ms' 'ms'是唯一的小写字母的浏览器前缀
};

function ComponentWithTransition() {
  return <div style={divStyle}>This should work cross-browser</div>;
}
```

样式使用驼峰式命名，是便于从 JS 访问 DOM 节点上的属性(例如 node.style.backgroundImage)。 ms 以外的供应商前缀应以大写字母开头。 这就是为什么 WebkitTransition 有一个大写 “W”。

React 会自动为某些内联样式的数字属性值附加一个 “px” 后缀。 如果你想使用 “px” 以外的单位，请明确指定单位，并将该值指定为字符串。 例如：

```Javascript
// 结果样式: '10px'
<div style={{ height: 10 }}>
  Hello World!
</div>

// 结果样式: '10%'
<div style={{ height: '10%' }}>
  Hello World!
</div>
```

不是所有样式的数字属性值都转换为像素后缀的字符串。某些属性保持无单位（例如zoom，order，flex）。无单位属性的完整列表可以在 [这里](https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSProperty.js#L15-L59) 查看。

## className

React 最终选择使用 `className` 而不是 `class` 主要出于下面 3 个场景的考量:

1. React 一开始的理念是想与浏览器的 DOM API 保持一致而不是 HTML，因为 JSX 是 JS 的扩展，而不是用来代替 HTML 的，这样会和元素的创建更为接近。在元素上设置class需要使用className这个 API：

```Javascript
const element = document.createElement("div");
element.className = "hello";
```

2. 浏览器问题，ES5 之前，在对象中不能使用保留字。以下代码在 IE8 中将会抛出错误：

```Javascript
const element = {
  attributes: {
    class: "hello"
  }
}
```

3. 解构问题，当你在解构属性的时候，如果分配一个class变量会出问题：
```Javascript
const { class } = { class: 'foo' } // Uncaught SyntaxError: Unexpected token }
const { className } = { className: 'foo' } 
const { class: className } = { class: 'foo' } 
```
