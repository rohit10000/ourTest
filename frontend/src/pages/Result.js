import React from "react";
import ResultCard from "../components/ResultCard";
import "./Result.css";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";
import {Loading} from "../components/Loading";


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
                        <p><strong>Your result </strong> for <strong>{props.topic.topic.name} </strong> test</p>
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
                        props.quiz.questions.map((info, index) => {
                            return(
                                <ResultCard question={info.text}
                                            options={info.options}
                                            answer={info.answer}
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
