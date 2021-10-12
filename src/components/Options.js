import Option from "./Option";
import React from "react";

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                onClick={props.handleDeleteOptions}
                className="button button--link"
            >
                Remove All
            </button>
        </div>

        {props.options.length === 0 && (
            <p className="widget__message">Nothing to Do!!!</p>
        )}
        {props.options.map((option, index) => (
            <Option
                key={index}
                optionText={option}
                count={index + 1}
                handleDeleteOption={props.handleDeleteOption}
            />
        ))}
    </div>
);

export default Options;
