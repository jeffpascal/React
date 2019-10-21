# Gatsby

## Project Description

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## Commands:

1. gatsby new target name
2. gatsby build
3. gatsby develop


## HTML in our JavaScript?

Consider the original contents of the src/pages/index.js file:

```js
import React from "react"

export default () => <div>Hello world!</div>
```

In pure JavaScript, it looks more like this:

```js
import React from "react"
export default () => React.createElement("div", null, "Hello world!")
```

## Building with components

The homepage you were just making edits to was created by defining a page component. What exactly is a “component”?

Broadly defined, a component is a building block for your site; It is a self-contained piece of code that describes a section of UI (user interface).

Gatsby is built on React. When we talk about using and defining components, we are really talking about React components — self-contained pieces of code (usually written with JSX) that can accept input and return React elements describing a section of UI.

One of the big mental shifts you make when starting to build with components (if you are already a developer) is that now your CSS, HTML, and JavaScript are tightly coupled and often living even within the same file.

While a seemingly simple change, this has profound implications for how you think about building websites.

Take the example of creating a custom button. In the past, you would create a CSS class (perhaps .primary-button) with your custom styles and then use it whenever you want to apply those styles. For example:

```<button class="primary-button">Click me</button>```

In the world of components, you instead create a PrimaryButton component with your button styles and use it throughout your site like:

```<PrimaryButton>Click me</PrimaryButton>```

Components become the base building blocks of your site. Instead of being limited to the building blocks the browser provides, e.g. <button />, you can easily create new building blocks that elegantly meet the needs of your projects.

## Using sub-components

Let’s say the homepage and the about page both got quite large and you were rewriting a lot of things. You can use sub-components to break the UI into reusable pieces. Both of your pages have <h1> headers — create a component that will describe a Header.

1. Create a new directory at src/components and a file within that directory called header.js.

2. Add the following code to the new src/components/header.js file.

```js
import React from "react"

export default () => <h1>This is a header.</h1>
```

3. Modify the about.js file to import the Header component. Replace the h1 markup with <Header />:

```jsx
import React from "react"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Header />
    <p>Such wow. Very React.</p>
  </div>
)
```

In the browser, the “About Gatsby” header text should now be replaced with “This is a header.” But you don’t want the “About” page to say “This is a header.” You want it to say, “About Gatsby”.

4. Head back to src/components/header.js and make the following change:

```js
import React from "react"

export default props => <h1>{props.headerText}</h1>
```

5. Head back to src/pages/about.js and make the following change:

```js
import React from "react"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="About Gatsby" />
    <p>Such wow. Very React.</p>
  </div>
)
```

## What are “props”?

Earlier you defined React components as reusable pieces of code describing a UI. To make these reusable pieces dynamic you need to be able to supply them with different data. You do that with input called “props”. Props are (appropriately enough) properties supplied to React components.

In about.js you passed a headerText prop with the value of "About Gatsby" to the imported Header sub-component:

```
<Header headerText="About Gatsby" />
```

Over in header.js, the header component expects to receive the headerText prop (because you’ve written it to expect that). So you can access it like so:

```js
<h1>{props.headerText}</h1>
```

``` In JSX, you can embed any JavaScript expression by wrapping it with {}. This is how you can access the headerText property (or “prop!”) from the “props” object.```

If you had passed another prop to your <Header /> component, like so…

```js
<Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
```

6. To emphasize how this makes your components reusable, add an extra <Header /> component to the about page, add the following code to the src/pages/about.js file, and save.

```js
import React from "react"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="About Gatsby" />
    <Header headerText="It's pretty cool" />
    <p>Such wow. Very React.</p>
  </div>
)
```

## Using layout components

Layout components are for sections of a site that you want to share across multiple pages. For example, Gatsby sites will commonly have a layout component with a shared header and footer. Other common things to add to layouts include a sidebar and/or a navigation menu.

## Linking between pages

You’ll often want to link between pages — Let’s look at routing in a Gatsby site.

1. Open the index page component (src/pages/index.js), import the <Link /> component from Gatsby, add a <Link /> component above the header, and give it a **to** property with the value of "/something/" for the pathname

```js
import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
```

## Deploying a Gatsby site

Gatsby.js is a modern site generator, which means there are no servers to setup or complicated databases to deploy. Instead, the Gatsby build command produces a directory of static HTML and JavaScript files which you can deploy to a static site hosting service.

Try using Surge for deploying your first Gatsby website. Surge is one of many “static site hosts” which make it possible to deploy Gatsby sites.