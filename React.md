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

### Children

- React renders child elements using props.children. In the previous section, we rendered a text element as a child of the h1 element, and thus props.children was set to Baked Salmon. We could render other React elements as children too, creating a tree of elements. This is why we use the term element tree. The tree has one root element from which many branches grow.

Let’s consider the unordered list that contains ingredients:

```js
<ul>
  <li>2 lb salmon</li>
  <li>5 sprigs fresh rosemary</li>
  <li>2 tablespoons olive oil</li>
  <li>2 small lemons</li>
  <li>1 teaspoon kosher salt</li>
  <li>4 cloves of chopped garlic</li>
</ul>
```

In this sample, the unordered list is the root element, and it has six children. We can represent this ul and its children with React.createElement:

```js
React.createElement(
  "ul",
  null,
  React.createElement("li", null, "2 lb salmon"),
  React.createElement("li", null, "5 sprigs fresh rosemary"),
  React.createElement("li", null, "2 tablespoons olive oil"),
  React.createElement("li", null, "2 small lemons"),
  React.createElement("li", null, "1 teaspoon kosher salt"),
  React.createElement("li", null, "4 cloves of chopped garlic")
);
```

Every additional argument sent to the createElement function is another child element. React creates an array of these child elements and sets the value of props.children to that array.

If we were to inspect the resulting React element, we would see each list item represented by a React element and added to an array called props.children. If you console log this element:

```js
const list = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "2 lb salmon"),
  React.createElement("li", null, "5 sprigs fresh rosemary"),
  React.createElement("li", null, "2 tablespoons olive oil"),
  React.createElement("li", null, "2 small lemons"),
  React.createElement("li", null, "1 teaspoon kosher salt"),
  React.createElement("li", null, "4 cloves of chopped garlic")
);

console.log(list);
```

The result will look like this:

```js
{
    "type": "ul",
    "props": {
    "children": [
    { "type": "li", "props": { "children": "2 lb salmon" } … },
    { "type": "li", "props": { "children": "5 sprigs fresh rosemary"} … },
    { "type": "li", "props": { "children": "2 tablespoons olive oil" } … },
    { "type": "li", "props": { "children": "2 small lemons"} … },
    { "type": "li", "props": { "children": "1 teaspoon kosher salt"} … },
    { "type": "li", "props": { "children": "4 cloves of chopped garlic"} … }
    ]
    ...
    }
}
```

### Constructing elements with data

The major advantage of using React is its ability to separate data from UI elements. Since React is just JavaScript, we can add JavaScript logic to help us build the React component tree. For example, ingredients can be stored in an array, and we can map that array to the React elements.

Let’s go back and think about the unordered list for a moment:

```js
React.createElement(
  "ul",
  null,
  React.createElement("li", null, "2 lb salmon"),
  React.createElement("li", null, "5 sprigs fresh rosemary"),
  React.createElement("li", null, "2 tablespoons olive oil"),
  React.createElement("li", null, "2 small lemons"),
  React.createElement("li", null, "1 teaspoon kosher salt"),
  React.createElement("li", null, "4 cloves of chopped garlic")
);
```

- The data used in this list of ingredients can be easily represented using a JavaScript array:

```js
const items = [
  "2 lb salmon",
  "5 sprigs fresh rosemary",
  "2 tablespoons olive oil",
  "2 small lemons",
  "1 teaspoon kosher salt",
  "4 cloves of chopped garlic"
];
```

- We want to use this data to generate the correct number of list items without having to hard code each one. We can map over the array and create list items for as many ingredients as there are:

```js
React.createElement(
  "ul",
  { className: "ingredients" },
  items.map(ingredient => React.createElement("li", null, ingredient))
);
```

- When we build a list of child elements by iterating through an array, React likes each of those elements to have a key property. The key property is used by React to help it update the DOM efficiently. You can make this warning go away by adding a unique key property to each of the list item elements. We can use the array index for each ingredient as that unique value:

```js
React.createElement(
  "ul",
  { className: "ingredients" },
  items.map((ingredient, i) =>
    React.createElement("li", { key: i }, ingredient)
  )
);
```

## React Components

- We’ll create a component by writing a function. That function will return a reusable part of a user interface. Let’s create a function that returns an unordered list of ingredients. This time, we’ll make dessert with a function called IngredientsList:

```js
function IngredientsList() {
  return React.createElement(
    "ul",
    { className: "ingredients" },
    React.createElement("li", null, "1 cup unsalted butter"),
    React.createElement("li", null, "1 cup crunchy peanut butter"),
    React.createElement("li", null, "1 cup brown sugar"),
    React.createElement("li", null, "1 cup white sugar"),
    React.createElement("li", null, "2 eggs"),
    React.createElement("li", null, "2.5 cups all purpose flour"),
    React.createElement("li", null, "1 teaspoon baking powder"),
    React.createElement("li", null, "0.5 teaspoon salt")
  );
}

ReactDOM.render(
  React.createElement(IngredientsList, null, null),
  document.getElementById("root")
);
```




