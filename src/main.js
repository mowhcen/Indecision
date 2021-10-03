console.log("app.js is running");

// JSX - JavaScript XML

var app = {
    title: "My Indecision App",
    subTitle: "Let`s Machine Decision for you",
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

var user = {
    name: "Mohammad Mohsen Hosseini",
    age: 27,
    location: "Shiraz",
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRootTwo = document.getElementById("challenge");

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);
