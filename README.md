# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


# myjest
一个vue3的单测
## 1.了解jest初始配置与使用esmodule方式引入
### 1.安装
```js
// 安装jest
npm i -D jest 
// 在package.json配置jest命令
"scripts": {
    "test": "jest"
}
```
### 2.测试执行方法
新建写方法的 `addition.js` 和 测试该方法是否可行的 `addition.spec.js` 测试文件
```js
// additon.js
module.exports = (x, y) => {
    return x + y
}
// additon.spec.js
let addition = require('./addition')
it('addition',()=>{
    // 测试该方法求和是否等于 toBe 后的值
    expect(addition(1,2)).toBe(3)
})
```
控制台输入刚配置好的命令 `yarn test`，测试结果如下，可以看到结果都是 PASS 通过的，说明该方法是可行的
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42f3ec16b9c44306b5ac42a4a80989aa~tplv-k3u1fbpfcp-watermark.image?)

### 3.esmodule引入
由于nodejs环境运行是不支持esmodule的方式的
```js
// 修改let addition = require('./addition') 为 esmodule的引入方式
import addition from './addition.js'
it('addition',()=>{
    expect(addition(1,2)).toBe(3)
})
```
来配置一个babel让它支持esmodule`npm i -D babel-jest @babel/core @babel/preset-env`\
`package.json` 加入 `"type": "module"`
新建一个babel.config.js
```js
module.exports = {
    presets: [["@babel/preset-env",{targets:{node:"current"}}]]
}
```
再次执行`yarn test`也是可行的
>PS：nodejs也可直接配置成支持esm的场景
- 1. 给 package.json 配置 "type":"module"
- 2. package.json 中的 scripts中加入 "test": "NODE_OPTIONS=--experimental-vm-modules jest"
## 2.编写vue组件测试
这里用vite初始化vue3，控制台 `npm init vite`\
src下新建test/unit/，再新建`addition.js`和  `addition.spec.js`，按照第1点中的方法来操作
## 3.渲染组件与条件渲染逻辑
## 4.组件的emit事件与props传参
## 5.组件的slot插槽