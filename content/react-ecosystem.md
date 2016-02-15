+++
Categories = ["React"]
Tags = ["React", "Babel", "Webpack", "React-Router", "Redux"]
date = "2016-02-15T15:25:31Z"
summary = ""
title = "React Ecosystem"

+++

Note that to use React.js you don't need to use all the ecosystem, which many times, it's what makes difficult to begin. But if you want to build a real app, you should:

## 1) Consider some development tools:
  - Transpile jsx (and ES6) to ES5 - Babel
  - Bundle all your components and modules to be served on the client - Browserify or Webpack (I choose Webpack) 
  - Have a development server with live-reload and hot-reload - Webpack can do this, and babel-transform can mantaing the state of your app even if your code changes

### Babel

[Babel](https://babeljs.io/) is a JavaScript compiler that has support for the latest version of JavaScript through syntax transformers. It supports JSX with the [React preset](http://babeljs.io/docs/plugins/preset-react/).

**The best way to get started is [this repo](https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/user-handbook.md).**

*Note to Sublime users: Use it together with the [babel-sublime package](https://github.com/babel/babel-sublime).*

#### Transforms

The [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) wraps React components with arbitrary transforms. In other words, it allows you to instrument React components. Examples:

* [react-transform-hmr](https://github.com/gaearon/react-transform-hmr) - enables hot reloading using HMR API
* [react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors) - catches errors inside `render()`
* [react-transform-debug-inspector](https://github.com/alexkuz/react-transform-debug-inspector) - renders an inline prop inspector
* [react-transform-render-visualizer](https://github.com/spredfast/react-transform-render-visualizer) - highlight components when updated

**For a reference implementation, see [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate).**


### Webpack

[Webpack](https://webpack.github.io/) is a module bundler. This means webpack takes modules with dependencies and emits static assets representing those modules.

* It often replaces grunt or gulp because it can build and bundle CSS, preprocessed CSS, compile-to-JS languages and images, among other things.
* You can (and should) use npm modules and your own modules on the client   
* You can use loaders (babel-loader to transpile jsx and ES6 to ES5, css loaders to allow you to import css files...)

**The best way to get started is this great repo of Pete Hunt [Webpack how to](https://github.com/petehunt/webpack-howto).**

---

## 2) Consider a Routing Solution

### React-Router

I like [React-Router](https://github.com/reactjs/react-router). It keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.

**The best way to get started is [here](https://github.com/reactjs/react-router-tutorial).**

## 3) Consider a State manager

There are many [Flux](https://facebook.github.io/flux/) implementations - an application architecture that Facebook uses for building client-side web applications -, but the one I like most is Redux.

### Redux

[Redux](http://redux.js.org/) is a predictable state container for JavaScript apps.

* The state of your app is stored in an object tree inside a single **store**.  
* The only way to change the state tree is to emit an **action**, an object describing what happened.  
* To specify how the actions transform the state tree, you write pure **reducers**.

http://survivejs.com/webpack_react/introduction/
https://github.com/survivejs/redux-demo

---
