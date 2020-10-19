import React,{Component} from "react";
import {
    addResultClass, addResultScore,
    fetchTopic,
    setAnsweredQuestions,
    setVisitedQuestions,
    setYourAnswers, updateActiveQuestion, updateAnsweredQuestions,
    updateVisitedQuestions, updateYourAnswers
} from "../redux/ActionCreators";
import {withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import "./Quiz.css";
import {Loading} from "../components/Loading";
import QuizFooter from "../components/QuizFooter";
import SidePanel from "../components/SidePanel";
import QuestionPanel from "../components/QuestionPanel";
import TimerHeader from "../components/TimerHeader";

class Quiz extends Component{

    componentDidMount() {
        this.props.fetchTopic(this.props.match.params.topicId);
    }

    render() {
        if(this.props.quiz.isLoading){
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }
        else if(this.props.quiz.errMess){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{this.props.quiz.errMess}</h4>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className={"quiz"}>
                    <TimerHeader topic={this.props.topic}
                                 quiz={this.props.quiz}
                                 addResultScore={this.props.addResultScore}
                                 addResultClass={this.props.addResultClass}/>
                    <div className={"quiz__content"}>
                        <div className={"quiz__content__leftSide"}>
                            <QuestionPanel quiz={this.props.quiz}
                                           topic={this.props.topic}/>
                        </div>
                        <div className={"quiz__content__rightSide"}>
                            <SidePanel quiz={this.props.quiz}
                                       updateVisitedQuestions={this.props.updateVisitedQuestions}
                                       updateActiveQuestion={this.props.updateActiveQuestion}
                                        topic={this.props.topic}/>
                        </div>
                    </div>
                    <QuizFooter quiz={this.props.quiz}
                                updateVisitedQuestions={this.props.updateVisitedQuestions}
                                updateAnsweredQuestions={this.props.updateAnsweredQuestions}
                                updateYourAnswers={this.props.updateYourAnswers}
                                updateActiveQuestion={this.props.updateActiveQuestion}/>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        quiz: state.quiz,
        topic: state.topic,
        result: state.result
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchTopic: (topicId) => dispatch(fetchTopic(topicId)),
        updateVisitedQuestions: (index) => dispatch(updateVisitedQuestions(index)),
        updateAnsweredQuestions: (index, flag) => dispatch(updateAnsweredQuestions(index, flag)),
        updateYourAnswers: (index, answer) => dispatch(updateYourAnswers(index, answer)),
        updateActiveQuestion: (index) => dispatch(updateActiveQuestion(index)),
        addResultClass: (list) => dispatch(addResultClass(list)),
        addResultScore: (score) => dispatch(addResultScore(score))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quiz));

