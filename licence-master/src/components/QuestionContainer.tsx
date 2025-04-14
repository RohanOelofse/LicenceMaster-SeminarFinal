import { useState } from "react";


interface questionProps{
    image?: string;
    id?: number;
    question: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    correctAnswer: string;
    onAnswerSelect: (answer: string) => void;
}


function QuestionContainer(props: questionProps){

    // console.log("Props received in QuestionContainer:", props);

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const answer = event.target.value;
        setSelectedValue(answer);
        props.onAnswerSelect(answer);
    };

    return (
            <div className="question-container">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {props.image ? <img src={props.image} style={{height: "100px", width: "100px"}}/> : ""}
                </div>
                <fieldset>
                    <legend>{props.question}</legend>

                    <div>
                        <label>
                            <input type="radio" id={props.answer1} name={props.question} value={props.answer1} checked={selectedValue === props.answer1} onChange={handleChange}/>
                        {props.answer1}
                        </label>
                    </div>

                    <div>
                        <label>
                            <input type="radio" id={props.answer2} name={props.question} value={props.answer2} checked={selectedValue === props.answer2} onChange={handleChange}/>
                        {props.answer2}
                        </label>
                    </div>

                    <div>
                        <label>
                            <input type="radio" id={props.answer3} name={props.question} value={props.answer3} checked={selectedValue === props.answer3} onChange={handleChange}/>
                        {props.answer3}
                        </label>
                    </div>

                    <div>
                        <label>
                            <input type="radio" id={props.answer4} name={props.question} value={props.answer4} checked={selectedValue === props.answer4} onChange={handleChange}/>
                        {props.answer4}
                        </label>
                    </div>

                    <p>Selected Answer: {selectedValue}</p>
                </fieldset>
            </div>
        
    );
}

export default QuestionContainer