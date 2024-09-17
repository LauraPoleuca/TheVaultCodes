const Puzzle = ({ hint, word }) => {
    return (
        <div>
            <div className="hint">{hint}</div>
            <div className="puzzle-grid">
                {word
                    .replace(/\s+/g, "")
                    .split("")
                    .map((letter, index) => {
                        <div key={index} className="grid-cell">
                            {letter}
                        </div>;
                    })}
            </div>
        </div>
    );
};

export default Puzzle;
