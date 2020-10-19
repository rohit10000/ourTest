import React, {useEffect} from "react";
import "./QuestionPanel.css";

function QuestionPanel(props){

    const question = props.quiz.questions[props.quiz.activeQuestion];

    useEffect(() => {
        if(props.quiz.yourAnswers[props.quiz.activeQuestion] === 0){
            for(let i = 0; i<4; i++){
                document.getElementById(props.quiz.activeQuestion+"_"+(parseInt(i, 10))).checked = false;
            }
        }
        else{
            document.getElementById(props.quiz.activeQuestion+"_"+(parseInt(props.quiz.yourAnswers[props.quiz.activeQuestion], 10)-1))
                .checked = true;

        }
        return () => {};

    }, [question])
    return(
        <div className={"questionPanel"}>
            <div className={"questionPanel__header"}>
                <strong className={"questionPanel__header__title"}>
                    Question No. {parseInt(props.quiz.activeQuestion, 10) + 1}
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
                    <div className={"questionPanel__question__options"} id={props.quiz.activeQuestion}>
                        {
                            question.options.map((info, i)=>{
                                return(
                                    <div className={"option"} key={i}>
                                        <input type={"radio"} name={"question"+props.quiz.activeQuestion}
                                               value={i+1} id={props.quiz.activeQuestion+"_"+(parseInt(i, 10))}/>
                                        <p>{info}</p>
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
