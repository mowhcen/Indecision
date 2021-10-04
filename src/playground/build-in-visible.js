const appRoot = document.getElementById("app");

let state = false;

const changeDetails = () => {
    state = !state;
    rendering();
};

const message = () => (!state ? undefined : <p>message show on screen</p>);

const rendering = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={changeDetails}>
                {state ? "Hide details" : "Show details"}
            </button>
            {state && (
                <div>
                    <p>Hey. These are some details you can now see</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

rendering();
