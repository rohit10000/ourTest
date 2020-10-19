import React, {useEffect} from "react";
import "./QuestionPanel.css";

function QuestionPanel({quiz}){

    const question = quiz.questions[quiz.activeQuestion];
    const numberOfOptions = question.options.length;

    useEffect(() => {
        if(quiz.yourAnswers[quiz.activeQuestion] === -1){
            for(let i = 0; i<numberOfOptions; i++){
                document.getElementById(quiz.activeQuestion+"_"+(parseInt(i, 10))).checked = false;
            }
        }
        else{
            document.getElementById(quiz.activeQuestion+"_"+quiz.yourAnswers[quiz.activeQuestion])
                .checked = true;

        }
        return () => {};

    }, [question]);

    return(
        <div className={"questionPanel"}>
            <div className={"questionPanel__header"}>
                <strong className={"questionPanel__header__title"}>
                    Question No. {parseInt(quiz.activeQuestion, 10) + 1}
                </strong>
                <div className={"questionPanel__header__marking"}>
                    <p>Marks</p>
                    <div className={"questionPanel__header__marking__digit"}>
                        <a style={{background: "green"}}> +4 </a>
                        <a style={{background: "red"}}> -1 </a>
                    </div>
                </div>
            </div>
            <hr/>
            <div style={{height: "53vh"}}>
                <div className={"questionPanel__question"}>
                    <div className={"questionPanel__question__text"}>
                        <p>{question.text}</p>
                    </div>
                    <div className={"questionPanel__question__options"} id={quiz.activeQuestion}>
                        {
                            question.options.map((option, i)=>{
                                return(
                                    <div className={"option"} key={i}>
                                        <input type={"radio"} name={"question"+quiz.activeQuestion}
                                               value={option.index} id={quiz.activeQuestion+"_"+(parseInt(i, 10))}/>
                                        <p>{option.text}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default QuestionPanel;
