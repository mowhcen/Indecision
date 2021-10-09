class IndecisionApp extends React.Component {
    render() {
        const title = "My Indecision App";
        const subTitle = "Let`s Machine Decision for you";
        const options = ["thing one", "thing two", "thing three"];

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.map((option, index) => (
                    <Option key={index} optionText={option} />
                ))}
            </div>
        );
    }
}
class Option extends React.Component {
    render() {
        return <li>{this.props.optionText}</li>;
    }
}
class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>AddOption component here</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
