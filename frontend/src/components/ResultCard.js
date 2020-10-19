import React from "react";
import "./ResultCard.css";

function ResultCard({questionText, options, answer, index, resultClass, yourAnswer}){

    return(
        <div className={"resultCard"}>
            <div className={"resultCard__index"}>
                <p>Question No. {index+1}</p>
            </div>
            <div className={"resultCard__question"}>
                <div className={"resultCard__question__text"}>
                    <p>{questionText}</p>
                </div>
                <div className={"resultCard__question__options"}>
                    {
                        options.map((option, i)=>{
                            return(
                                option.index == yourAnswer ? (
                                        <div className={"option"} key={i}>
                                            <input type={"radio"} name={"question"+index} value={option.index} checked={true}/>
                                            <p>{option.text}</p>
                                        </div>
                                    ):
                                    (
                                        <div className={"option"} key={i}>
                                            <input type={"radio"} name={"question"+index} value={option.index}/>
                                            <p>{option.text}</p>
                                        </div>
                                    )

                            );
                        })
                    }
                </div>
            </div>
            <div className={"resultCard__result__container "+resultClass}>
                <p>Correct Answer is: {answer.text}</p>
            </div>


        </div>
    );
}

export default ResultCard;
