console.log("app.js is running");

// JSX - JavaScript XML

var template = /*#__PURE__*/ React.createElement(
    "p",
    {
        id: "somid",
    },
    "some new thing how was that "
);
// var template = <p>This is JSX from app.js!</p>;
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
