import Action from "./Action";
import AddOption from "./AddOption";
import Header from "./Header";
import OptionModal from "./OptionModal";
import Options from "./Options";
import React from "react";

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,
    };

    handleDeleteSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(
                (option) => option !== optionToRemove
            ),
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option,
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }
        this.setState((prevState) => ({
            options: prevState.options.concat([option]),
        }));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    render() {
        const title = "My Indecision App";
        const subTitle = "Let`s Machine Decision for you";

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action
                    hasOption={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleDeleteSelectedOption={this.handleDeleteSelectedOption}
                />
            </div>
        );
    }
}
