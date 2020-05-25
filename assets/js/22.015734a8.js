(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{266:function(s,t,n){"use strict";n.r(t);var a=n(28),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"为什么组件用大写开头"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么组件用大写开头"}},[s._v("#")]),s._v(" 为什么组件用大写开头")]),s._v(" "),n("p",[s._v("JSX 是 React.createElement(component, props, …children) 提供的语法糖，component 的类型是：string/ReactClass type。我们具体看一下在什么情况下会用到 string 类型，什么情况下用到 ReactClass type 类型。")]),s._v(" "),n("ul",[n("li",[s._v("string 类型 react 会觉得他是一个原生 dom 节点")]),s._v(" "),n("li",[s._v("ReactClass type 类型 自定义组件")])]),s._v(" "),n("p",[s._v("对于小写字符串，就会直接创建 dom 元素，如果 html 并没有这个元素，是创建不出来的。而大字符串传进去的不是一个字符串，是一个组件(其实就是一个对象)，那么就不会直接去创建 dom 元素，还会做其他的处理。")]),s._v(" "),n("p",[s._v("正因为上面原因, 当我们使用 html 元素时, JSON 编写如下:")]),s._v(" "),n("div",{staticClass:"language-json5 line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json5"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property unquoted"}},[s._v("$$$")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'component'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property unquoted"}},[s._v("registryName")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 原生 html 组件仓库")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property unquoted"}},[s._v("componentName")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意这里的 div 是小写, 而不是 ")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Div'")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property unquoted"}},[s._v("chidlren")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("div",{staticClass:"language-json5 line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json5"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property unquoted"}},[s._v("$$$")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'component'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property unquoted"}},[s._v("registryName")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'antd'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义 React 组件仓库")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property unquoted"}},[s._v("componentName")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Button'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意这里的 Button 首字母大写")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property unquoted"}},[s._v("chidlren")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);