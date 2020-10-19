import React, {Component} from "react";
import { connect } from 'react-redux';
import {Route, Switch, withRouter, Redirect} from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import {fetchSections, fetchTests} from "../redux/ActionCreators";
import Home from "../pages/Home";
import Section from "../pages/Section";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";

class Main extends Component{
    componentDidMount() {
        this.props.fetchTests();
        this.props.fetchSections();
    }

    render() {
        const SectionWithId = ({match}) =>{
            return(
                <div>
                    <Header user={this.props.user} />
                    <Section test={this.props.tests.tests.filter((test) => test.id === parseInt(match.params.testId, 10))[0]}
                             testsLoading={this.props.tests.isLoading}
                             testsErrMess={this.props.tests.errMess}
                             sections={this.props.sections.sections.filter((section) => section.testId === parseInt(match.params.testId, 10))}
                             sectionsLoading={this.props.sections.isLoading}
                             sectionsErrMess={this.props.sections.errMess}
                    />
                    <Footer/>
                </div>

            );
        };
        return(
            <div className={"Main"}>
                <Switch >
                    <Route path={"/home"}>
                        <Header user={this.props.user} />
                        <Home tests={this.props.tests}/>
                        <Footer/>
                    </Route>
                    <Route path={'/section/:testId'} component={SectionWithId}/>
                    <Route path={'/quiz/:topicId'}>
                        <Header user={this.props.user} />
                        <Quiz/>
                    </Route>
                    <Route exact path={"/result"}>
                        <Header user={this.props.user} />
                        <Result result={this.props.result}
                                quiz={this.props.quiz}
                                topic={this.props.topic}/>
                        <Footer/>
                    </Route>
                    <Redirect to="/home" />
                </Switch>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
        tests: state.tests,
        sections: state.sections,
        topic: state.topic,
        quiz: state.quiz,
        result: state.result
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchTests: ()=> dispatch(fetchTests()),
        fetchSections: () => dispatch(fetchSections()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
