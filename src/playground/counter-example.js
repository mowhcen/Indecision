class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
        };
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0,
            };
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleReset}>Reset</button>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleAddOne}>+1</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <button onClick={reset}>Reset</button>
//             <h1>Count: {count}</h1>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={addOne}>+1</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
