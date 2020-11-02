import React, {useEffect, useState} from "react";
import "./TimerHeader.css";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import {Loading} from "./Loading";


function RenderTopicTitle({topic, topicsErrMess, topicsLoading}){
    if(topicsLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if(topicsErrMess){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{topicsErrMess}</h4>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <p>{topic.name}</p>
        )
    }
}

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

        props.addResultScore(score);
        props.addResultClass(resultClass);
        props.postLog(props.topic.name, score, numberOfQuestions, props.user.authorizedUserId);


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
                <RenderTopicTitle topic={props.topic}
                                 topicsErrMess={props.topicsErrMess}
                                 topicsLoading={props.topicsLoading}/>
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
                <Button variant="contained" color="primary" onClick={() =>{
                    const flag = window.confirm("Are you sure you want to end the test?");
                    if(flag)
                        resultCalculation();
                }}
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
