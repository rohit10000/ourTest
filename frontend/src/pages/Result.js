import React from "react";
import ResultCard from "../components/ResultCard";
import "./Result.css";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";
import {Loading} from "../components/Loading";

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
            <p><strong>Your result </strong> for <strong>{topic.name} </strong> test</p>
        )
    }
}

function Result(props){

    if(props.result.isLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else{
        return(
            <div className={"result"}>
                <div className={"result__header"}>
                    <div className={"result__header__title"}>
                        <RenderTopicTitle topic={props.topic}
                                          topicsErrMess={props.topicsErrMess}
                                          topicsLoading={props.topicsLoading}/>
                    </div>
                    <div className={"result__header__score"}>
                        <p>You scored <strong>{props.result.resultScore} </strong>
                            out of <strong>{props.result.resultClass.length}</strong></p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Result</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className={"result__body"}>
                    {
                        props.quiz.questions.map((question, index) => {
                            return(
                                <ResultCard questionText={question.text}
                                            options={question.options}
                                            answer={question.answer}
                                            index={index}
                                            resultClass={props.result.resultClass[index]}
                                            yourAnswer={props.quiz.yourAnswers[index]}
                                />
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}

export default Result;
