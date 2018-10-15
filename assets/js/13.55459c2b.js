(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{195:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("p",[s._v("具体实现比较：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n        "),a("span",{attrs:{class:"token comment"}},[s._v("// ES5新增的常用数组方法")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" arr "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("3")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[s._v("// 一 forEach => 遍历数组")]),s._v("\n        arr"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("forEach")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[s._v("// 二 map => 使用一个数组, 利用某规则映射得到一个新数组")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" mapArr "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("map")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" v "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" v"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        arr"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("map")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" v "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" v"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{attrs:{class:"token comment"}},[s._v("// 如果只有一句话, 可以省略大括号和return")]),s._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mapArr"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("         "),a("span",{attrs:{class:"token comment"}},[s._v("// [1, 4, 9, 4, 1]")]),s._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[s._v("// 三 filter => 找出符合条件的元素")]),s._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[s._v("// 3.1 找出数组中的偶数")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" filterArr1 "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" v "),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filterArr1"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[s._v("// 3.2 删除数组中的偶数")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" filterArr2 "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" v "),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{attrs:{class:"token comment"}},[s._v("// 找出数组中的奇数留下来即可")]),s._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filterArr2"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[s._v("// 四 every => 判断数组中的所有元素是否都符合某种条件")]),s._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[s._v("// 4.1 数组中的数字是否都是偶数")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" result1 "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("every")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" v "),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{attrs:{class:"token comment"}},[s._v("// 所有的结果都为true, 结果为true, 有一个false, 结果为false")]),s._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result1"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[s._v("// 4.2 数组中的数字是否都大于0")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" result2 "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("every")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" v "),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result2"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[s._v("// 五 some => 判断数组中是否含有符合条件的元素")]),s._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[s._v("// 5.1 数组中是否有大于2的数")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" result3 "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("some")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" v "),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{attrs:{class:"token comment"}},[s._v("// 只要有一个true, 结果为true")]),s._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result3"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[s._v("// 5.2 数组中是否有小于1的数")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" result4 "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("some")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" v "),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result4"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])])])}],!1,null,null,null);t.default=r.exports}}]);