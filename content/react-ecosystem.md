+++
Categories = ["React"]
Tags = ["reactjs", "javascript", "frontend"]
date = "2016-02-15T15:25:31Z"
summary = "Things move fast. It's web development! Here are some useful links and a summary of the so called React Ecosystem."
title = "React Ecosystem - A summary"

+++

Note that to use React.js you don't need to use all the ecosystem, which many times, it's what makes difficult to begin. But if you want to build a real app, you should:

## 1) Consider some development tools:
  - Transpile jsx (and ES6) to ES5 - Babel
  - Bundle all your components and modules to be served on the client - Browserify or Webpack (I choose Webpack).
  - Have a development server with live-reload and hot-reload - Webpack can do this, and babel-transform can maintain the state of your app even if your code changes.
  - Have a linting tool that supports ES6 and JSX.
  - The browser extension from Facebook [React Dev Tools](https://github.com/facebook/react-devtools) is great.

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

**The best way to get started is this great repo of Pete Hunt [Webpack how to](https://github.com/petehunt/webpack-howto) or [this new repo](https://github.com/AriaFallah/WebpackTutorial).**


### ESlint

[ESlint](http://eslint.org/) is a pluggable linting utility for JavaScript and JSX.

You can use some common configurations out of the box with [eslint-config-standard-react](https://github.com/feross/eslint-config-standard-react) or [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) or do your own configuration.


## 2) Consider a Routing Solution

### React-Router

I like [React-Router](https://github.com/reactjs/react-router). It keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.

**The best way to get started is [here](https://github.com/reactjs/react-router-tutorial).**

## 3) Consider a State manager

There are many [Flux](https://facebook.github.io/flux/) implementations - an application architecture that Facebook uses for building client-side web applications -, but the one I like most is Redux.

Some people like to use immutable collections for JavaScript like [immutable.js](https://facebook.github.io/immutable-js/) to maintain the state immutable, but is not a requirement (as long as you don't mutate the state).

### Redux

[Redux](http://redux.js.org/) is a predictable state container for JavaScript apps.

* The state of your app is stored in an object tree inside a single **store**.  
* The only way to change the state tree is to emit an **action**, an object describing what happened.  
* To specify how the actions transform the state tree, you write pure **reducers**.

**The best way to start is watching the [Dan Abramov's Redux course videos](https://egghead.io/series/getting-started-with-redux) alongside the official documentation.** You have the notes (and partial transcription) of the videos [here](the https://github.com/tayiorbeii/egghead.io_redux_course_notes).

#### react-router-redux
Keep react-router and redux in sync - [react-router-redux](https://github.com/reactjs/react-router-redux)

#### Redux DevTools
I also suggest you to use this great and fun [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension) browser extension. You development workflow will never be the same :)

## 4) Choose your client-server interaction

In today's world there are two dominant architectural styles for client-server interaction: REST and ad hoc endpoints, don't forgetting [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

But if you feel adventurous you can try [GraphQL](http://graphql.org/) - a data query language and runtime -, together with [Relay](https://facebook.github.io/relay/) - a JS framework for building data-driven React applications, both from Facebook.
[This tutorial](https://learngraphql.com/) and [this post](https://medium.com/@clayallsopp/relay-101-building-a-hacker-news-client-bb8b2bdc76e6#.n1zz7ywyb) should help you get started. 

## 5) Consider Server side rendering

*(aka [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.oz38cs3kj) (before aka Isomorphic) apps)*

[Universal JavaScript](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/) means the same code runs in different environments, in this case, on the client and on the server (thank you node.js). This can help SEO and initial loading time of your SPA and can be easily achieved with [React Router SSR](https://github.com/reactjs/react-router/blob/latest/docs/guides/ServerRendering.md).

## 6) Consider some tests

There are some utilities (besides all major test runners and assertion libraries out there):

- [ReactTestUtils](https://facebook.github.io/react/docs/test-utils.html) - an add-on of React.
- [Enzyme](https://github.com/airbnb/enzyme) - a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output - from Airbnb.
- [mjackson/expect](https://github.com/mjackson/expect) and [expect-jsx](https://github.com/algolia/expect-jsx) that lets you write better assertions.
- [deep-freeze](https://github.com/substack/deep-freeze) to recursively Object.freeze() on objects and functions and test immutability.


## 7) Don't re-invent the wheel

- [A collection of awesome things regarding React ecosystem](https://github.com/enaqx/awesome-react)

Here are some of the great examples, tutorials and starter kits:

- [React Redux Universal Hot Example](https://github.com/erikras/react-redux-universal-hot-example)
- [Isomorphic Redux demo, with routing and async actions](https://github.com/bananaoomarang/isomorphic-redux)
- [survive.js](http://survivejs.com/webpack_react/introduction/) - Redux version [here](https://github.com/survivejs/redux-demo)
- Find your Perfect Starter Kit [here](http://andrewhfarmer.com/starter-project/)

If you are looking for some external components and libraries to use on your project:

- [https://react.rocks/](https://react.rocks/)
- Follow [ReactJSnpm](https://twitter.com/ReactJSnpm) that publishes tweets when #ReactJS related libraries are updated on NPM

## 8) Breathe. It's web development

Yes, It's web development. Things move fast. You don't need to master everything and there will always be that brand new technology that the cool kids will gonna want to use.
Use what you need, and what makes sense to your project. If you want, start with the basics, and as your project grows, if you feel that something is start missing, opt-in for that tools. Refactoring is easy as long as you do it in a regular basis and structure your code well.

Meanwhile, follow some guys on [twitter](https://medium.com/@dan_abramov/my-react-list-862227952a8c#.3jb93sb9d), they will keep you cover.

Happy coding.

