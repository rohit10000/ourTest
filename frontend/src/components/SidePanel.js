import React, {useState} from "react";
import "./SidePanel.css";

function SidePanel(props){
    const [flag, setFlag] = useState(false);

    const innerWidth = window.innerWidth;

    const toggleStyles = {

        openSide:{
            sidePanel:{
                width:"70vw",
            },
            sidePanel__user_pTag:{
                display: "block"
            },
            sidePanel__buttonExplained:{
                display: "flex"
            },
            sidePanel__questionNavigation:{
                display: "flex"
            },
            sidePanel__hr:{
                display: "block"
            }
        },
        closeSide:{
            sidePanel:{
                width:"10vw",
                zIndex: 0
            },
            sidePanel__user_pTag:{
                display: "none"
            },
            sidePanel__buttonExplained:{
                display: "none"
            },
            sidePanel__questionNavigation:{
                display: "none"
            },
            sidePanel__hr:{
                display: "none"
            }
        }
    }

    const updateActive = (index) => {
        props.updateActiveQuestion(index);
        props.updateVisitedQuestions(index);
    }

    const toggleFlag = () =>{
        let quizContentLeftWidth, quizContentRightWidth, quizFooterLeftWidth, quizFooterRightWidth,
            quizFooterRightDisplay;

        if(!flag){
            quizContentLeftWidth = '30vw';
            quizContentRightWidth = '70vw';
            quizFooterLeftWidth = "0vw";
            quizFooterRightWidth = "100vw";
            quizFooterRightDisplay = "flex";
        }
        else{
            quizContentLeftWidth = '90vw';
            quizContentRightWidth = '10vw';
            quizFooterLeftWidth = "100vw";
            quizFooterRightWidth = "0vw";
            quizFooterRightDisplay = "none";
        }
        document.getElementsByClassName('quiz__content__leftSide')[0].style.width = quizContentLeftWidth;
        document.getElementsByClassName('quiz__content__rightSide')[0].style.width = quizContentRightWidth;
        document.getElementsByClassName('quizFooter__left')[0].style.width = quizFooterLeftWidth;
        document.getElementsByClassName('quizFooter__right')[0].style.width = quizFooterRightWidth;

        document.getElementsByClassName('quizFooter__right')[0].style.display = quizFooterRightDisplay;
        setFlag(!flag);
    }

    return(
        <div className={"sidePanel"} style={
            innerWidth > 720 ? ({color:"black"}): (
                flag ? (toggleStyles.openSide.sidePanel):(toggleStyles.closeSide.sidePanel)
            )
        }>
            <div className={"sidePanel__user"}>

                <p style={
                    innerWidth > 720 ? ({color:"black"}): (
                        flag ? (toggleStyles.openSide.sidePanel__user_pTag): (toggleStyles.closeSide.sidePanel__user_pTag)
                    )
                }>
                    {"Rohit"}
                </p>
                {
                    innerWidth < 720 ? (
                        <div className={"toggleBar btn"} onClick={() => toggleFlag()}>
                            &#9776;
                        </div>
                    ):(<div></div>)
                }
            </div>

            <hr style={
                innerWidth > 720 ? ({color:"black"}): (
                    flag ? (toggleStyles.openSide.sidePanel__hr):(toggleStyles.closeSide.sidePanel__hr)
                )
            }/>

            <div className={"sidePanel__buttonExplained"} style={
                innerWidth > 720 ? ({color:"black"}): (
                    flag ? (toggleStyles.openSide.sidePanel__buttonExplained): (toggleStyles.closeSide.sidePanel__buttonExplained)
                )
            }>
                <div className={"sidePanel__buttonExplained__box"}>
                    <button  className={"btnCommonAttr sidePanel__answered"} disabled={true}>2</button>
                    <p>Answered</p>
                </div>
                <div className={"sidePanel__buttonExplained__box"}>
                    <button  className={"btnCommonAttr sidePanel__notVisited"} disabled={true}>0</button>
                    <p>Not Visited</p>
                </div>
                <div className={"sidePanel__buttonExplained__box"}>
                    <button className={"sidePanel__notAnswered btnCommonAttr"} disabled={true}>1</button>
                    <p>Not Answered</p>
                </div>
                <div className={"sidePanel__buttonExplained__box"}>
                    <button className={"sidePanel__activeInfo btnCommonAttr"} disabled={true}>5</button>
                    <p>Active</p>
                </div>
            </div>

            <hr style={
                innerWidth > 720 ? ({color:"black"}): (
                    flag ? (toggleStyles.openSide.sidePanel__hr):(toggleStyles.closeSide.sidePanel__hr)
                )
            }/>

            <div className={"sidePanel__questionNavigation"} style={
                innerWidth > 720 ? ({color:"black"}): (
                    flag ? (toggleStyles.openSide.sidePanel__questionNavigation): (toggleStyles.closeSide.sidePanel__questionNavigation)
                )
            }>
                <div className={"sidePanel__questionNavigation__title"}>
                    <strong>Section:</strong>
                    <p style={{paddingLeft: "10px"}}>{props.topic.name}</p>
                </div>
                <div style={{height:"40vh"}}>
                    <div className={"sidePanel__questionNavigation__buttons"}>
                        {
                            props.quiz.questions.map((question, index)=>{
                                if(props.quiz.activeQuestion === index) {
                                    return (
                                        <button id={index} className={"sidePanel__active btnCommonAttr btn"} onClick={()=>updateActive(index)}>
                                            {index + 1}
                                        </button>
                                    );
                                }
                                else if(props.quiz.answeredQuestions[index]){
                                    return (
                                        <button id={index} className={"sidePanel__answered btnCommonAttr btn"} onClick={()=>updateActive(index)}>
                                            {index + 1}
                                        </button>
                                    )
                                }
                                else if(props.quiz.visitedQuestions[index]){
                                    return (
                                        <button id={index} className={"sidePanel__notAnswered btnCommonAttr btn"} onClick={()=>updateActive(index)}>
                                            {index + 1}
                                        </button>
                                    )
                                }
                                else {
                                    return (
                                        <button id={index} className={"sidePanel__notVisited btnCommonAttr btn"} onClick={()=>updateActive(index)}>
                                            {index + 1}
                                        </button>
                                    );
                                }
                            })
                        }
                    </div>
                </div>

            </div>

        </div>
    );
}

export default SidePanel;
