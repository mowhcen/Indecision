console.log("app.js is running");

// if statements
// ternary operator
// logical and operates

const app = {
    title: "My Indecision App",
    subTitle: "Let`s Machine Decision for you",
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        renderApp();
        e.target.elements.option.value = "";
    }
};

const rerender = () => {
    app.options = [];

    renderApp();
};

const appRoot = document.getElementById("app");

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>
                {app.options.length > 0 ? "Here is your options" : "No options"}
            </p>
            <p>{app.options.length}</p>
            <button onClick={rerender}>Remove All</button>
            <ol>
                <li>item one</li>
                <li>item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
