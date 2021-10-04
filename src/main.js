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

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
