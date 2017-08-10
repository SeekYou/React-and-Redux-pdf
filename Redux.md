### Redux Reducer + Flux

强调三个基本原则

1. Single Source of Truth
2. State is read-only
2. Changes are made with pure functions

核心问题：如何设计Store上状态的结构。

在reducer中，绝不能去修改参数中的state，reducer纯函数不应该产生副作用。

容器组件和傻瓜组件

拆分

外层：容器组件Container Component  聪明组件Smart Component
内层：展示组件Presentational Component  傻瓜组件Dumb Component  --纯函数，不需要有状态只根据props来渲染结果

在组件中直接导入Store是非常不利于组件复用的。
一个应用中最好只有一个地方需要直接导入Store，位于调用最顶层React组件--应用的入口文件src/index.js。
组件的上层组件把Store传递下来。

props传递store不是一个好方法。
React提供了一个context功能：
1. 上级组件要宣称自己支持context，并提供一个函数来返回代表context的对象。
2. 这个上级组件之下的所有子孙组件，只有宣称自己需要这个context，皆可以通过this.context访问到这个共同的环境对象。

单纯来看React的这个Context功能，必须强调要谨慎使用。只有对那些每个组件都可能使用，但是中间件又可能不使用的对象才有必要使用Context。

React-Redux两个最主要功能：
1. connect：连接容器组件和傻瓜组件
2. provider：提供包含store的context

connect功能有两次函数执行，第一次是connect函数的执行，第二次是把connect函数返回的函数再次执行，最后产生的就是容器组件。

connect函数的作用：
1. 把store上的状态转化为内层傻瓜组件的props
2. 把内层傻瓜组件中的用户动作转化为派送给store的动作。

Provider
redux要求store不光是一个object，必须包含三个函数
1. subscribe
2. dispatch
3. getState

Redux应用适合于“按功能组织”--就是把同一应用功能的代码放在一个目录下，一个应用功能包含多个角色(reducer、actions、视图)
比如一个Todo应用：
+ todoList/
	+ actions.js
	+ actionTypes.js
	+ index.js
	+ reducer.js
	+ views/
		+ component.js
		+ container.js
+ filter/
	+ actions.js
	+ actionTypes.js
	+ index.js
	+ reducer.js
	+ views/
		+ component.js
		+ container.js

> 最理想的情况，应该通过增加代码就能增加系统的功能，而不是通过对现有代码的修改来增加功能


状态树的设计是一门技术
需要遵循的原则：

1. 一个模块控制一个状态节点
2. 避免冗余数据
3. 树形结构扁平

通过store.getState()可以读取整个状态树的数据，但是只能更新自己相关那一部分。

每个功能模块目录下都有一个边界文件index.js，引用模块只能导入index.js，不能直接导入其他文件。

