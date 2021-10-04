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

const removeItems = () => {
    app.options = [];

    renderApp();
};

const makeRandomDecisions = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
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
            <button
                disabled={app.options.length === 0}
                onClick={makeRandomDecisions}
            >
                What should I do?
            </button>
            <button onClick={removeItems}>Remove All</button>
            <ol>
                {app.options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
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
