import React from "react";
import "./ResultCard.css";
import {useStateValue} from "../contextAPI/StateProvider";

function ResultCard({question, options, answer, index, resultClass}){

    const [state, _] = useStateValue();

    return(
        <div className={"resultCard"}>
            <div className={"resultCard__index"}>
                <p>Question No. {index+1}</p>
            </div>
            <div className={"resultCard__question"}>
                <div className={"resultCard__question__text"}>
                    <p>{question}</p>
                </div>
                <div className={"resultCard__question__options"}>
                    {
                        options.map((info, i)=>{
                            return(
                                i+1 == state.yourAnswer[index] ? (
                                        <div className={"option"}>
                                            <input type={"radio"} name={"question"+index} value={i+1} checked={true}/>
                                            <p>{info}</p>
                                        </div>
                                    ):
                                    (
                                        <div className={"option"}>
                                            <input type={"radio"} name={"question"+index} value={i+1}/>
                                            <p>{info}</p>
                                        </div>
                                    )

                            );
                        })
                    }
                </div>
            </div>
            <div className={"resultCard__result__container "+resultClass[index]}>
                <p>Correct Answer is: {answer.value}</p>
            </div>


        </div>
    );
}

export default ResultCard;
