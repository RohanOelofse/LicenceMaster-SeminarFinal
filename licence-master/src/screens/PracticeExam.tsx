import QuestionContainer from "../components/QuestionContainer"


function PracticeExam(){

    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px"}}>
            <h1>Practice Exam</h1>
            <QuestionContainer />
        </div>
    )
}

export default PracticeExam;