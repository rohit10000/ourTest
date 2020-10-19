import React, {useState} from "react";
import "./QuizFooter.css";

import {Modal, ModalBody, ModalHeader} from "reactstrap";

function QuizFooter(props){

    const [isModalOpen, toggleModel] = useState(false);


    const saveAndNext = () => {
        let numberOfQuestions = props.quiz.questions.length;

        //logic for updating visited questions
        props.updateVisitedQuestions((props.quiz.activeQuestion+1)%numberOfQuestions);


        //logic for updating yourAnswer
        let element = document.getElementById(props.quiz.activeQuestion);
        let userAnswer = (element
            .querySelector('input[name=question'+props.quiz.activeQuestion+']:checked')||{}).value;

        if(userAnswer!=undefined){
            props.updateYourAnswers(props.quiz.activeQuestion, userAnswer);
        }
        else{
            props.updateYourAnswers(props.quiz.activeQuestion, 0);
        }

        //logic for updating answered questions
        if(userAnswer != undefined){
            props.updateAnsweredQuestions(props.quiz.activeQuestion, true);
        }else{
            props.updateAnsweredQuestions(props.quiz.activeQuestion, false);
        }

        //logic for updating active questions
        props.updateActiveQuestion((props.quiz.activeQuestion+1)%numberOfQuestions);
    }

    const clearResponse = () =>{
        for(let i = 0; i<4; i++){
            document.getElementById(props.quiz.activeQuestion + "_" + i).checked = false;
        }
    }
    return(

        <div className={"quizFooter"}>
            <Modal isOpen={isModalOpen} toggle={() => toggleModel(!isModalOpen)}>
                <ModalHeader>Instructions</ModalHeader>
                <ModalBody>
                    <p>Complete the test.</p>
                </ModalBody>
            </Modal>
            <div className={"quizFooter__left"}>
                <button className="btn btn-primary" onClick={clearResponse}>Clear Response</button>
                <button className="btn btn-primary" onClick={saveAndNext}>Save & Next</button>
            </div>

            <div className={"quizFooter__right"}>
                <button className={"btn btn-primary"} onClick={() => {toggleModel(!isModalOpen)}}>Instructions</button>
            </div>

        </div>
    )
}

export default QuizFooter;
