(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{254:function(s,a,t){"use strict";t.r(a);var n=t(17),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"函数仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数仓库"}},[s._v("#")]),s._v(" 函数仓库")]),s._v(" "),t("p",[s._v("与"),t("code",[s._v("组件仓库")]),s._v("类似，"),t("code",[s._v("函数仓库")]),s._v("提供了让函数分类的组织形式，最终能够让 JSON 对一个函数进行完整描述。\n目前 AMS 在前期仅提供以下"),t("code",[s._v("函数仓库")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("antd\nbase\n")])])]),t("p",[s._v("与"),t("code",[s._v("组件仓库")]),s._v("规范一致，函数仓库需要注意：")]),s._v(" "),t("p",[t("strong",[s._v("1. 所有的仓库名称必须小写。")]),s._v(" "),t("br"),s._v(" "),t("strong",[s._v("2. 仓库名除了特殊对待的几个以外，其他均与 npm 线上仓库名称一致。")])]),s._v(" "),t("h2",{attrs:{id:"函数转换为-json-原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数转换为-json-原理"}},[s._v("#")]),s._v(" 函数转换为 json 原理")]),s._v(" "),t("p",[s._v("我们常见的函数通常表述如下：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 延迟等待\n * @param {number} milliseconds - 毫秒\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("delay")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("milliseconds"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("resolve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" milliseconds"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("我们不难发现的是，"),t("code",[s._v("delay")]),s._v("能够进一步表述为以下调用形式")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("delay")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apply")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("milliseconds"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("delay")]),s._v(" 为函数名，我们仍需定义一个函数仓库用于管理一系列的函数所属，即："),t("code",[s._v("registryName='base'")]),s._v("。 "),t("code",[s._v("[<milliseconds>]")]),s._v(" 为传入参数，这时我们已经可以使用 json 进行进一步的转换表达：")]),s._v(" "),t("div",{staticClass:"language-json5 line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json5"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//export const delay = (")]),t("span",{pre:!0,attrs:{class:"token property unquoted"}},[s._v("milliseconds")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number) => "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  return new Promise((resolve) => setTimeout(resolve, milliseconds));")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//};")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"reigstryName"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"base"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"functionName"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"delay"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"args"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 1秒 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"函数仓库-antd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数仓库-antd"}},[s._v("#")]),s._v(" 函数仓库 - antd")]),s._v(" "),t("p",[s._v("详细请参考 antd ("),t("a",{attrs:{href:"https://ant.design/docs/react/introduce-cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("ant design"),t("OutboundLink")],1),s._v(")。为了避免读者对 antd 用法表示迷茫，\n我们提供以下用例便于读者理解。首先我们找到一个 antd 提供的全局实例方法，如："),t("a",{attrs:{href:"https://ant.design/components/message-cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("message"),t("OutboundLink")],1),s._v(":")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import { message } from 'antd';")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// message.info('This is a normal message');")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"reigstryName"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"antd"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"functionName"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"args"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is a normal message"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"函数仓库-base"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数仓库-base"}},[s._v("#")]),s._v(" 函数仓库 - base")]),s._v(" "),t("p",[s._v("文档待补全。")])])}),[],!1,null,null,null);a.default=e.exports}}]);