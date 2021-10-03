console.log("app.js is running");

// JSX - JavaScript XML

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>this is some info</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Mohammad Mohsen Hosseini</h1>
        <p>Age: 20</p>
        <p>Location: Shiraz</p>
    </div>
);

var appRootTwo = document.getElementById("challenge");

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);
