+++
Categories = ["React"]
Tags = ["react", "javascript", "frontend"]
date = "2016-02-14T18:51:12Z"
summary = "There are many tutorials out there. This one tries to give you the essencials for the basic understanding of React and best practices."
title = "Understanding React.js"

+++

## General Concepts

- It's just the UI. All the other 'tools' are provided by you.
- React implements **one-way data flow** which reduces boilerplate and is easier to reason about than traditional data binding.
- This means that instead of the traditional MVC you have **separation of components** - even easier to reason about, since you are going to build your project structure thinking on the UI, functionality and **re-usability**.
- It is extremely **modular** and enforces good and updated programming practices.
- **Virtual DOM**: React abstracts away the DOM from you, giving better performance. It allows server side rendering and universal apps - the same code runs on the client and on the server - and it can power native apps using React Native. 

## React Components and Lifecycle

React components are very simple. You can think of them as simple functions that take in `props` and `state` (discussed later) and render HTML. They should follow the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents. This is composition.

There are two variants:

**React.createClass**: We pass some methods in a JavaScript object to React.createClass() to create a new React component. This methods will have autobinding of `this` when used in `jsx` and you can use Mixins. You CAN use ES6 syntax.

```js
const MyComponent = React.createClass({
  handleBtnClick(){
    ...
  }, //<--- comma! Its an object

  render() {
    return (
      <button onClick={this.handleBtnClick}>Click Me</button>
    );
  }
});
```
**ES6 Class**: Real JS classes. No autobinding.

```js
class MyComponent extends React.Component{

  handleBtnClick(){
    ...
  }

  render(){
    return (
      <button onClick={this.handleBtnClick.bind(this)}>Click</button>
    );
  }
}
```

You can now use this component:

- As standalone (although this is usually done with React Router)
```js
ReactDOM.render(<MyComponent />)
```
- Inside another Component's `render()` method:
```js
const MyOtherComponent = React.createClass({
  render() {
    return(
      <MyComponent />
    );
  }
});
```

### Lifecycle of a component

React provides custom methods and lifecycle methods / hooks you can use. It provides *will* methods, which are called right before something happens, and *did* methods which are called right after something happens.

Components have three main parts of their lifecycle:

- Mounting: A component is being inserted into the DOM.
- Updating: A component is being re-rendered to determine if the DOM should be updated.
- Unmounting: A component is being removed from the DOM.


```js
import React from 'React';

const MyReactComponent = React.createClass({

  propTypes: {
    // The propTypes object allows you to validate props being passed to your components.
  },

  // An array of objects each of which can augment the lifecycle methods
  mixins: [],

  // Functions that can be invoked on the component without creating instances
  statics: {
    aStaticFunction() {}
  },

  // The object returned by this method sets the initial value of this.state
  getInitialState() {
    return {};
  },

  // The object returned by this method sets the initial value of this.props
  // If a complex object is returned, it is shared among all component instances    
  getDefaultProps() {
    return {};
  },

  //--------- Lifecycle Methods ------------//

  // Invoked once BEFORE first render
  componentWillMount() {
    // Calling setState here does not cause a re-render
  },

  
  // The data returned from render is neither a string nor a DOM node.
  // It's a lightweight description of what the DOM should look like.
  // Inspects this.state and this.props and create the markup.
  // When your data changes, the render method is called again.
  // React diff the return value from the previous call to render with
  // the new one, and generate a minimal set of changes to be applied to the DOM.
  render() {
    // Returns the jsx markup (React has no templates) for a component
    // Should never update this.state or this.props
    return (<div></div>);
  },

  // Invoked once, only on the client (not on the server), immediately AFTER the initial rendering occurs.
  componentDidMount() { 
    // You can access any refs to your children
    // (e.g., to access the underlying DOM representation - ReactDOM.findDOMNode). 
    // The componentDidMount() method of child components is invoked before that of parent components.
    // If you want to integrate with other JavaScript frameworks,
    // set timers using setTimeout or setInterval, 
    // or send AJAX requests, perform those operations in this method.
  },

  // Invoked whenever there is a prop change
  // Called BEFORE a second render
  componentWillReceiveProps(nextProps) {
    // Not called for the initial render
    // Previous props can be accessed by this.props
    // Calling setState here does not trigger an an additional re-render
  },

  // Determines if the render method should run in the subsequent step
  // Called BEFORE a second render
  // Not called for the initial render
  shouldComponentUpdate(nextProps, nextState) {
    // If you want the render method to execute in the next step
    // return true, else return false
      return true;
  },

  // Called IMMEDIATELY BEFORE a second render
  componentWillUpdate(nextProps, nextState) {
    // You cannot use this.setState() in this method
  },

  // Called IMMEDIATELY AFTER a second render
  componentDidUpdate(prevProps, prevState) {
  },

  // Called IMMEDIATELY before a component is unmounted from the DOM
  componentWillUnmount() {
  }
});

export default MyReactComponent;

```
Lifecycle diagram - [See a bigger image](../img/react-lifecycle.jpg)
![React Lifecycle](../img/react-lifecycle.jpg)

## JSX Syntax

[Where are my templates? What's that crazy HTML doing in my JavaScript? JSX looks weird! Hurry! Kill it with fire!](http://firstdoit.com/react-1/)

Give it [five minutes](https://signalvnoise.com/posts/3124-give-it-five-minutes).

JSX lets you create JavaScript objects using HTML syntax. Usually this is the return value of the `render()` method. JSX is completely optional; you don't have to use JSX with React. You can create React elements in plain JavaScript using React.createElement, which takes a tag name or component, a properties object, and variable number of optional child arguments.
```js
var child1 = React.createElement('li', null, 'First Text Content');
var child2 = React.createElement('li', null, 'Second Text Content');
var root = React.createElement('ul', { className: 'my-list' }, child1, child2);
React.render(root, document.getElementById('example'));
```

To generate a link in React using pure JavaScript you'd write:
```js
// this is a comment
React.createElement('a', {href: 'https://facebook.github.io/react/'}, 'Hello!')
```

With JSX this becomes:
```js
{/* this is a comment */}
<a href="https://facebook.github.io/react/">Hello!</a>
```

All attributes are camelCased and the attributes `class` and `for` are `className` and `htmlFor`, respectively, to match the DOM API specification.

You can pass custom attributes - this is what is called `props`.
The tags can be self closed, except if they have content.

```html
<MyComponent myProp={this.props.myProp} />
```

You can pass your event handler as a camelCased prop similar to how you'd do it in normal HTML (event delegation).

```html
<button onClick={this.handleBtnClick}>Click Me</button>
```
You can use javascript and variables inside jsx using `{ }`

```html
<span>
  <p>{iAmIVariable}</p>
  <div>
    { IExist ? <p>{IExist}</p> : null }
  </div>
</span>
```

Limitations:

* React components can only render a single root node. If you want to return multiple nodes they must be wrapped in a single root (this is true for jsx and plain javascript).
* You can't use if statements inside jsx, you have to use ternary expressions.

## Components Composition

React is all about building reusable components. In fact, the only thing you do is build components. Since they're so encapsulated, components make code reuse, testing, and separation of concerns easy.

The data always flows from top to bottom - **unidirectional data-flow** - as `props`.

#### Owner and parent-children relation
In React, an owner is the component that sets the `props` of other components. More formally, if a component `X` is created in component `Y`'s `render()` method, it is said that `X` is owned by `Y`.

```js
const IAmTheOwner = React.createClass({
  getInitialState() {
    return {
      data: 'just passing data down the tree'
    }
  },

  render() {
    return(
      <IAmOwned andIHaveProps={this.state.data} />
    );
  }
});

const IAmOwned = React.createClass({
  render() {
    return(
      <p>{this.props.andIHaveProps}</p>
    );
  }

  // result: <p>just passing data down the tree</p>

});
```

When you create a React component instance, you can include additional React components or JavaScript expressions between the opening and closing. Parents can read its children by accessing the special `this.props.children` prop.

```js
const ParentComponent = React.createClass({
  render(
    <div>
      { this.props.children }
    </div>
  );
});

// Usage:
<ParentComponent>
  <ChildrenComponent />
</ParentComponent>
```

## State and Props

The main responsibility of a Component is to translate raw data into rich HTML. With that in mind, the `props` and the `state` together constitute the _raw data_ that the HTML output derives from.

**State** – created within the component. Can change. The _state_ starts with a default value when a Component mounts and then can change in time (mostly generated from user events or ajax calls). It's a serializable representation of one point in time—a snapshot. A Component manages its own _state_ internally, and can access it as `this.state`. You could say the state is private.

**Props** – short for "properties". They're passed as attributes in JSX syntax from the 'parent/owner component'. You should think of these as immutable within the component, that is, never write to `this.props`. They just change according to the state change.

### Should this Component have _state_? 
(*adapted from [here](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md) and [here](https://facebook.github.io/react/docs/thinking-in-react.html)*)

_state_ is optional. Since _state_ increases complexity and reduces predictability, a Component without _state_ is preferable. Even though you clearly can't do without state in an interactive app, you should avoid having too many _Stateful Components._

#### Component types

* **Stateless Component** — Only _props_, no _state._ There's not much going on besides the `render()` function and all their logic revolves around the _props_ they receive. This makes them very easy to follow (and test for that matter). We sometimes call these *dumb* or *presentational* components.
* **Stateful Component** — Both _props_ and _state._ We also call these _state managers_ or *Containers Components*. They are in charge of client-server communication (XHR, web sockets, etc.), processing data and responding to user events. These sort of logistics should be encapsulated in a moderate number of _Stateful Components_ (usually in a router component), while all visualization and formatting logic should move downstream into as many _Stateless Components_ as possible.

#### So, for each piece of state in your application:

- Identify every component that renders something based on that state.
- Find a common owner component (a single component above all the components that need the state in the hierarchy).
- Either the common owner or another component higher up in the hierarchy should own the state.
- If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

More about this on the Redux section: [redux.md](redux/#react-bindings-for-redux)

## Flow Diagram

**Use props (this.props) to access parameters passed from the parent. Use state (this.state) to manage dynamic data.**

Follow the colors to understand the state and props flow between components.
[See a bigger version](../img/react-101.jpg)

![React 101](../img/react-101.jpg)