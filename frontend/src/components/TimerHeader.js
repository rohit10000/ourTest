import React, {useEffect, useState} from "react";
import "./TimerHeader.css";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import {useStateValue} from "../contextAPI/StateProvider";
import {setYourScore, updateResultClass} from "../contextAPI/actions";

function TimerHeader(){

    const buttonStyles = {
        largeSize:{
            fontSize: "small"
        },
        smallSize:{
            fontSize: "10px",
            width: "3vw"
        }
    }

    const [state, dispatch] = useStateValue();

    const [hour, setHour] = useState(["00"]);
    const [minute, setMinute] = useState(["59"]);
    const [second, setSecond] = useState(["14"]);

    const history = useHistory();

    const resultCalculation = function (){
        let numberOfQuestions = state.topicDetails.questions.length;
        let resultClass = Array(numberOfQuestions).fill("");

        let score = 0;

        for(let i = 0; i<numberOfQuestions; i++){

            if(state.topicDetails.questions[i].answer.index == state.yourAnswer[i]){
                resultClass[i] = "resultSuccess";
                score++;
            }
            else{
                resultClass[i] = "resultFailure";
            }

        }
        console.log(resultClass);

        updateResultClass(resultClass, dispatch);
        setYourScore(score, dispatch);

        alert("Your test is over. Click okay to proceed...");

        setTimeout(()=>{
            history.push("/result");
        }, 2000);

    };

    useEffect(() => {
        (function (){
            setTimeout(function (){
                if(second == "00"){
                    if(minute =="00"){
                        resultCalculation();
                    }
                    else {
                        var min = parseInt(minute) - 1;
                        if (min < 10)
                            min = "0" + min.toString();
                        setMinute(min);
                        setSecond("59");
                    }
                }
                else if(second != "00"){
                    var sec = parseInt(second)-1;
                    if(sec < 10)
                        sec = "0"+sec.toString()
                    setSecond(sec);
                }
            }, 1000);
        })();

        return ()=>{};

    }, [second]);

    return(
        <div className={"timerHeader"}>
            <div className={"timerHeader__title"}>
                <p>{state.topicDetails.name}</p>
            </div>
            <div className={"timerHeader__clock"}>
                <p>Time Left </p>

                <div className={"timerHeader__clock__container"}>
                    <div className={"timerHeader__clock__time"}>
                        {hour}
                    </div>
                    <p>:</p>
                    <div className={"timerHeader__clock__time"}>
                        {minute}
                    </div>
                    <p>:</p>
                    <div className={"timerHeader__clock__time"}>
                        {second}
                    </div>
                </div>
            </div>
            <div className={"timerHeader__button"}>
                <Button variant="contained" color="primary" onClick={resultCalculation}
                style={
                    window.innerWidth > 720 ? (buttonStyles.largeSize):(buttonStyles.smallSize)
                }>
                    End Test
                </Button>
            </div>
        </div>
    );
}

export default TimerHeader;