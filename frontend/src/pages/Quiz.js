import React from "react";
import "./Quiz.css";
import TimerHeader from "../components/TimerHeader";
import QuestionPanel from "../components/QuestionPanel";
import SidePanel from "../components/SidePanel";

import QuizFooter from "../components/QuizFooter";

function Quiz(){

    return(
        <div className={"quiz"}>
            <TimerHeader/>
            <div className={"quiz__content"}>
                <div className={"quiz__content__leftSide"}>
                    <QuestionPanel/>
                </div>
                <div className={"quiz__content__rightSide"}>
                    <SidePanel/>
                </div>
            </div>
            <QuizFooter/>
        </div>
    );
}

export default Quiz;
