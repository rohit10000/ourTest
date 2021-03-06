import React,{Component} from "react";
import {
    addResultClass, addResultScore, fetchQuiz, postLog, quizLoading,
    updateActiveQuestion, updateAnsweredQuestions,
    updateVisitedQuestions, updateYourAnswers
} from "../redux/ActionCreators";
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import "./Quiz.css";
import {Loading} from "../components/Loading";
import QuizFooter from "../components/QuizFooter";
import SidePanel from "../components/SidePanel";
import QuestionPanel from "../components/QuestionPanel";
import TimerHeader from "../components/TimerHeader";
import {Button, Modal, ModalBody, ModalHeader} from 'reactstrap';

class Quiz extends Component{
    constructor(props) {
        super(props);

        this.state = {
            topicId: this.props.match.params.topicId,
            isModalOpen: true
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuiz(this.state.topicId, this.props.user.accessToken);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        console.log("Debug in Quiz: ", this.props.topics);

        if(this.props.quiz.isLoading){
            return (
                <div className="container">
                    <div className="row">
                        <Loading minHeight={"60vh"}/>
                    </div>
                </div>
            )
        }
        else if(!this.props.user || !this.props.user.accessToken){
            return (
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Your are not authenticated, please login before you continue.</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h4>{this.props.quiz.errMess}</h4>
                                    <Link to={"/home"}>
                                        <Button type="button" color="primary">Home</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </ModalBody>
                </Modal>
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
                                 user={this.props.user}
                                 postLog={this.props.postLog}
                                 quizLoading={this.props.quizLoading}
                                 addResultScore={this.props.addResultScore}
                                 addResultClass={this.props.addResultClass}
                    />

                    <div className={"quiz__content"}>
                        <div className={"quiz__content__leftSide"}>
                            <QuestionPanel quiz={this.props.quiz}/>
                        </div>
                        <div className={"quiz__content__rightSide"}>
                            <SidePanel quiz={this.props.quiz}
                                       user={this.props.user}
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
                                updateActiveQuestion={this.props.updateActiveQuestion}
                    />

                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        quiz: state.quiz,
        topics: state.topics,
        result: state.result,
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchQuiz: (topicId, accessToken) => dispatch(fetchQuiz(topicId, accessToken)),
        updateVisitedQuestions: (index) => dispatch(updateVisitedQuestions(index)),
        updateAnsweredQuestions: (index, flag) => dispatch(updateAnsweredQuestions(index, flag)),
        updateYourAnswers: (index, answer) => dispatch(updateYourAnswers(index, answer)),
        updateActiveQuestion: (index) => dispatch(updateActiveQuestion(index)),
        addResultClass: (list) => dispatch(addResultClass(list)),
        addResultScore: (score) => dispatch(addResultScore(score)),
        quizLoading: () => dispatch(quizLoading()),
        postLog: (name, scoredMarks, totalMarks, userId) => dispatch(postLog(name, scoredMarks, totalMarks, userId))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quiz));

