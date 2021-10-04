const appRoot = document.getElementById("app");

let state = "Show";

const setStatus = (change) => {
    state = change;
};

const showStatus = () => state;

const changeDetails = () => {
    showStatus() === "Show" ? setStatus("Hide") : setStatus("Show");
    rendering();
};

const message = () =>
    showStatus() === "Show" ? undefined : <p>message show on screen</p>;

const rendering = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={changeDetails}>{showStatus()} details</button>
            {message()}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

rendering();
