import "../../styles/Progress.css";

const Progress = ({ puzzlesSolved, totalPuzzles }) => {
    const progressPercentage = (puzzlesSolved / totalPuzzles) * 100;

    return (
        <div className="progress">
            <div className="progress-text">
                {puzzlesSolved} out of {totalPuzzles} puzzles solved
            </div>
            <div className="progress-bar">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Progress;
