- [React](#react)
    - [React Developer Tools](#react-developer-tools)
      - [aleternative: yarn](#aleternative-yarn)
    - [ES6](#es6)
      - [The const Keyword](#the-const-keyword)
      - [The let Keyword](#the-let-keyword)
      - [Template Strings](#template-strings)
    - [Creating Functions](#creating-functions)
      - [Function Declarations](#function-declarations)
      - [Function Expressions](#function-expressions)
    - [Compiling JavaScript](#compiling-javascript)
  - [Objects and Arrays](#objects-and-arrays)
    - [Destructuring Objects](#destructuring-objects)
  - [Asynchronous JavaScript](#asynchronous-javascript)
    - [Simple Promises with Fetch](#simple-promises-with-fetch)


# React

### React Developer Tools

- Most JavaScript projects that you encounter today will contain an assorted collection of files plus a package.json file. This file describes the project and all of its dependencies. If you run npm install in the folder that contains the package.json file, npm will install all of the packages listed in the project.

- If you are starting your own project from scratch and want to include dependencies, simply run the command:
  
npm init -y

- This will initialize the project and create a package.json file. From there you can install your own dependencies with npm. To install a package with npm, you’ll run:

npm install package-name

- To remove a package with npm, you’ll run:

npm remove package-name

#### aleternative: yarn

- This is the process of transforming new syntax that the browser doesn’t recognize into older syntax that the browser understands. The kangax compatibility table is a great place to stay informed about the latest JavaScript features and their varying degrees of support by browsers.


### ES6

#### The const Keyword
- A constant is a variable that cannot be overwritten. Once declared, you cannot changes it’s value. A lot of the variables that we create in JavaScript should not be overwritten, so we’ll be using const a lot. Like other languages had done before it, JavaScript introduced constants with ES6.

- We cannot reset the value of a constant variable, and it will generate a console error if we try to overwrite the value:

#### The let Keyword

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

#### Template Strings

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

### Creating Functions

Any time you want to perform some sort of repeatable task with JavaScript, you can use a function. Let’s take a look at some of the different syntax options that can be used to create a function and the anatomy of those functions.

#### Function Declarations

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

#### Function Expressions

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

#### Passing Arguments

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

#### FUNCTION RETURNS

```js
const createCompliment = function(firstName, message) {
  return `${firstName}: ${message}`;
};

createCompliment("Molly", "You're so cool");
```

#### Default Parameters

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

### Arrow Functions

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

#### More than one argument should be surrounded by parentheses:

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

### Returning Objects

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

### ARROW FUNCTIONS AND SCOPE

Regular functions do not block this. For example, this becomes something else in the setTimeout callback, not the tahoe object:

```js
const tahoe = {
  mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
  print: function(delay = 1000) {
    setTimeout(function() {
      console.log(this.mountains.join(", "));
    }, delay);
  }
};

tahoe.print(); // Uncaught TypeError: Cannot read property '
```

This error is thrown because it’s trying to use the .join method on what **this** is. If we log **this**, we’ll see that it refers to the Window object.

```js
console.log(this); // Window {}
```

To solve this problem, we can use the arrow function syntax to protect the scope of this:

```js
const tahoe = {
  mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
  print: function(delay = 1000) {
    setTimeout(() => {
      console.log(this.mountains.join(", "));
    }, delay);
  }
};

tahoe.print(); // Freel, Rose, Tallac, Rubicon, Silver
```

This works as expected, and we can .join the resorts with a comma. Be careful that you’re always keeping scope in mind. Arrow functions do not block off the scope of this:

```js
const tahoe = {
  mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
  print: (delay = 1000) => {
    setTimeout(() => {
      console.log(this.mountains.join(", "));
    }, delay);
  }
};

tahoe.print(); // Uncaught TypeError: Cannot read property 'join' of u
```

Changing the print function to an arrow function means that this is actually the window.

To verify, let’s change the console message to evaluate whether this is the window:

```js
const tahoe = {
  mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
  print: (delay = 1000) => {
    setTimeout(() => {
      console.log(this === window);
    }, delay);
  }
};
```

```tahoe.print(); //true```

It evaluates as true. To fix this, we can use a regular function:

```js
const tahoe = {
  mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
  print: function(delay = 1000) {
    setTimeout(() => {
      console.log(this === window);
    }, delay);
  }
};

tahoe.print(); // false
```

### Compiling JavaScript

- popular tool: Babel https://babeljs.io/repl

The process of JavaScript compilation is typically automated by a build tool like webpack or Parcel. We’ll discuss that in more detail later in the book.

## Objects and Arrays

### Destructuring Objects

Destructuring assignment allows you to locally scope fields within an object and to declare which values will be used. Consider the sandwich object. It has four keys, but we only want to use the values of two. We can scope bread and meat to be used locally:

```js
const sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"]
};

const { bread, meat } = sandwich;

console.log(bread, meat); // dutch crunch tuna
```

The code pulls bread and meat out of the object and creates local variables for them. Also, since we declared these destructed variables using let the bread and meat variables can be changed without changing the original sandwich:

```js
const sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"]
};

let { bread, meat } = sandwich;

bread = "garlic";
meat = "turkey";

console.log(bread); // garlic
console.log(meat); // turkey

console.log(sandwich.bread, sandwich.meat); // dutch crunch tuna
```

## Asynchronous JavaScript

The code samples that have been part of this chapter so far have been synchronous. When we write synchronous JavaScript code, we’re providing a list of instructions that execute immediately in order. For example, if we wanted to use JavaScript to handle some simple DOM manipulation, we’d write the code to do so like this:

const header = document.getElementById("heading");
header.innerHTML = "Hey!";

### Simple Promises with Fetch

Making a request to a REST API used to be pretty cumbersome. We’d have to write 20+ lines of nested code just to load some data into our app. Then the fetch() function showed up and simplified our lives.

- fetch takes in the URL for this resource as its only parameter:

```console.log(fetch("https://api.randomuser.me/?nat=US&result=1"))```

When we log this, we see that there is a pending Promise. Promises give us a way to make sense out of asynchronous behavior in JavaScript. The promise is an object that represents whether the async operation is pending, has been completed, or has failed. Think of this like the browser saying “Hey, I’m going to try my best to go get this data. Either way, I’ll come back and let you know how it went”.

So back to the fetch result. The pending promise represents a state before the data has been fetched. We need to chain on a function called .then(). This function will take in a callback function that will run if the previous operation was successful. In other words, fetch some data, then do something else.

The something else we want to do is turn the response into JSON:

```js
fetch("https://api.randomuser.me/?nat=US&results=1").then(res => console.log(res.json())
);
```

The then method will invoke the callback function once the promise has resolved. Whatever you return from this function becomes the argument of the next then function. So we can change together then functions to handle a promise that has been successfully resolved:

```js
fetch("https://api.randomuser.me/?nat=US&results=1")
  .then(res => res.json())
  .then(json => json.results)
  .then(console.log)
  .catch(console.error);
```

### Async/Await

Another popular approach for handling promises is to create an async function. Some developers prefer the syntax of async functions because it looks more familiar, like code that is found in a synchronous function. Instead of waiting for the results of a promise to resolve and handling it with a chain of then functions, async functions can be told to wait for the promise to resolve before further executing any code found in the function.

Let’s make another API request but wrap the functionality with an async function:

```js
const getFakePerson = async () => {
  let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
  let { results } = res.json();
  console.log(results);
};

getFakePerson();
```

Notice that the getFakePerson function is declared using the async keyword. This makes it an asynchronous function that can wait for promises to resolve before executing the code any further. The await keyword is used before promise calls. This tells the function to wait for the promise to resolve. This code accomplishes the exact same task as the code in the previous section that uses then functions. Well almost the exact same task…

```js
const getFakePerson = async () => {
  try {
    let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let { results } = res.json();
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};

getFakePerson();
```

There we go, now this code accomplish the exact same task as the code in the previous section that uses then functions. If the fetch call is successful the results are logged to the console. If it is unsuccessful then we will log the error to the console using console.error. When using async and await you need to surround your promise call in a try … catch block to handle any errors that may occur due to an unresolved promise.

### Building Promises

When making an asynchronous request, one of two things can happen: everything goes as we hope or there’s an error. There may be several different types of successful or unsuccessful requests. For example, we could try several ways to obtain the data to reach success. We could also receive multiple types of errors. Promises give us a way to simplify back to a simple pass or fail.

The getPeople function returns a new promise. The promise makes a request to the API. If the promise is successful, the data will load. If the promise is unsuccessful, an error will occur:

```js
const getPeople = count =>
  new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () =>
      request.status === 200
        ? resolves(JSON.parse(request.response).results)
        : reject(Error(request.statusText));
    request.onerror = err => rejects(err);
    request.send();
  });
```

With that, the promise has been created, but it hasn’t been used yet. We can use the promise by calling the getPeople function and passing in the number of members that should be loaded. The then function can be chained on to do something once the promise has been fulfilled. When a promise is rejected any details are passed back to the catch function, or the catch block if using async/await syntax.

```js
getPeople(5)
  .then(members => console.log(members))
  .catch(error => console.error(`getPeople failed: ${error.message}`))
);
```

Promises make dealing with asynchronous requests easier, which is good, because we have to deal with a lot of asynchronicity in JavaScript. A solid understanding of async behavior is essential for the modern JavaScript engineer.

## ES6 modules

A JavaScript module is a piece of reusable code that can easily be incorporated into other JavaScript files without causing variable collisions. Until recently, the only way to work with modular JavaScript was to incorporate a library that could handle importing and exporting modules.

JavaScript modules are stored in separate files, one file per module. There are two options when creating and exporting a module: you can export multiple JavaScript objects from a single module, or one JavaScript object per module.

In *text-helpers.js*, two functions are exported:

```js
export const print(message) => log(message, new Date())

export const log(message, timestamp) =>
  console.log(`${timestamp.toString()}: ${message}`)
```

export can be used to export any JavaScript type that will be consumed in another module. In this example the print function and log function are being exported. Any other variables declared in text-helpers.js will be local to that module.

### What It Means to Be Functional

JavaScript supports functional programming because JavaScript functions are first-class citizens. This means that functions can do the same things that variables can do. The latest JavaScript syntax adds language improvements that can beef up your functional programming techniques, including arrow functions, promises, and the spread operator.

In JavaScript, functions can represent data in your application. You may have noticed that you can declare functions with the var, let, or const keywords the same way you can declare strings, numbers, or any other variables:

```js
var log = function(message) {
  console.log(message);
};

log("In JavaScript functions are variables");
// In JavaScript, functions are variables
```

We can write the same function using an arrow function. Functional programmers write a lot of small functions, and the arrow function syntax makes that much easier:

```js
const log = message => {
  console.log(message);
};
Since functions are variables, we can add them to objects:

const obj = {
  message: "They can be added to objects like variables",
  log(message) {
    console.log(message);
  }
};
obj.log(obj.message);
// They can be added to objects like variables
```

Both of these statements do the same thing: they store a function in a variable called log. Additionally, the const keyword was used to declare the second function, which will prevent it from being overwritten.

We can also add functions to arrays in JavaScript:

```js
const messages = [
  "They can be inserted into arrays",
  message => console.log(message),
  "like variables",
  message => console.log(message)
];

messages[1](messages[0]); // They can be inserted into arrays
messages[3](messages[2]); // like variables
Functions can be sent to other functions as arguments, just like other variables:

const insideFn = logger => {
  logger("They can be sent to other functions as arguments");
};
insideFn(message => console.log(message));
// They can be sent to other functions as arguments
```


They can also be returned from other functions, just like variables:

```js
const createScream = function(logger) {
  return function(message) {
    logger(message.toUpperCase() + "!!!");
  };
};

const scream = createScream(message => console.log(message));

scream("functions can be returned from other functions");
scream("createScream returns a function");
scream("scream invokes that returned function");

// FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS!!!
// CREATESCREAM RETURNS A FUNCTION!!!
// SCREAM INVOKES THAT RETURNED FUNCTION!!!```
```

The last two examples were of higher-order functions, functions that either take or return other functions. We could describe the same createScream higher-order function with arrows:

```js
const createScream = logger => message => {
  logger(message.toUpperCase() + "!!!");
};
```

If you see more than one arrow used during a function declaration, this means that we are using a higher-order function.

We can say that JavaScript supports functional programming because its functions are first-class citizens. This means that functions are data. They can be saved, retrieved, or flow through your applications just like variables.







