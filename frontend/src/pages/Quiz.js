import React,{Component} from "react";
import {
    addResultClass, addResultScore, fetchQuiz,
    fetchTopics, updateActiveQuestion, updateAnsweredQuestions,
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
    constructor(props) {
        super(props);

        this.state = {
            topicId: this.props.match.params.topicId
        }
    }


    componentDidMount() {
        this.props.fetchQuiz(this.state.topicId);
    }

    render() {
        console.log("Debug in Quiz: ", this.props.topics);
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
                    <TimerHeader topic={this.props.topics.topics.filter((topic) => topic._id === this.state.topicId)[0]}
                                 topicsLoading={this.props.topics.isLoading}
                                 topicsErrMess={this.props.topics.errMess}
                                 quiz={this.props.quiz}
                                 addResultScore={this.props.addResultScore}
                                 addResultClass={this.props.addResultClass}/>

                    <div className={"quiz__content"}>
                        <div className={"quiz__content__leftSide"}>
                            <QuestionPanel quiz={this.props.quiz}/>
                        </div>
                        <div className={"quiz__content__rightSide"}>
                            <SidePanel quiz={this.props.quiz}
                                       updateVisitedQuestions={this.props.updateVisitedQuestions}
                                       updateActiveQuestion={this.props.updateActiveQuestion}
                                       topic={this.props.topics.topics.filter((topic) => topic._id === this.state.topicId)[0]}
                                       topicsLoading={this.props.topics.isLoading}
                                       topicsErrMess={this.props.topics.errMess}/>
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
        topics: state.topics,
        result: state.result
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchQuiz: (topicId) => dispatch(fetchQuiz(topicId)),
        updateVisitedQuestions: (index) => dispatch(updateVisitedQuestions(index)),
        updateAnsweredQuestions: (index, flag) => dispatch(updateAnsweredQuestions(index, flag)),
        updateYourAnswers: (index, answer) => dispatch(updateYourAnswers(index, answer)),
        updateActiveQuestion: (index) => dispatch(updateActiveQuestion(index)),
        addResultClass: (list) => dispatch(addResultClass(list)),
        addResultScore: (score) => dispatch(addResultScore(score))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quiz));

