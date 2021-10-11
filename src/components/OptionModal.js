import Modal from "react-modal";
import React from "react";

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleDeleteSelectedOption}
        contentLabel="Select Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleDeleteSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;
