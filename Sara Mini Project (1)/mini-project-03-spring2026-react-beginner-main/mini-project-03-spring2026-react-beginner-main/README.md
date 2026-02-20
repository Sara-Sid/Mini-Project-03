# mini-project-03-spring2026-react-beginner

## Week 03

## Topic: React & Component-Based Design

```
 + Introduction to React
     - Components, Props, State,
     - React Hooks
 + Modern CSS frameworks (Tailwind CSS),
 + responsive design principles, and mobile-first development (maybe in next class).

```

## Step 01: More on JavaScript

#### Javascript (ES6)

- ES6 (ECMAScript 2015) was introduced to modernize JavaScript by addressing its limitations and adding features found in other mature programming languages, thereby making it a more powerful, efficient, and maintainable language for building complex, large-scale applications.

- **Key reasons for its introduction include:**
  - **Addressing Language Gaps:** Before ES6, JavaScript lacked crucial features like proper variable scoping, a native module system, and built-in support for object-oriented programming (OOP) classes.

  - **Enhancing Code Readability and Maintainability:** ES6 introduced a more concise and expressive syntax, such as `arrow functions`, `template literals`, and `de-structuring`, which significantly improved the readability and reduced the verbosity of the code.
  - **Improving Asynchronous Programming:** The `Promise API` was introduced to handle asynchronous operations more gracefully
  - **Standardizing Modularity:** The introduction of native `import` and `export` statements solved the problem of organizing code into separate, reusable files, which was a crucial step for developing large, **modular** applications.

  - **Better Variable Management:** The `let` and `const` keywords were added to provide block-scoped variable declarations, resolving the issues and unpredictable behavior associated with the function-scoped `var` keyword.

  - **Enabling Modern Frameworks:** Modern web development frameworks like `React`, `Angular`, and `Vue` rely heavily on the features introduced in ES6, making knowledge of this version essential for contemporary developers.

  - **more:** https://www.w3schools.com/js/js_es6.asp

#### Reviewing/Introducing important Ideas of ES6:

**A) Arrow Functions:**

You may try the following code by first writing them in a .js file (say, `week03.js` and run it by calling `node week03.js` from your command prompt)

- Note: VS Code has command prompt too. You can test it there.

```javascript
// => fat arrow
const sum = (a, b) => a + b;

console.log(sum(3, 2));
```

**B)Arrays and Objects:**

```javascript
// you may have seen this in the last lab
// declare arrays
let good = [10, 20, -50, 300, -18];

//single variable
let allGood = 0;

//iterate through the list/array using a for loop
for (i = 0; i < good.length; i++) {
  allGood += good[i];
}

console.log("All Good: ", allGood);

//declare objects
let p = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
let q = { name: "France", foul: 10, cardY: 2, cardR: 1 };

// an array of objects
let arrObjects = [
  { name: "x", foul: 1 },
  { name: "y", foul: 1 },
  { name: "x", foul: 1 },
  { name: "xxx", foul: 12, img_src: "xx" },
];

arrObjects.push({ name: "d" });
```

**C) Maps, Filter, Reduce: The primary way to render lists of data in React:**

- **Maps:**
  In JavaScript, the `map()` method is an iterative function used to transform an array into a new one by applying a specific operation to every element

```javascript
const doubleASeries = (series) => {
  return series.map((s) => s * 2);
};
console.log(doubleASeries([1, 2, 3, 4]));
// sample output: [ 2, 4, 6, 8 ]
```

- **Why Use map() instead of a for loop?**
  - **Readability:** It clearly signals your intent is to "transform" data, making the code easier for others to follow.

  - **Functional Programming:** It allows for chaining. Since `map()` returns a new array, you can immediately call .filter() or .sort() on the result.

  - **React Integration:** In React, map() is the standard way to convert an array of data into a list of UI components.

- **Common Use Cases:**
  - **Extracting Data:** Getting a list of specific properties (like just names) from an array of objects.

  - **Formatting:** Converting strings to lowercase or numbers to formatted currency.

  - **UI Components:** Wrapping raw data in HTML or JSX tags

- **Filter:**

  In JavaScript, the `filter()` method is used to select specific elements from an array based on a condition you define.

```javascript
const getMeTheOdds = (myList) => {
  return myList.filter((m) => m % 2 !== 0);
};
//note: % stands for modulo operation
console.log(getMeTheOdds([1, 2, 3, 4, 5, 7, 20, 12, 55]));

// sample output: [1, 3, 5, 7, 55];
```

- **Key Characteristics:**
  - **Returns a New Array:** It produces a new array containing only the items that passed the test.
  - **Variable Length:** Unlike map(), the new array is usually shorter than the original.
  - **Non-Mutating:** The original array remains completely untouched.

- **Why use filter()?**
  - **Declarative Logic:** Instead of writing a complex for loop with an if statement and a manual .push(), you simply describe what you want to keep.
  - **Immutability:** In frameworks like React, you should never modify state directly. `filter()` is the perfect way to "delete" an item from a list by creating a new version of the list without that item.

- **Common Use Cases:**
  - **Search Bars:** Filtering a list of products based on what the user typed.

  - **Deleting Items:** Removing a specific ID from an array (e.g., `list.filter(item => item.id !== deletedId))`.

  - **Data Cleanup:** Stripping out null or undefined values from a dataset.

- **Reduce:**

While `map` and `filter` return new arrays, `reduce()` is used to distill an entire array down to a single value (like a sum, a total, or even a single object).

```javascript
const getTotal = (series) => {
  const summation = series.reduce((total, s) => {
    return total + s;
  }, 0);
  return summation;
};

console.log(getTotal([1, 2, 3, 4, 5]));

// output: 15
```

- **Why use reduce()?**
  - **Versatility:** It can technically do anything `map` and `filter` can do.

  - **Efficiency:** It allows you to perform complex calculations in a single pass through the data.

  - **State Management:** In React, the `useReducer hook` is based on this exact pattern to manage complex state transitions.

**D) Spread/Rest Operator:**

- These operators are frequently used to pass props or update state immutably.

- **The Spread Operator:**
  - **Combining Arrays:**

  The spread operator provides a concise way to merge two or more arrays without using methods like `concat()`.

  ```javascript
  let fruitBasket1 = ["apples", "oranges", "pears"];
  let fruitBasket2 = ["strawberries", "pineapples", "dates"];

  let largerBasket = [...fruitBasket1, ...fruitBasket2];
  console.log(largerBasket);

  //output: [ 'apples', 'oranges', 'pears', 'strawberries', 'pineapples', 'dates' ]
  ```

  - **Copying an Array or Object:**

  It can create a shallow copy of an existing array or object, which helps avoid issues with copying by reference.

  ```javascript
  const originalArray = [1, 2, 3];
  const copiedArray = [...originalArray];

  copiedArray.push(4); // Modifies the copy, not the original

  console.log(originalArray); // Output: [1, 2, 3]
  console.log(copiedArray); // Output: [1, 2, 3, 4]
  ```

  - **Passing Array Elements as Function Arguments:**

    The spread operator can expand an array's elements to be passed as individual arguments to a function.

  ```javascript
  const sum3 = (x, y, z) => {
    return x + y + z;
  };

  const numbers = [1, 2, 3];

  // Expands the numbers array into individual arguments: sum3(1, 2, 3)
  console.log(sum3(...numbers));
  // Output: 6
  ```

- **The Rest Operator:**

  Please find details here:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

**E) Template Literals:**

- Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

- In JavaScript, template literals (often called template strings) provide a modern, flexible way to work with strings using backticks (`) instead of standard quotes.

- Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.

```javascript
// assume you wrote the following code block in a file called templates.js and connected  that to a basic html file called index.html

// 1. Create the data

const person = {
  name: "John Doe",
  city: "Example City",
  bio: "A brief description of John Doe.",
};

// Create the HTML markup using a template literal (backticks ``)

const markup = `
    <div class="person" style="color: blueviolet">
        <h2>${person.name}</h2>
        <p class="location">${person.city}</p>
        <p class="bio">${person.bio}</p>
    </div>
`; //

// 3. Create a new container element

const newDiv = document.createElement("div");

// 4. Set the template string as the innerHTML of the new element

newDiv.innerHTML = markup;

// 5. Append the new element to the DOM (e.g., to the body)
document.body.appendChild(newDiv);

//index.html should have a div displaying a person's name, city and bio.
```

### Step 02a: React: What and Why?

React is a popular open-source JavaScript library developed by Facebook for building fast, interactive user interfaces (UIs), primarily for single-page applications. It allows developers to create reusable UI components, manage application state efficiently, and update the view layer without reloading the page, using a virtual DOM for high performance.

#### What is React?

- Component-Based: UIs are broken down into small, isolated pieces of code called components, which can be reused throughout an application.

- Declarative: Developers describe what the UI should look like for different states, and React automatically updates and renders the right components when data changes.

- JavaScript-Centric: It uses JSX, a syntax extension that combines HTML and JavaScript, allowing logic and UI structure to exist together.

- Virtual DOM: React uses a virtual representation of the real DOM to calculate the minimum number of changes needed, significantly improving performance.

#### Why Use React?

- Performance: The virtual DOM ensures efficient updates, making applications fast.

- Reusability: Components can be reused, which saves development time and ensures consistency.

- Scalability: Well-suited for large, complex applications that require frequently changing data.

- Flexibility & Ecosystem: Can be used for web applications and mobile apps (via React Native).

- Maintainability: Strong, modular code structure makes it easier to manage and update apps.

### Step 02b: Tools and Environment

We need the following tools/environments installed before we could launch a React project:

- **Node.js & npm/yarn**:
  - Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!
  - Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
  - **npm (Node Package Manager)** is the standard package manager for the JavaScript runtime environment Node.js and the largest software registry in the world.
  - **npm** consists of a command-line interface (CLI), an online registry of packages, and a website.
  - npm installs, updates and manages downloads of dependencies of your project.
    -Dependencies are pre-built pieces of code, such as libraries and packages, that your Node.js application needs to work.

- useful link:
  - a) https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager

  - b) https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

- **Vite** or Create React App:
  - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

  - It provides a standard way to bootstrap projects without manual Webpack configuration.

  - useful link: - https://vite.dev/guide/

- **Basic CLI (command line interface) Skills:**
  - Navigating folders and running commands in the terminal (command prompt, powershell, terminal (mac users)).

### Step 03: Creating the first React Project:

Considering you have Node.js installed, we may provide the following command on your CLI to start/create our first React project:

- note: vite guide has the same information

```bash

 npm create vite@latest

```

Once you press enter, you may see something like the following:

```
Need to install the following packages:
create-vite@8.3.0
Ok to proceed? (y) y


> npx
> "create-vite"

│
◇  Project name:
│  mini-project-03
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Use Vite 8 beta (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /Users/fhamid/Desktop/SpringProjects/mini-project-03...
│
◇  Installing dependencies with npm...

added 206 packages, and audited 207 packages in 11s

33 packages are looking for funding
  run `npm fund` for details
```

- note:
  - I provided the project name, `mini-project-03`, selected the framework `React` and `JavaScript` variant.
  - Now, you will find a folder named `mini-project-03` in the current directory.
  - go inside (CLI command: `cd mini-project-03`) and open it using VS Code (command: `code .`)
  - VS Code should open and you will find several files, folders, etc. organized.

### Step 04: Getting to know the files and the structure:

- **node_modules/**: Contains all the third-party libraries (dependencies) your project needs to run. This folder is large and should never be edited manually or pushed to version control.

- **public/**: Stores static assets like your favicon or images that do not need any processing. Files here are served directly at the root path (e.g., /logo.png)

- **src/**: The heart of your application where you will spend 99% of your time coding.

#### Key Files in src/:

- **main.jsx**: The true JavaScript entry point. It finds the root element in your HTML and "mounts" your entire React application into it.
  - **Syntax Extension**: JSX is a syntax extension that allows developers to write HTML-like markup directly within their JavaScript code.
  - **Purpose with React:** It is primarily used with the React library to describe what the user interface (UI) should look like in a visually intuitive way. Instead of separating markup and logic in different files, React components combine them, making code more readable and maintainable.
  - **Transpilation:** Browsers cannot read JSX directly. Code written with JSX must be transpiled (converted) into regular, valid JavaScript code using a tool like Babel before it can run in a browser.

- **App.jsx**: The "Root Component." This is typically the top-level container that holds all other components you build.

- **assets/**: A sub-folder for images, fonts, and CSS that should be processed (optimized/minified) by Vite during the build process.

- **index.css** & **App.css**: Default stylesheets. index.css is usually for global styles, while App.css is specific to the App component.

#### Configuration Files (Root Directory):

- **index.html**: The main entry point for the browser.
  - It includes a `<div id="root"></div>` where React renders your UI and a `<script>` tag pointing to main.jsx.

- **package.json**: Lists your project's metadata, dependencies, and "scripts" (like npm run dev to start the project).

- **vite.config.js**: The configuration file where you can add plugins (like React support) or customize how Vite builds your project.

- **.gitignore**: Tells Git which files (like node_modules) to ignore so they aren't uploaded to your repository.

### Deploy your React Project on local server (on terminal):

```bash
npm run dev
```

- A new page should open at your browser.

### Step 05: Common React Terms, Concepts, Ideas

- **Fragment:**
  - A React component must return a single root element. A React.Fragment (or its shorthand `<></>`) is used to group multiple elements so they can be returned as a single unit without adding an extra node to the DOM.

  - The core rules regarding a component's return value are:
    - **Grouping with Fragments**: React.Fragment acts as that single return value while allowing you to group multiple, adjacent JSX elements inside it. The fragment itself is a "virtual" container and does not appear in the final rendered HTML structure, which is its main advantage over using a `<div>` wrapper.

    - **Single Return Value**: Due to how JSX is transpiled into JavaScript and how React's reconciliation algorithm works, a component's render method or function body must resolve to a single value.

- **Rendering**:

- In React, "rendering" is a specific process where React calls your components to determine what the user interface (UI) should look like based on current data.

- The official React documentation breaks the process into three distinct steps:
  - **Triggering a Render**: This is the "order" from the user or the app. It happens during the initial render (when the app starts) or when a component's state is updated.

  - **Rendering the Component**: React calls your function (or the render() method in class components) to figure out what to display. This stage is recursive; if a parent component renders, React will automatically re-render all its children unless they are optimized.

  - **Committing to the DOM**: After calculating the differences (diffing) between the new and old versions of the UI, React applies only the minimal necessary changes to the real browser DOM.

## ToDo (in-class):

Do the following steps together with professor Hamid:

```
ToDo:

-	Remove everything from the App.jsx (it will clean everything from the page)
-	Return a div with a single message and a button component
-	Add interactivity to the button (upcount)
-	Try to do similar (add another div and a button, add interactivity)
-	Once that is done, try add style to the divs. [css class, style]
-	Try to add a <p> component that displays the current value
-	Create your first component
  - Create a `component` folder in the root directory,
    - inside of that folder, create a file CountingComponent.jsx [component names: capitalize each word]
  - type `rsc` on screen and it should give you the skeleton of a component
  - Add some code (copy the button, state, handler, etc.)
- Create/Add a CountingComponent to the App component. [don’t forget to import it]
- Check the impact.
- Try to pass a parameter to add more interesting interactivity.

[In React, the term "props" is fundamentally the name given to the single parameter (an object) that a component function receives. There is no difference in the underlying JavaScript mechanism; "props" is simply the React-specific naming convention for the data passed into a component.]

- Add conditional rendering (by using conditional operator)
- Use an array of data (const inputs = [true, false, true, true];) and create components based on the input values.
Change the display to flex and make flex-direction = row to show the impacts
- Introduce them to the idea of key and index
- Show example of passing multiple props
```

## Mini-Project-03 (Problem Description):

- Create a simple Grocery List App using React, where a user can
  - add new grocery items to the list,
  - view the current items (as an ul/li),
  - remove some items from the list
  - modify some items

- While doing so,
  - Maintain Component-based design (at least one component to represent grocery item)
  - It's okay of the items only contain text-based information (image is not a must)
  - Add proper styles to the components
  - Add buttons,labels, etc., so a user can add/update/delete items
- (live link): Deploy the app using Netlify/other platform
- (repo): Publish the code and readme (explaining the core ideas, components) in the GitHub repo

- Submit the live link and the repo to the Canvas
- Keep the frontend (UI) simple and user-friendly.
- Don’t forget to save your name in the README.
- Add some introduction to your simple app in the README.

- Note that **you will get a 0 if the live link / repo link is broken**.

- This is an **individual assignment**. It’s okay to take help from each other, but I expect that you will implement the app in your own way.

### Rubric [50 points]:

- Component-based implementation [10 points],
- Successful application of `map`, `filter`, `reduce` (at least one, based on necessity) [5 points]
- Add/Insert New Item [5 points]
- Delete/Remove Existing Item [5 points]
- Update Existing Item [5 points]
- Display the current list of items [5 points]
- Presenatation (you must prepare a 2 minute speech, beginning of next class) -> [5 points]
- GitHub Repository must have at least 5 meaningful commits (each commit should have proper comment) -> [5 points]
- README file -> [5 points]

## Resources:

- https://react.dev/learn
- https://vite.dev/
- https://medium.com/@koriigami/a-simple-guide-to-the-modern-vite-project-structure-9fbe8d137abf
- https://github.com/MoonHighway/learning-react/blob/second-edition/README.md
- https://react.dev/learn/render-and-commit
