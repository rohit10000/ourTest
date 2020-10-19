import React, {Component} from "react";
import SectionCard from "../components/SectionCard";
import "./Section.css";
import {Loading} from "../components/Loading"

function RenderTitle(props){
    if(props.testsLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if(props.testsErrMess){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.tests.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <h1>{props.test.title}</h1>
        )
    }
}

class Section extends Component{
    constructor(props) {
        super(props);

        this.state={
            openClass: Array(this.props.sections.length).fill(false)
        }
        this.toggleSection = this.toggleSection.bind(this);
    }

    toggleSection(sectionIndex){
        let newList = this.state.openClass;

        for(let i=0; i<newList.length; i++){
            if(i === sectionIndex)
                newList[i] = !newList[i]
            else
                newList[i] = false;
        }

        this.setState({
            openClass: newList
        })
    }

    render() {
        if(this.props.sectionsLoading){
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }
        else if(this.props.sectionsErrMess){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{this.props.sectionsErrMess}</h4>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className={"section"}>
                    <RenderTitle test={this.props.test}
                                 testsLoading={this.props.testsLoading}
                                 testsErrMess={this.props.testsErrMess}/>
                    <div className={"subsection"}>
                        {
                            this.props.sections.map((section, i) => {
                            return(
                                <div key={i}>
                                    <SectionCard sectionIndex={i}
                                                 toggleSection={this.toggleSection}
                                                 openClass={this.state.openClass}
                                                 section={section}
                                                 topics={this.props.topics.filter((topic) => topic.sectionId === section._id)}
                                                 topicsLoading={this.props.topicsLoading}
                                                 topicsErrMess={this.props.topicsErrMess}
                                    />
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            );
        }
    }
}
export default Section;
