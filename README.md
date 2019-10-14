# React
 Learning REACT


## React Developer Tools

- Most JavaScript projects that you encounter today will contain an assorted collection of files plus a package.json file. This file describes the project and all of its dependencies. If you run npm install in the folder that contains the package.json file, npm will install all of the packages listed in the project.

- If you are starting your own project from scratch and want to include dependencies, simply run the command:
  
npm init -y

- This will initialize the project and create a package.json file. From there you can install your own dependencies with npm. To install a package with npm, you’ll run:

npm install package-name

- To remove a package with npm, you’ll run:

npm remove package-name

### aleternative: yarn

- This is the process of transforming new syntax that the browser doesn’t recognize into older syntax that the browser understands. The kangax compatibility table is a great place to stay informed about the latest JavaScript features and their varying degrees of support by browsers.


## ES6

### The const Keyword
- A constant is a variable that cannot be overwritten. Once declared, you cannot changes it’s value. A lot of the variables that we create in JavaScript should not be overwritten, so we’ll be using const a lot. Like other languages had done before it, JavaScript introduced constants with ES6.

- We cannot reset the value of a constant variable, and it will generate a console error if we try to overwrite the value:

### The let Keyword

JavaScript now has lexical variable scope. In JavaScript, we create code blocks with curly braces ({}). In functions, these curly braces block off the scope of any variable declared with var. On the other hand, consider if/else statements. If you’re coming from other languages, you might assume that these blocks would also block variable scope. This was not the case until let came along.

If a variable is created inside of an if/else block, that variable is not scoped to the block:
```js
var topic = "JavaScript";

if (topic) {
  var topic = "React";
  console.log("block", topic); // block React
}

console.log("global", topic); // global React
```

The topic variable inside the if block resets the value of topic outside of the block.

With the let keyword, we can scope a variable to any code block. Using let protects the value of the global variable:

```js
var topic = "JavaScript";

if (topic) {
  let topic = "React";
  console.log("block", topic); // React
}

console.log("global", topic); // JavaScript
```

The value of topic is not reset outside of the block.

### Template Strings

Template strings provide us with an alternative to string concatenation. They also allow us to insert variables into a string. You’ll hear these referred to as template strings, template literals, or string templates interchangeably.

- Traditional string concatenation uses plus signs to compose a string using variable values and strings:

```js
console.log(lastName + ", " + firstName + " " + middleName);
```

- With a template, we can create one string and insert the variable values by surrounding them with ${ }:

```js
console.log(`${lastName}, ${firstName} ${middleName}`);
```

Any JavaScript that returns a value can be added to a template string between the ${ } in a template string.

Template strings honor whitespace, making it easier to draft up email templates, code examples, or anything else that contains whitespace. Now you can have a string that spans multiple lines without breaking your code.

```js
const email = `
Hello ${firstName},

Thanks for ordering ${qty} tickets to ${event}.

Order Details
${firstName} ${middleName} ${lastName}
     ${qty} x $${price} = $${qty\*price} to \${event}

You can pick your tickets up at Will Call 30 minutes before
the show.

Thanks,

\${ticketAgent}
```

Previously, using an html string directly in our JavaScript code was not so easy to concatenate and insert values. Now that the whitespace is recognized as text, you can insert formatted html that is easy to read and understand:

```js
document.body.innerHTML = `
<section>
  <header>
      <h1>The React Blog</h1>
  </header>
  <article>
      <h2>${article.title}</h2>
      ${article.body}
  </article>
  <footer>
      <p>copyright ${new Date().getYear()} | The React Blog</p>
  </footer>
</section>
`;
```
## Creating Functions

Any time you want to perform some sort of repeatable task with JavaScript, you can use a function. Let’s take a look at some of the different syntax options that can be used to create a function and the anatomy of those functions.

## Function Declarations

A function declaration or function definition below starts with the function keyword which is followed by the name of the function logCompliment. The JavaScript statements that are part of the function are defined between the curly braces.

```js
function logCompliment() {
  console.log("You're doing great!");
}
```

Once you have declared the function, you'll invoke or call it to see it execute:

```js
function logCompliment() {
  console.log("You're doing great!");
}

logCompliment();
```

Once invoked, you’ll see the compliment logged to the console.