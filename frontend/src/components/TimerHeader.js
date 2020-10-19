import React, {useEffect, useState} from "react";
import "./TimerHeader.css";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

function TimerHeader(props){

    const buttonStyles = {
        largeSize:{
            fontSize: "small"
        },
        smallSize:{
            fontSize: "10px",
            width: "3vw"
        }
    }


    const [hour, _] = useState(["00"]);
    const [minute, setMinute] = useState(["59"]);
    const [second, setSecond] = useState(["14"]);

    const history = useHistory();

    const resultCalculation = function (){
        let numberOfQuestions = props.quiz.questions.length;
        let resultClass = Array(numberOfQuestions).fill("");

        let score = 0;

        for(let i = 0; i<numberOfQuestions; i++){

            if(props.quiz.questions[i].answer.index == props.quiz.yourAnswers[i]){
                resultClass[i] = "resultSuccess";
                score++;
            }
            else{
                resultClass[i] = "resultFailure";
            }

        }
        console.log("DEBUG IN TIMERHEADER: ", resultClass);

        props.addResultScore(score);
        props.addResultClass(resultClass);

        alert("Your test is over. Click okay to proceed...");

        setTimeout(()=>{
            history.push("/result");
        }, 2000);

    };

    useEffect(() => {
        (function (){
            setTimeout(function (){
                if(second == "00"){
                    if(minute == "00"){
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
                <p>{props.topic.topic.name}</p>
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
