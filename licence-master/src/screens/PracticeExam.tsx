import QuestionContainer from "../components/QuestionContainer";
import examQuestions from "../Data/examQuestions";
import "../styles/componentStyles.css";
import '../App.css' ;
import HeaderBar from "../components/Headerbar";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";


function PracticeExam(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [toggleQuestion, setToggleQuestion] = useState(false);
    const [previousCorrect, setPreviousCorrect] = useState(true);
    const [text, setText] = useState("Show Current Score");
    // const [prevAns, setPrevAns] = useState("");


    const handleNextQuestion = () => {

        if (selectedAnswer === examQuestions[currentIndex].correctAnswer) {
            setScore(score + 1);
            setPreviousCorrect(true);
        }
        else{
            setPreviousCorrect(false);
        }

        if (currentIndex <= examQuestions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer("");
        }

        if (currentQuestion < 11){
            setCurrentQuestion(currentQuestion + 1);
        }

        // setPrevAns(selectedAnswer);

    };

    const handleAnswerSelection = (answer: string) => {
        setSelectedAnswer(answer);
    };

    const handlePrevQuestion = () => {
        if (currentIndex > 0 && currentIndex <= examQuestions.length - 1) {
            setCurrentIndex(currentIndex - 1);
            setCurrentQuestion(currentQuestion - 1);
            // setSelectedAnswer(prevAns);
        }

        if (previousCorrect){
            setScore(score - 1);
        }
    };

    const handleToggle = () => {
        setToggleQuestion(!toggleQuestion);
        if (toggleQuestion){
            setText("Show Current Score");
        }
        else{
            setText("Hide Current Score")
        }
    };

    const navigate = useNavigate()

    function handleNavigation(route: string) {
        navigate(route)
    }

    return(
        <>
            <div id="appContainer" style={{paddingBottom: 0}}>
                <HeaderBar />
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "0px"}}>
                    <h1>Practice Exam</h1>

                    {toggleQuestion && (
                        <p>Score: {score} / {currentQuestion}</p>
                    )}

                    {currentIndex < examQuestions.length ? (
                        <QuestionContainer
                            key={examQuestions[currentIndex].id}
                            id={examQuestions[currentIndex].id}
                            image={examQuestions[currentIndex].image}
                            question={examQuestions[currentIndex].question}
                            answer1={examQuestions[currentIndex].answer1}
                            answer2={examQuestions[currentIndex].answer2}
                            answer3={examQuestions[currentIndex].answer3}
                            answer4={examQuestions[currentIndex].answer4}
                            correctAnswer={examQuestions[currentIndex].correctAnswer}
                            onAnswerSelect={handleAnswerSelection}
                        />
                    ) : (
                        <div style={{ textAlign: "center" }}>
                            <h2>Exam Completed!</h2>
                            <p>Your Score: {score} / {examQuestions.length}</p>
                        </div>
                    )}
                        {currentIndex < examQuestions.length -1 && currentIndex < 9 && (
                            <div>
                                {/* <p>{currentIndex}</p> */}
                                {currentIndex > 0 && (
                                    <CustomButton title="Previous Question" onPress={handlePrevQuestion} />
                                )}
                                <CustomButton title="Next Question" onPress={handleNextQuestion} />
                            </div>
                        )}
                    
                    {currentIndex === 9 && (
                        <div>
                            {/* <p>{currentIndex}</p> */}
                            <CustomButton title="Previous Question" onPress={handlePrevQuestion} />
                            <CustomButton title="Finish" onPress={handleNextQuestion} />
                        </div>
                    )}
                    {currentIndex < 10 && (
                        <CustomButton title={text} onPress={handleToggle} />
                    )}
                    <CustomButton color= 'blue' title='Main Menu' onPress={() => handleNavigation('/MainMenu')} />
                </div>
            </div>
        </>
    )
}

export default PracticeExam;