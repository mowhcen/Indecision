console.log("app.js is running");

// if statements
// ternary operator
// logical and operates

const app = {
    title: "My Indecision App",
    subTitle: "Let`s Machine Decision for you",
    options: ["one", "two"],
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        {app.options.length > 0 ? (
            <p>Here is your options</p>
        ) : (
            <p>No options</p>
        )}
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

let count = 0;

const reset = () => {
    console.log("reset");
};

const addOne = () => {
    console.log("addOne");
};

const minusOne = () => {
    console.log("minusOne");
};

const templateTwo = (
    <div>
        <button onClick={reset}>Reset</button>
        <h1>Count: {count}</h1>
        <button onClick={minusOne}>-1</button>
        <button onClick={addOne}>+1</button>
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
