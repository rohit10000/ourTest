import React, {useEffect, useState} from "react";
import {useStateValue} from "../contextAPI/StateProvider";
import "./QuestionPanel.css";
import {
    setActiveQuestion,
    updateAnsweredQuestions,
    updateVisitedQuestions,
    updateYourAnswer
} from "../contextAPI/actions";

function QuestionPanel(){
    const [state, dispatch] = useStateValue();

    const [question, setQuestion] = useState(state.topicDetails.questions[state.activeQuestion-1]);

    useEffect(() => {
        if(state.yourAnswer[state.activeQuestion-1] == 0){
            for(let i = 0; i<4; i++){
                document.getElementById(state.activeQuestion+"_"+(parseInt(i)+1)).checked = false;
            }
        }
        else{
            console.log(state.activeQuestion+"_"+state.yourAnswer[state.activeQuestion-1]);
            console.log(state.yourAnswer.length);

            document.getElementById(state.activeQuestion+"_"+state.yourAnswer[state.activeQuestion-1])
                .checked = true;

        }

    }, [question])

    useEffect(() =>{

        setQuestion(state.topicDetails.questions[state.activeQuestion-1]);

        return ()=>{}

    }, [state.topicDetails][state.activeQuestion])

    return(
        <div className={"questionPanel"}>
            <div className={"questionPanel__header"}>
                <strong className={"questionPanel__header__title"}>
                    Question No. {state.activeQuestion}
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
                    <div className={"questionPanel__question__options"} id={state.activeQuestion}>
                        {
                            question.options.map((info, i)=>{
                                return(
                                    <div className={"option"} key={i}>
                                        <input type={"radio"} name={"question"+state.activeQuestion}
                                               value={i+1} id={state.activeQuestion+"_"+(parseInt(i)+1)}/>
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
