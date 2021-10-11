import Option from "./Option";
import React from "react";

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Nothing to Do!!!</p>}
        {props.options.map((option, index) => (
            <Option
                key={index}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
            />
        ))}
    </div>
);

export default Options;
