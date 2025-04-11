interface questionProps{
    question: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    correctAnswer: string;


}
import { useState } from "react";
import CustomButton from "./CustomButton";

function QuestionContainer(props: questionProps){

    const [selectedValue, setSelectedValue] = useState('');
    let score = 0;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    if (selectedValue === props.correctAnswer) {
        setScore((prevScore) => prevScore + 1);
    }
};

    return (
        <div>
            <div>
                <fieldset>
                    <legend>{props.question}</legend>

                    <div>
                        <input type="radio" id={props.answer1} name="question" value={props.answer1} checked={selectedValue === props.answer1} onChange={handleChange}/>
                    </div>

                    <div>
                        <input type="radio" id={props.answer2} name="question" value={props.answer1} checked={selectedValue === props.answer2} onChange={handleChange}
                        />
                    </div>

                    <div>
                        <input type="radio" id={props.answer3} name="question" value={props.answer1} checked={selectedValue === props.answer3} onChange={handleChange}
                        />
                    </div>

                    <div>
                        <input type="radio" id={props.answer4} name="question" value={props.answer1} checked={selectedValue === props.answer4} onChange={handleChange}/>
                    </div>

                    <p>Selected Answer: {selectedValue}</p>
                </fieldset>
            </div>
        </div>
        
    );
}

export default QuestionContainer