import { useState, useEffect } from "react";
import Progress from "../components/puzzle/Progress";
import Puzzle from "../components/puzzle/Puzzle";
import Answer from "../components/puzzle/Answer";
import "../styles/PuzzlePage.css";

const PuzzlePage = () => {
    const [puzzlesSolved, setPuzzlesSolved] = useState(0);
    const [totalPuzzles, setTotalPuzzles] = useState(0);
    const [puzzles, setPuzzles] = useState([]);

    const fetchPuzzles = async () => {
        try {
            const response = await fetch("http://localhost:8080/puzzle");
            const data = await response.json();
            setTotalPuzzles(data.length);
            const shuffledData = data
                .map((item) => ({ item, sortKey: Math.random() }))
                .sort((a, b) => a.sortKey - b.sortKey)
                .map(({ item }) => item);
            setPuzzles(shuffledData);
        } catch (e) {
            console.log("Error fetching the puzzles!", e);
        }
    };

    const handleSubmit = (answer) => {
        if (answer === puzzles[0].word) {
            alert("Correct answer!");
            const newPuzzlesSolved = puzzlesSolved + 1;
            setPuzzlesSolved(newPuzzlesSolved);
            setPuzzles([...puzzles.slice(1)]);

            if (newPuzzlesSolved === totalPuzzles) {
                alert("You've completed all puzzles!");
            }
        } else alert("Incorect!");
    };

    const handleSkip = () => {
        if (puzzles.length === 0) return;
        alert("Puzzle skipped!");
        setPuzzles([...puzzles.slice(1), puzzles[0]]);
    };

    const currentPuzzle =
        puzzles.length > 0 ? puzzles[0] : { hint: "", word: "" };

    useEffect(() => fetchPuzzles, []);

    return (
        <div className="puzzle-page">
            <Progress
                puzzlesSolved={puzzlesSolved}
                totalPuzzles={totalPuzzles}
            ></Progress>
            <Puzzle
                hint={currentPuzzle.hint}
                word={currentPuzzle.word}
            ></Puzzle>
            <Answer onSubmit={handleSubmit} onSkip={handleSkip}></Answer>
        </div>
    );
};

export default PuzzlePage;
