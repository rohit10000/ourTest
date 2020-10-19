import React, {useState} from "react";
import "./SectionCard.css";
import {useHistory} from "react-router-dom";
import {Modal, ModalBody, ModalHeader } from 'reactstrap';

function SectionCard({sectionIndex, toggleSection, openClass, section}){


    const history = useHistory();

    const [flag, setFlag] = useState( false);
    const [topicId, setTopicId] = useState(null);

    const toggleModal = (topicId) => {
        setFlag(!flag);
        setTopicId(topicId);
    }


    return(
        <div className={"sectionCard "+ (openClass[sectionIndex]? "open": "")}
             onClick={()=>toggleSection(sectionIndex)}>

            <Modal isOpen={flag} toggle={() =>toggleModal(null)}>
                <ModalHeader toggle={() => toggleModal(null)}>Are you sure you want to proceed to give test!</ModalHeader>
                <ModalBody>
                    <button className={"btn btn-block btn-primary"} onClick={()=>{
                        console.log(topicId);
                        history.push(`/quiz/${topicId}`)
                    }}>
                        Click here to proceed
                    </button>
                </ModalBody>
            </Modal>

            <div className={"sectionCard__heading"}>
                {section.name}
            </div>
            <div className={"sectionCard__topics"}>
                {
                    section.topics.map((topic, i) =>{
                        return(
                            <div onClick={() => {
                                toggleModal(topic.id);
                            }} key={i}>
                                {topic.name}
                            </div>

                        );
                    })
                }
            </div>
        </div>
    );
}
export default SectionCard;
