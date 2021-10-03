console.log("app.js is running");

// if statements
// ternary operator
// logical and operates

var app = {
    title: "My Indecision App",
    subTitle: "Let`s Machine Decision for you",
    options: ["one", "two"],
};

var template = (
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

var user = {
    name: "Mohammad Mohsen Hosseini",
    age: 20,
    location: "Shiraz",
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRootTwo = document.getElementById("challenge");

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRootTwo);
