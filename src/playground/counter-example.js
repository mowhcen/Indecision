let count = 0;

const reset = () => {
    count = 0;
    renderCounterApp();
};

const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <button onClick={reset}>Reset</button>
            <h1>Count: {count}</h1>
            <button onClick={minusOne}>-1</button>
            <button onClick={addOne}>+1</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
