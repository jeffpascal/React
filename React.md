## Page Setup

In order to work with React in the browser, we need to include two libraries: React and ReactDOM. React is the library for creating views. ReactDOM is the library used to actually render the UI in the browser. Both libraries are available as scripts from the unpkg CDN. Let’s set up an HTML document:

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>React Samples</title>
  </head>
  <body>
    <!-- Target container -->
    <div id="root"></div>

    <!-- React library & ReactDOM (Development Version)-->
    <script src="https://unpkg.com/react@16.8.6/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js"></script>

    <script>
      // Pure React and JavaScript code
    </script>
  </body>
</html>
```

- You can choose to use the minified production version using react.production.min.js and react-dom.production.min.js which will strip away those warnings.

- In HTML, elements relate to each other in a hierarchy that resembles a family tree. We could say that the root element (in this case a section) has three children: a heading, an unordered list of ingredients, and a section for the instructions.
  
- The DOM API is a collection of objects that JavaScript can use to interact with the browser to modify the DOM. If you have used document.createElement or document.appendChild, you have worked with the DOM API.

- React is a library that is designed to update the browser DOM for us. We no longer have to be concerned with the complexities associated with building high-performing SPAs because React can do that for us. With React, we do not interact with the DOM API directly. Instead, we provide instructions for what we want React to build and React will take care of rendering and reconciling the elements that we have instructed it to create.

- The properties are similarly applied to the new DOM element: the properties are added to the tag as attributes, and the child text is added as text within the element. A React element is just a JavaScript literal that tells React how to construct the DOM element.

If you were to log this element, it would look like this:

```js
{
  $$typeof: Symbol(React.element),
  "type": "h1",
  "key": null,
  "ref": null,
  "props": {id: "recipe-0", children: "Baked Salmon"},
  "_owner": null,
  "_store": {}
}
```

- This is the structure of a React element. There are fields that are used by React: _owner, _store, $$typeof

- The type property of the React element tells React what type of HTML or SVG element to create. The props property represents the data and child elements required to construct a DOM element. The children property is for displaying other nested elements as text.

## React DOM

Once we have created a React element, we’ll want to see it in the browser. ReactDOM contains the tools necessary to render React elements in the browser. ReactDOM is where we will find the render method.

We can render a React element, including its children, to the DOM with ReactDOM.render. The element that we wish to render is passed as the first argument and the second argument is the target node, where we should render the element:

```js
const dish = React.createElement("h1", null, "Baked Salmon");

ReactDOM.render(dish, document.getElementById("root"));
```

- Anything related to rendering elements to the DOM is found in the ReactDOM package. In versions of React earlier than React 16, you could only render one element to the DOM. Today, it’s possible to render arrays as well. When the ability to do this was announced at ReactConf 2017, everyone clapped and screamed. It was a big deal. This is what that looks like:
  
```js
const dish = React.createElement("h1", null, "Baked Salmon");
const dessert = React.createElement("h2", null, "Coconut Cream Pie");

ReactDOM.render([dish, dessert], document.getElementById("root"));
```