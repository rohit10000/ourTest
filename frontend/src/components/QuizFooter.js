import React, {useState} from "react";
import "./QuizFooter.css";
import {
    setActiveQuestion,
    updateAnsweredQuestions,
    updateVisitedQuestions,
    updateYourAnswer
} from "../contextAPI/actions";

import {useStateValue} from "../contextAPI/StateProvider";
import {Modal, ModalBody, ModalHeader} from "reactstrap";

function QuizFooter(){

    const [state, dispatch] = useStateValue();

    const [isModalOpen, toggleModel] = useState(false);


    const updateState = () => {

        updateVisitedQuestions(parseInt(state.activeQuestion) - 1, dispatch);

        let element = document.getElementById(state.activeQuestion);

        let userAnswer = (element
            .querySelector('input[name=question'+state.activeQuestion+']:checked')||{}).value;

        if(userAnswer!=undefined){

            updateYourAnswer(userAnswer, dispatch);

        }
        else{
            updateYourAnswer(0, dispatch);
        }

        if(userAnswer != undefined){
            updateAnsweredQuestions(true, dispatch);
        }else{
            updateAnsweredQuestions(false, dispatch);
        }

        let k = (parseInt(state.activeQuestion) % state.topicDetails.questions.length)+1;
        setActiveQuestion(k, dispatch);
    }

    const clearResponse = () =>{
        for(let i = 0; i<4; i++){
            document.getElementById(state.activeQuestion+"_"+(parseInt(i)+1)).checked = false;
        }
    }
    return(

        <div className={"quizFooter"}>
            <Modal isOpen={isModalOpen} toggle={() => toggleModel(!isModalOpen)}>
                <ModalHeader>Instructions</ModalHeader>
                <ModalBody>


                </ModalBody>
            </Modal>
            <div className={"quizFooter__left"}>
                <button className="btn btn-primary" onClick={clearResponse}>Clear Response</button>
                <button className="btn btn-primary" onClick={updateState}>Save & Next</button>
            </div>

            <div className={"quizFooter__right"}>
                <button className={"btn btn-primary"} onClick={() => {toggleModel(!isModalOpen)}}>Instructions</button>
            </div>

        </div>
    )
}

export default QuizFooter;
