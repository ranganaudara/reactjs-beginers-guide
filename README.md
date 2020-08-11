# Reactjs-BeginersGuide

This project contains first steps of a React.js project

This projec demonstrates the following:
*  Props
*  Components
*  Raising and Handling Events
*  Lifting the State
*  Functional Components
*  Lifecycle Hooks

**VS Code Extensions**

*  simple react snippets
*  prettier

Enable autoformat on save
Preferences>settings> search format on save and enable it.

**Creating React application**

1.  Install create-react-app package
`npm i -g create-react-app` 
React version can also be specified as follows:
`npm i -g create-react-app@1.5.2`

3.  Initate react native project
`create-react-app my-app`
    

This installs Development server, Webpack, Babel and few other tools.
If you want to customize the production environment use:
    `npm run eject`

4.  cd in to the project directody and starting the project
`npm start`


**Structure of a Component:**

`class Tweet {
    state = {};
    render() {
             //----> this outputs a React Element which maps to DOM element
    }
}`

**Random Points**

- Babel -  JS compiler (compile js to a code that browsers can understand)
- A function expression always defines its own **this**  object. Arrow function expressions still have the **this** object of the enclosing context. Don’t get confused when using **this**  in an arrow function.

- JSX mixes up HTML and JavaScript to define the output of React components in their render methods
- ReactDOM.render() is an entry point for a React application to hook React into the DOM
- variable declarations with const and let can be used for specific use cases use const over let in React applications
- arrow functions can be used to keep your functions concise
- classes are used to define components in React by extending them







