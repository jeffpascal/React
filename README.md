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

### Function Declarations

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

### Function Expressions

Another option is to use a function expression. This just involves creating the function as a variable:

```js
const logCompliment = function() {
  console.log("You're doing great!");
};

logCompliment();
```

- One thing to be aware of when making a decision between a function declaration and a function expression is that function declarations are hoisted and function expressions are not. In other words, you can invoke a function before you write a function declaration. You can not invoke a function created by a function expression. This will cause an error. For example:

```js
// Invoking the function before it's declared
hey();
// Function Declaration
function hey() {
  alert("hey!");
}
```

- This works. You’ll see the alert appear in the browser. It works because the function is hoisted, or moved up, to the top of the file’s scope. Trying the same exercise with a function expression will cause an error:

```js
// Invoking the function before it's declared
hey();
// Function Expression
const hey = function() {
  alert("hey!");
};
```

Trying this will cause an error:

```TypeError: hey is not a function```

### PASSING ARGUMENTS

The logCompliment function currently takes in no arguments or parameters. If we want to provide dynamic variables to the function, we can pass named parameters to a function simply by adding them to the parentheses. Let’s start by adding a firstName variable:

```js
const logCompliment = function(firstName) {
  console.log(`You're doing great, ${firstName}`);
};

logCompliment("Molly");
```

Now when we call the logCompliment function, the firstName value sent will be added to the console message.

We could add to this a bit by creating another argument called message. Now we won’t hard code the message. We’ll pass in a dynamic value as a parameter:

```js
const logCompliment = function(firstName, message) {
  console.log(`${firstName}: ${message}`);
};

logCompliment("Molly", "You're so cool");
```

### FUNCTION RETURNS

```js
const createCompliment = function(firstName, message) {
  return `${firstName}: ${message}`;
};

createCompliment("Molly", "You're so cool");
```

### Default Parameters

For example, we can set up default strings for the parameters name and activity:

```js
function logActivity(name = "Shane McConkey", activity = "skiing") {
  console.log(`${name} loves ${activity}`);
}
```

If no arguments are provided to the logActivity function, it will run correctly using the default values. Default arguments can be any type, not just strings:

```js
const defaultPerson = {
  name: {
    first: "Shane",
    last: "McConkey"
  },
  favActivity: "skiing"
};

function logActivity(person = defaultPerson) {
  console.log(`${person.name.first} loves ${person.favActivity}`);
}
```

## Arrow Functions

Arrow functions are a useful new feature of ES6. With arrow functions, you can create functions without using the function keyword. You also often do not have to use the return keyword. Let’s consider a function that takes in a firstName and returns a string, turning the person into a Lord. Anyone can be a Lord.

```js
const lordify = function(firstName) {
  return `${firstName} of Canterbury`;
};

console.log(lordify("Dale")); // Dale of Canterbury
console.log(lordify("Gail")); // Gail of Canterbury
```

With an arrow function, we can simplify the syntax tremendously:

```js
const lordify = firstName => `${firstName} of Canterbury`;
```

- With the arrow, we now have an entire function declaration on one line. The function keyword is removed. We also remove return because the arrow points to what should be returned. Another benefit is that if the function only takes one argument, we can remove the parentheses around the arguments.

### More than one argument should be surrounded by parentheses:

```js
// Typical function
const lordify = function(firstName, land) {
  return `${firstName} of ${land}`;
};
// Arrow Function
const lordify = (firstName, land) => `${firstName} of ${land}`;

console.log(lordify("Don", "Piscataway")); // Don of Piscataway
console.log(lordify("Todd", "Schenectady")); // Todd of Schenectady
```

We can keep this as a one-line function because there is only one statement that needs to be returned. If there are multiple lines, you’ll use curly braces:

```js
const lordify = (firstName, land) => {
  if (!firstName) {
    throw new Error("A firstName is required to lordify");
  }

  if (!land) {
    throw new Error("A lord must have a land");
  }

  return `${firstName} of ${land}`;
};

console.log(lordify("Kelly", "Sonoma")); // Kelly of Sonoma
console.log(lordify("Dave")); // ! JAVASCRIPT ERROR
```

## Returning Objects

What happens if you want to return an object? Consider a function called person that builds an object based on parameters passed in for firstName and lastName.

```js
const person = (firstName, lastName) =>
    {
        first: firstName,
        last: lastName
    }

console.log(person("Brad", "Janson"));
```

As soon as we run this, you’ll see the error: Uncaught SyntaxError: Unexpected token :. To fix this, just wrap the object you’re returning with parentheses:

```js
const person = (firstName, lastName) => ({
  first: firstName,
  last: lastName
});

console.log(person("Flad", "Hanson"));
```