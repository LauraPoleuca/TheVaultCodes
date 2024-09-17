import { useRef } from "react";

const Answer = ({ onSubmit, onSkip }) => {
    const answerRef = useRef();

    return (
        <div>
            <input type="text" ref={answerRef} className="input"></input>
            <button
                type="submit"
                className="submit-button"
                onClick={() => {
                    onSubmit(answerRef.current.value);
                    answerRef.current.value = "";
                }}
            >
                Submit
            </button>
            <button type="button" onClick={onSkip} className="skip-button">
                Skip
            </button>
        </div>
    );
};

export default Answer;
