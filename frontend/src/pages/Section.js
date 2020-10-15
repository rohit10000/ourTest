import React, {Component, useEffect, useState} from "react";
import SectionCard from "../components/SectionCard";
import "./Section.css";
import {useStateValue} from "../contextAPI/StateProvider";

function Section(){

    const [state, _] = useStateValue();

    const [openClass, setOpenClass] = useState([]);

    useEffect(()=>{
        let list = [];
        for(let i=0; i<state.sectionDetails[state.testId].length; i++){
            list.push(false);
        }
        setOpenClass(list);
    }, []);

    const toggleSection = function (sectionId){

        setOpenClass(openClass.map((info, i) =>{
            if(i == sectionId){
                info = !info
            }
            else{
                info = false;
            }
            return info;
        }));
    };

    return(
        <div className={"section"}>
            <h1>{state.testTitle}</h1>
            <div className={"subsection"}>
                {state.sectionDetails[state.testId].map((section, i) => {
                    return(
                        <div key={i}>
                            <SectionCard sectionId={i}
                                         toggleSection = {toggleSection}
                                         openClass = {openClass}
                                         section = {section}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default Section;
