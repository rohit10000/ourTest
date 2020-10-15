import React, {useEffect} from "react";
import "./SectionCard.css";
import {useHistory} from "react-router-dom";
import {useStateValue} from "../contextAPI/StateProvider";
import {
    setActiveQuestion,
    setAnsweredQuestions,
    setVisitedQuestions, setYourAnswer,
    updateTopicDetails,
    updateTopicId
} from "../contextAPI/actions";

function SectionCard({sectionId, toggleSection, openClass, section}){

    const [state, dispatch] = useStateValue();

    const history = useHistory();

    const setTopicDetails =  () => {
        fetch(`${state.proxy}/topics/${state.topicId}`)
            .then(res => res.json())
            .then(data=>{
                console.log(data);

                updateTopicDetails(data, dispatch);

                let numberOfQuestions = data.questions.length;
                console.log(numberOfQuestions);

                let yourAnswerList = Array(numberOfQuestions).fill(0);
                setYourAnswer(yourAnswerList, dispatch);

                let visitedQuestionsList = Array(numberOfQuestions).fill(false);
                visitedQuestionsList[0] = true;
                setVisitedQuestions(visitedQuestionsList, dispatch);

                let answeredQuestionsList = Array(numberOfQuestions).fill(false);
                setAnsweredQuestions(answeredQuestionsList, dispatch);

            })
            .catch(err => {
                console.log(err)
            });
    }


    const createConfirm = (topic_id) =>{

        // eslint-disable-next-line no-restricted-globals
        let flag = confirm("Are you sure you want to do Quiz?");
        if(flag){

            updateTopicId(topic_id, dispatch);
            setTopicDetails();

            history.push('/quiz');
        }
    }
    useEffect(()=>{

        let numberOfQuestions = state.topicDetails.questions.length;
        console.log(numberOfQuestions);

        if(numberOfQuestions> 0){

            let list = Array(numberOfQuestions).fill(false);
            list[0] = true;

            setVisitedQuestions(list, dispatch);
            setActiveQuestion(1, dispatch);

            list = Array(numberOfQuestions).fill(false);

            setAnsweredQuestions(list, dispatch);

            list = Array(numberOfQuestions).fill(0);

            setYourAnswer(list, dispatch)
        }
        console.log(state.topicDetails);

        return ()=>{};
    }, [state.topicDetails]);

    return(
        <div className={"sectionCard "+ (openClass[sectionId]? "open": "")}
            key={sectionId}
             onClick={()=>toggleSection(sectionId)}
        >
            <div className={"sectionCard__heading"}>
                {section.name}
            </div>
            <div className={"sectionCard__topics"}>
                {

                    section.topics.map((topic, i) =>{
                        return(
                            <div onClick={()=>createConfirm(topic.id)} key={i}>
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
