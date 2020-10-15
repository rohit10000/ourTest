import React from "react";
import {useStateValue} from "../contextAPI/StateProvider";
import "./Logs.css";

function Logs(){
    const [state, dispatch] = useStateValue();

    return(
        <div className={"logs"}>
            <div className={"logs__header"}>
                <p>Your Test Records</p>
            </div>
            <div className={"logs__body"}>
                {
                    state.authorizedUser.testAttempted.map((test, index) => {
                        return(
                            <div className={"logs__body__content"}>
                                <div className={"logs__body__content__title"}>
                                    <p>{test.name} Test</p>
                                </div>
                                <div className={"logs__body__content__marks"}>
                                    <p>Your score: {test.scoredMarks}</p>
                                    <p>Out of: {test.totalMarks}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Logs;
